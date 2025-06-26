import React, { useEffect, useState, useRef } from 'react';
import { generateSignature } from '../api/wompi';
import { createReservation } from '../api/reservation';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router';

const BotonPersonalizado = ({
  amount,
  currency = 'COP',
  expirationTime,
  customerData = {},
  taxes = {},
  totalPrice,
  reservationData = {}
}) => {
  const [signature, setSignature] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();


    const referenceRef = useRef(`${uuidv4()}_${Date.now()}`);
    const reference = referenceRef.current;
    reservationData.reference = reference;
    
    const redirectUrl = window.location.origin + `/booking?reference=${reference}&price=${totalPrice}&half=${amount.slice(0, -2)}`; 
  

  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY_TEST;

  // Cargar script de wompi si aún no existe
  const loadWompiScript = () => {
    if (document.querySelector('script[src="https://checkout.wompi.co/widget.js"]')) {
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.wompi.co/widget.js';
      script.setAttribute('data-render', 'button');
      script.setAttribute('data-public-key', PUBLIC_KEY);
      script.setAttribute('data-currency', currency);
      script.setAttribute('data-amount-in-cents', amount.toString());
      script.setAttribute('data-reference', reference);
      script.setAttribute('data-signature:integrity', signature);
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  };

  // Obtener firma del backend
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await generateSignature({reference, amount, currency });
        if (!response.status || response.status !== 200) {
          throw new Error('Error en la respuesta del servidor');
        }
        setSignature(response.data.signature);
        await loadWompiScript();
      } catch (error) {
        console.error(error);
        setError(error.toString()); // o un texto más amigable
      } finally {
        setIsLoading(false);
      }
    })();
  }, [amount, currency]);

  // Función para crear y dar inicio al widget
  const handleClick = async () => {
    if (isLoading) return;

    if (!signature) {
      console.error("Firma sin preparar.");
      return;
    }

    await createReservation(reservationData);

    // Instanciar el widget de pago según la documentación de Wompi
    const checkout = new window.WidgetCheckout({ 
      currency, 
      amountInCents: amount, 
      reference, 
      publicKey: PUBLIC_KEY, 
      signature: { integrity: signature },
      redirectUrl,
      expirationTime,
    });

    checkout.open(function (result) {
      console.log(result);
      if (result?.transaction) {
        console.log("Transacción creada.", result.transaction);
        navigate(`/booking?reference=${reference}&price=${totalPrice}&half=${amount.slice(0, -2)}`);
        
      } else {
        console.error("Transacción sin completar.", result);
        
      }
    });
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <button disabled={isLoading} onClick={handleClick} className='bg-blue-500 text-gray-50 px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-auto'>
      {isLoading ? "Cargando…" : "Pagar con Wompi"}
    </button>
  );
}

export default BotonPersonalizado;

