import {
  getStatusInfo,
  formatDate,
  calculateDuration,
} from "../../utils/reservationUtil";
import {
  CreditCard,
  X,
  Phone,
  Mail,
  Bed,
  Building2,
  MapPin,
  Users,
  Calendar,
  User,
} from "lucide-react";

const ReservationDetailsModal = ({ reservation, onClose }) => {
  if (!reservation) return null;
  const statusInfo = getStatusInfo(reservation.status);
  const StatusIcon = statusInfo.icon;
  const nights = calculateDuration(reservation.checkIn, reservation.checkOut);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="h-2 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-t-2xl" />

        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-800">
                Detalles de Reservación
              </h2>
              <p className="text-amber-600 mt-1">
                Referencia: {reservation.reference}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Hotel & Room Info */}
            <div className="space-y-6">
              <div className="bg-amber-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-amber-600" />
                  Información del Hotel
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-800">
                      {reservation.hotel.name}
                    </p>
                    <div className="flex items-start gap-2 mt-1">
                      <MapPin className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-600">
                        {reservation.hotel.address}
                      </p>
                    </div>
                  </div>
                  {reservation.hotel.description && (
                    <p className="text-gray-600 text-sm">
                      {reservation.hotel.description}
                    </p>
                  )}
                  {reservation.hotel.urlImg && (
                    <img
                      src={reservation.hotel.urlImg}
                      alt={reservation.hotel.name}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  )}
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Bed className="w-5 h-5 text-blue-600" />
                  Detalles de la Habitación
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-800">
                      {reservation.room.name}
                    </p>
                    <p className="text-blue-600 font-medium">
                      {reservation.room.type}
                    </p>
                  </div>
                  {reservation.room.description && (
                    <p className="text-gray-600 text-sm">
                      {reservation.room.description}
                    </p>
                  )}
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>Capacidad: {reservation.room.capacity}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CreditCard className="w-4 h-4" />
                      <span>
                        ${reservation.room.price.toLocaleString()}/noche
                      </span>
                    </div>
                  </div>
                  {reservation.room.urlImg && (
                    <img
                      src={reservation.room.urlImg}
                      alt={reservation.room.name}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Reservation Details */}
            <div className="space-y-6">
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-green-600" />
                  Detalles de la Estadía
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <p className="text-xs text-green-600 uppercase font-medium mb-1">
                        Check-in
                      </p>
                      <p className="font-semibold text-gray-800">
                        {formatDate(reservation.checkIn)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-green-600 uppercase font-medium mb-1">
                        Check-out
                      </p>
                      <p className="font-semibold text-gray-800">
                        {formatDate(reservation.checkOut)}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-green-600 uppercase font-medium mb-1">
                        Duración
                      </p>
                      <p className="font-semibold text-gray-800">
                        {nights} {nights === 1 ? "noche" : "noches"}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-green-600 uppercase font-medium mb-1">
                        Huéspedes
                      </p>
                      <p className="font-semibold text-gray-800">
                        {reservation.numPersons}{" "}
                        {reservation.numPersons === 1 ? "persona" : "personas"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-purple-600" />
                  Información de Pago
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">
                      Subtotal ({nights} noches)
                    </span>
                    <span className="font-medium">
                      ${(reservation.room.price * nights).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Depósito pagado</span>
                    <span className="font-medium text-green-600">
                      ${reservation.deposit.toLocaleString()}
                    </span>
                  </div>
                  <div className="border-t pt-3 flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-800">
                      Total
                    </span>
                    <span className="text-2xl font-bold text-purple-600">
                      ${reservation.total.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <StatusIcon className="w-5 h-5 text-gray-600" />
                  Estado e Información del Huésped
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Estado</span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium border ${statusInfo.color}`}
                    >
                      {statusInfo.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">
                      {reservation.user.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">
                      {reservation.user.email}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">
                      {reservation.user.phone}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">
                      {reservation.user.city}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationDetailsModal;
