import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getReservations } from '../../api/reservation.js';
import { calculateDuration, getStatusInfo } from '../../utils/reservationUtil.js';
import { useUserContext } from '../../context/useUsercontext.js';
import {
  Calendar, Users, MapPin, Building2, Clock, Eye,
} from 'lucide-react';
import { toast } from 'react-toastify';
import ReservationDetailsModal from '../../components/hotel/ReservationDetailsModal.jsx';
import Navbar from '../../components/home/Navbar.jsx';

function Reservations() {
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const { user, loading } = useUserContext();

  const {
    data: reservations = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['reservations', user?.sub],
    queryFn: () => getReservations(user.sub),
    enabled: !!user?.sub && !loading,
    onError: () => toast.error('Error cargando las reservaciones'),
  });  

  const formatShortDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short',
    }).replace(/^./, (str) => str.toUpperCase());
  };

  const handleViewDetails = (reservation) => {
    setSelectedReservation(reservation);
    setShowDetails(true);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-white to-amber-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-gray-800 mb-4">Mis Reservaciones</h1>
            <p className="text-amber-500 text-xl font-bold">Gestiona y revisa tus reservas</p>
          </div>

          {isLoading ? (
            <p className="text-center text-gray-500">Cargando reservaciones...</p>
          ) : isError || reservations.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
              <Building2 className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No tienes reservaciones</h3>
            </div>
          ) : (
            <div className="grid gap-8">
              {reservations.map((reservation) => {
                const statusInfo = getStatusInfo(reservation.status);
                const nights = calculateDuration(reservation.checkIn, reservation.checkOut);

                return (
                  <div key={reservation.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="h-2 bg-gradient-to-r from-amber-400 to-yellow-500" />

                    <div className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div className="flex-1">
                          <div className="flex items-start gap-4 mb-4">
                            {reservation.hotel.urlImg && (
                              <img
                                src={reservation.hotel.urlImg}
                                alt={reservation.hotel.name}
                                className="w-20 h-20 object-cover rounded-xl flex-shrink-0"
                              />
                            )}
                            <div>
                              <h2 className="text-2xl font-serif font-bold text-gray-800 mb-1">
                                {reservation.hotel.name}
                              </h2>
                              <p className="text-amber-600 font-medium mb-2">
                                {reservation.room.name} - {reservation.room.type}
                              </p>
                              <div className="flex items-center gap-2 text-gray-600">
                                <MapPin className="w-4 h-4" />
                                <span>{reservation.hotel.address}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className={`px-4 py-2 rounded-full text-sm font-medium border flex items-center gap-2 ${statusInfo.color}`}>
                            <statusInfo.icon className="w-4 h-4" />
                            {statusInfo.label}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                        {[
                          { icon: Calendar, label: 'Check-in', value: formatShortDate(reservation.checkIn), color: 'amber' },
                          { icon: Calendar, label: 'Check-out', value: formatShortDate(reservation.checkOut), color: 'amber' },
                          { icon: Users, label: 'Huéspedes', value: `${reservation.numPersons} de ${reservation.room.capacity}`, color: 'blue' },
                          { icon: Clock, label: 'Duración', value: `${nights} ${nights === 1 ? 'noche' : 'noches'}`, color: 'green' },
                        ].map(({ icon, label, value, color }, index) => (
                          <div key={index} className={`bg-${color}-50 p-4 rounded-xl`}>
                            <div className="flex items-center gap-2 mb-2">
                              {React.createElement(icon, { className: `w-4 h-4 text-${color}-600` })}
                              <p className={`text-xs text-${color}-600 uppercase font-medium`}>{label}</p>
                            </div>
                            <p className="font-semibold text-gray-800">{value}</p>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-6 border-t border-gray-100">
                        <div className="mb-4 sm:mb-0">
                          <p className="text-sm text-gray-600 mb-1">Total pagado</p>
                          <p className="text-3xl font-bold text-gray-800">
                            ${reservation.total.toLocaleString()}
                            <span className="text-sm text-gray-500 font-normal"> COP</span>
                          </p>
                          <p className="text-sm text-green-600">Depósito: ${reservation.deposit.toLocaleString()}</p>
                        </div>

                        <button
                          onClick={() => handleViewDetails(reservation)}
                          className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-white rounded-lg transition-all duration-300 font-medium shadow-md hover:shadow-lg"
                        >
                          <Eye className="w-4 h-4" />
                          Ver Detalles
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {showDetails && (
        <ReservationDetailsModal
          reservation={selectedReservation}
          onClose={() => setShowDetails(false)}
        />
      )}
    </>
  );
}

export default Reservations;
