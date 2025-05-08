import React, { useState, useEffect } from 'react';
import Logo from '../components/ui/Logo';



const Reserve = () => {
  const [formData, setFormData] = useState(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    return {
      persons: 2,
      checkIn: today.toISOString().split('T')[0],
      checkOut: tomorrow.toISOString().split('T')[0],
      priceRoom: 0,
    };
  });

  function calculateDays(checkIn, checkOut) {
    // Convertir las cadenas de fecha a objetos Date
    const dateCheckIn = new Date(checkIn);
    const dateCheckOut = new Date(checkOut);
    
    // Calcular la diferencia en milisegundos
    const diferenciaTiempo = dateCheckOut.getTime() - dateCheckIn.getTime();
    
    // Convertir de milisegundos a días
    // (1000 ms * 60 s * 60 min * 24 h)
    const diferenciaDias = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));
    
    return diferenciaDias;
  }

  const [days, setDays] = useState(calculateDays(formData.checkIn, formData.checkOut));

  const handleChange = (e) => {
    
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    // Aquí puedes hacer la petición a tu backend (POST)
  };

  useEffect(() => {
    setDays(calculateDays(formData.checkIn, formData.checkOut));
  }, [formData.checkIn, formData.checkOut]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-100 to-amber-200 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md flex flex-col items-center gap-4">
        <Logo size="large"/>
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <div>
            <label className="block text-sm font-medium text-gray-700">N° de Personas</label>
            <input
              type='number'
              name='persons'
              value={formData.persons}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Check-in</label>
            <input
              type="date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Check-out</label>
            <input
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-600 text-white py-2 rounded-xl font-semibold hover:bg-amber-700 transition duration-300"
          >
            Confirmar Reserva
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reserve;
