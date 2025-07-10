import React from 'react';
import { 
  Calendar, 
  Users, 
  MapPin, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  XCircle,
  Eye,
  MoreHorizontal
} from 'lucide-react';

const RecentReservations = () => {
  const reservations = [
    {
      id: 1,
      guestName: 'María González',
      room: 'Suite Familiar Premium',
      checkIn: '2025-01-15',
      checkOut: '2025-01-18',
      guests: 4,
      status: 'CONFIRMED',
      total: 750000,
      avatar: 'MG'
    },
    {
      id: 2,
      guestName: 'Carlos Rodríguez',
      room: 'Habitación Doble Deluxe',
      checkIn: '2025-01-16',
      checkOut: '2025-01-19',
      guests: 2,
      status: 'UNCONFIRMED',
      total: 540000,
      avatar: 'CR'
    },
    {
      id: 3,
      guestName: 'Ana Martínez',
      room: 'Suite Presidencial',
      checkIn: '2025-01-17',
      checkOut: '2025-01-21',
      guests: 2,
      status: 'CONFIRMED',
      total: 1800000,
      avatar: 'AM'
    },
    {
      id: 4,
      guestName: 'Diego Sánchez',
      room: 'Habitación Individual Ejecutiva',
      checkIn: '2025-01-18',
      checkOut: '2025-01-20',
      guests: 1,
      status: 'CANCELLED',
      total: 240000,
      avatar: 'DS'
    }
  ];

  const getStatusInfo = (status) => {
    switch (status) {
      case 'CONFIRMED':
        return {
          color: 'bg-green-100 text-green-800 border-green-200',
          icon: CheckCircle,
          label: 'Confirmada'
        };
      case 'UNCONFIRMED':
        return {
          color: 'bg-amber-100 text-amber-800 border-amber-200',
          icon: AlertCircle,
          label: 'Pendiente'
        };
      case 'CANCELLED':
        return {
          color: 'bg-red-100 text-red-800 border-red-200',
          icon: XCircle,
          label: 'Cancelada'
        };
      default:
        return {
          color: 'bg-gray-100 text-gray-800 border-gray-200',
          icon: Clock,
          label: status
        };
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { 
      day: 'numeric',
      month: 'short'
    };
    
    const formattedDate = date.toLocaleDateString('es-ES', options);
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="h-2 bg-gradient-to-r from-amber-400 to-yellow-500" />
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-serif font-semibold text-gray-800">Reservas Recientes</h2>
          <button className="text-amber-600 hover:text-amber-700 text-sm font-medium flex items-center gap-1">
            Ver todas
            <Eye className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-4">
          {reservations.map((reservation) => {
            const statusInfo = getStatusInfo(reservation.status);
            const StatusIcon = statusInfo.icon;

            return (
              <div key={reservation.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {reservation.avatar}
                  </div>
                  
                  {/* Guest Info */}
                  <div>
                    <h3 className="font-semibold text-gray-800">{reservation.guestName}</h3>
                    <p className="text-sm text-gray-600">{reservation.room}</p>
                  </div>
                </div>

                {/* Reservation Details */}
                <div className="hidden md:flex items-center gap-6">
                  <div className="text-center">
                    <div className="flex items-center gap-1 text-gray-600 mb-1">
                      <Calendar className="w-4 h-4" />
                      <span className="text-xs">Check-in</span>
                    </div>
                    <p className="text-sm font-medium">{formatDate(reservation.checkIn)}</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center gap-1 text-gray-600 mb-1">
                      <Users className="w-4 h-4" />
                      <span className="text-xs">Huéspedes</span>
                    </div>
                    <p className="text-sm font-medium">{reservation.guests}</p>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-xs text-gray-600 mb-1">Total</p>
                    <p className="text-sm font-semibold text-gray-800">{formatPrice(reservation.total)}</p>
                  </div>
                </div>

                {/* Status & Actions */}
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border flex items-center gap-1 ${statusInfo.color}`}>
                    <StatusIcon className="w-3 h-3" />
                    {statusInfo.label}
                  </span>
                  
                  <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                    <MoreHorizontal className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecentReservations;