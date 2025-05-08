import React, { useEffect, useState } from 'react';
import { getReservations } from '../api/reservation.js';
import Navbar from '../components/home/Navbar.jsx';
import { useUserContext } from '../context/useUsercontext.js';

function Reservations() {
  const [reservations, setReservations] = useState([]);
  const {user} = useUserContext();

  useEffect(() => {
    if (!user || !user.id) return;

    const getReservationsHandle = async () => {
      try {
        const response = await getReservations(user.id);
        setReservations(response);
      } catch (error) {
        console.error(error);
      }
    };

    getReservationsHandle();
  }, [user]);

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'confirmada':
        return 'bg-green-100 text-green-800';
      case 'pendiente':
        return 'bg-amber-100 text-amber-800';
      case 'cancelada':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Formatear fecha
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  // Calcular duración de estancia
  const calculateDuration = (checkIn, checkOut) => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-amber-50 py-12 px-4 sm:px-6 lg:px-8">
        
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-amber-800 mb-8 text-center">Mis Reservaciones</h1>
        
        {reservations.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-lg text-gray-600">No tienes reservaciones activas.</p>
            <button className="mt-4 bg-amber-500 hover:bg-amber-600 text-white py-2 px-6 rounded-lg transition-colors duration-300">
              Reservar ahora
            </button>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-1">
            {reservations.map((reservation) => (
              <div key={reservation.id} className="bg-white rounded-lg overflow-hidden shadow-md border-l-4 border-amber-400">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800">
                        {reservation.hotel?.name || 'Hotel'} - Habitación {reservation.room?.description || '#'}
                      </h2>
                      <p className="text-gray-600 mt-1">
                        {reservation.hotel?.address || 'Dirección no disponible'}, {reservation.hotel?.city || 'Ciudad'}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(reservation.status)}`}>
                      {reservation.status}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <p className="text-xs text-amber-600 uppercase font-medium">Check-in</p>
                      <p className="text-gray-800 font-medium">{formatDate(reservation.checkIn)}</p>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <p className="text-xs text-amber-600 uppercase font-medium">Check-out</p>
                      <p className="text-gray-800 font-medium">{formatDate(reservation.checkOut)}</p>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <p className="text-xs text-amber-600 uppercase font-medium">Duración</p>
                      <p className="text-gray-800 font-medium">
                        {calculateDuration(reservation.checkIn, reservation.checkOut)} noches
                      </p>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 mt-2">
                    <div className="flex flex-wrap justify-between items-center">
                      <div>
                        <p className="text-gray-600">
                          <span className="font-medium">{reservation.numPersons}</span> {reservation.numPersons > 1 ? 'personas' : 'persona'}
                        </p>
                        <p className="text-gray-600">
                          Capacidad máxima: <span className="font-medium">{reservation.room?.capacity || '-'}</span>
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500">Precio total</p>
                        <p className="text-2xl font-bold text-amber-600">
                          ${reservation.total?.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex justify-end gap-3 mt-4">
                      {reservation.status.toLowerCase() !== 'cancelada' && (
                        <button className="bg-red-50 hover:bg-red-100 text-red-600 py-2 px-4 rounded transition-colors duration-300">
                          Cancelar
                        </button>
                      )}
                      <button className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded transition-colors duration-300">
                        Ver detalles
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    </>
  );
}

export default Reservations;