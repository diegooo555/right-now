import React, { useEffect, useRef, useState } from 'react';
import { generateSignature } from '../api/wompi.js';
import { v4 as uuidv4 } from 'uuid';

const WompiWidget = ({
  amount,
  currency = 'COP',
  expirationTime,
  customerData = {},
  taxes = {},
  totalPrice,
}) => {
  const formRef = useRef(null);
  const [signature, setSignature] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const referenceRef = useRef(`${uuidv4()}_${Date.now()}`);
  const reference = referenceRef.current;
  
  const redirectUrl = window.location.origin + `/booking?reference=${reference}&price=${totalPrice}&half=${amount.slice(0, -2)}`; 

  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY_TEST;

  const getSignature = async () => {
    try {
      const response = await generateSignature({
        reference: reference,
        amount: amount,
        currency: currency,
      });

      console.log(response)

      if (!response.status || response.status !== 200) {
        throw new Error('Error en la respuesta del servidor');
      }

      setSignature(response.data.signature);
    } catch (error) {
      console.error('Error obteniendo firma:', error);
      setError('Error al obtener la firma de seguridad');
    }
  };

  const loadWompiScript = () => {
    // Verificar si el script ya existe
    if (document.querySelector('script[src="https://checkout.wompi.co/widget.js"]')) {
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.wompi.co/widget.js';
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  };

  const createWompiButton = () => {
    if (!formRef.current || !signature) return;

    formRef.current.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://checkout.wompi.co/widget.js';
    script.setAttribute('data-render', 'button');
    script.setAttribute('data-public-key', PUBLIC_KEY);
    script.setAttribute('data-currency', currency);
    script.setAttribute('data-amount-in-cents', amount.toString());
    script.setAttribute('data-reference', reference);
    script.setAttribute('data-signature:integrity', signature);

    if (redirectUrl) {
      script.setAttribute('data-redirect-url', redirectUrl);
    }

    if (expirationTime) {
      script.setAttribute('data-expiration-time', expirationTime);
    }

    if (customerData.email) {
      script.setAttribute('data-customer-data:email', customerData.email);
    }

    if (customerData.fullName) {
      script.setAttribute('data-customer-data:full-name', customerData.name);
    }

    if (taxes.consumption) {
      script.setAttribute('data-tax-in-cents:consumption', taxes.consumption.toString());
    }
    if (taxes.vat) {
      script.setAttribute('data-tax-in-cents:vat', taxes.vat.toString());
    }

    formRef.current.appendChild(script);
  };

  useEffect(() => {
    const initializeWidget = async () => {
      try {
        setIsLoading(true);
        setError(null);

        await getSignature();
        
        await loadWompiScript();
        
        setIsLoading(false);
      } catch (error) {
        console.error('Error inicializando widget:', error);
        setError('Error al inicializar el widget de pago');
        setIsLoading(false);
      }
    };

    initializeWidget();
  }, [amount, currency]);

  useEffect(() => {
    if (signature && !isLoading) {
      setTimeout(() => {
        createWompiButton();
      }, 100);
    }
  }, [signature, isLoading]);

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <p className="text-red-700">{error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <div className="wompi-widget-container">
      {isLoading ? (
        <div className="flex items-center justify-center p-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-2 text-gray-600">Cargando widget de pago...</span>
        </div>
      ) : (
        <div ref={formRef} className="wompi-payment-form">
          {/* BOTON DINAMICO*/}
        </div>
      )}
    </div>
  );
};

export default WompiWidget;