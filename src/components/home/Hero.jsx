import React, { useState } from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

const Hero = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('');

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/hotel.jpeg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg- bg-opacity-40"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-4 leading-tight">
            Descubra lujo y comodidad
          </h1>
          <p className="text-lg md:text-xl text-white mb-8">
            Encuentre y reserve su alojamiento perfecto con tarifas exclusivas y increíbles ofertas
          </p>
        </div>

        {/* Search Form */}
        <div className="mt-12 max-w-5xl mx-auto animate-slide-up">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-gold-500" />
                  <input
                    type="date"
                    className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-gold-500" />
                  <input
                    type="date"
                    className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">N° de Personas</label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 h-5 w-5 text-gold-500" />
                  <input
                  type='number'
                  className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 appearance-none"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}/>
                </div>
              </div>

              <div className="mt-6 text-center">
              <button className="btn-primary px-8 py-3">
                Buscar Disponibilidad
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;