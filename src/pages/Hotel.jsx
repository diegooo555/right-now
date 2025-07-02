import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getRoomsByHotelId } from '../api/hotel.js';
import { useLocation } from "react-router-dom";
import { 
  Building2, 
  MapPin, 
  Star, 
  ArrowRight, 
  Users, 
  BedDouble, 
  Wifi,
  Car,
  Coffee,
  Tv,
  ArrowLeft,
  Phone,
  Mail,
  Clock
} from 'lucide-react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useQuery } from '@tanstack/react-query';

function Hotel() {
  const { id } = useParams();

  const [selectedRoom, setSelectedRoom] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const hotel = location.state?.hotel || null;

  const {
    data: roomsData = [],
    isLoading
  } = useQuery({
    queryKey: ['rooms', id],
    queryFn: () => getRoomsByHotelId(id),
    staleTime: 1000 * 60 * 5,
    enabled: Boolean(id),
    onError: (err) => {
      console.error('Error fetching hotels:', err);
      toast.error('Error al cargar los habitaciones del hotel');
    },
  })

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleReserveRoom = (room) => {
    setSelectedRoom(room);
    // Navigate to reservation page or open booking modal
    toast.success(`Iniciando reserva para ${room.name}`);
    // navigate(`/booking/${room.id}`);
  };

  const handleBackToHotels = () => {
    navigate('/hotel');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-amber-50">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-400"></div>
          <p className="text-amber-600 font-medium">Cargando habitaciones...</p>
        </div>
      </div>
    );
  }

  if (!hotel) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-amber-50">
        <div className="text-center">
          <Building2 className="w-16 h-16 mx-auto text-gray-400 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Hotel no encontrado</h2>
          <p className="text-gray-600 mb-6">El hotel que buscas no existe o ha sido eliminado</p>
          <button 
            onClick={handleBackToHotels}
            className="bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-white py-3 px-6 rounded-lg transition-all duration-300 font-medium"
          >
            Volver a Hoteles
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-amber-50">
      {/* Header with Back Button */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={handleBackToHotels}
            className="flex items-center gap-2 text-amber-600 hover:text-amber-700 transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver a Hoteles
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Hotel Header Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
          <div className="h-2 bg-gradient-to-r from-amber-400 to-yellow-500" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Hotel Image */}
            <div className="relative">
              <img 
                src={hotel.urlImg || 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg'} 
                alt={hotel.name} 
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-amber-400 fill-current" />
                  <span className="font-semibold">4.8</span>
                  <span className="text-gray-500 text-sm">(124 reseñas)</span>
                </div>
              </div>
            </div>

            {/* Hotel Information */}
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-4xl font-serif font-bold text-gray-800 mb-4">
                  {hotel.name}
                </h1>
                
                <div className="flex items-start gap-2 text-gray-600 mb-6">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-amber-500" />
                  <p className="text-lg">{hotel.address}</p>
                </div>

                {hotel.description && (
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {hotel.description}
                  </p>
                )}

                {/* Hotel Amenities */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Wifi className="w-5 h-5 text-amber-500" />
                    <span>WiFi Gratuito</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Car className="w-5 h-5 text-amber-500" />
                    <span>Estacionamiento</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Coffee className="w-5 h-5 text-amber-500" />
                    <span>Desayuno</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Tv className="w-5 h-5 text-amber-500" />
                    <span>TV Cable</span>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-amber-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-800 mb-3">Información de Contacto</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone className="w-4 h-4 text-amber-500" />
                    <span>+57 (8) 785-1234</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail className="w-4 h-4 text-amber-500" />
                    <span>info@{hotel.name.toLowerCase().replace(/\s+/g, '')}.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4 text-amber-500" />
                    <span>Check-in: 3:00 PM | Check-out: 12:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rooms Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-serif font-bold text-gray-800 mb-4">
            Habitaciones Disponibles
          </h2>
          <p className="text-amber-600 text-lg">
            {roomsData.length} {roomsData.length === 1 ? 'habitación disponible' : 'habitaciones disponibles'}
          </p>
        </div>

        {/* Rooms Grid */}
        {roomsData.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <BedDouble className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              No hay habitaciones disponibles
            </h3>
            <p className="text-gray-600 mb-6">
              Este hotel no tiene habitaciones configuradas en este momento
            </p>
            <button 
              onClick={handleBackToHotels}
              className="bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-white py-3 px-6 rounded-lg transition-all duration-300 font-medium"
            >
              Explorar Otros Hoteles
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roomsData.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Room Image */}
                <div className="relative">
                  <img 
                    src={room.urlImg || 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg'} 
                    alt={room.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-amber-400 fill-current" />
                      <span className="text-sm font-semibold">4.9</span>
                    </div>
                  </div>
                </div>
                
                {/* Room Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-serif font-semibold text-gray-800 mb-1">
                        {room.name}
                      </h3>
                      <p className="text-amber-600 font-medium">{room.type}</p>
                    </div>
                    <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg">
                      <Users className="w-4 h-4 text-amber-600" />
                      <span className="text-sm text-amber-600 font-medium">{room.capacity}</span>
                    </div>
                  </div>

                  {room.description && (
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {room.description}
                    </p>
                  )}

                  <div className="flex items-center gap-2 mb-6 text-gray-600">
                    <BedDouble className="w-5 h-5" />
                    <span className="text-sm">Cama cómoda • Baño privado • Vista panorámica</span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-2xl font-semibold text-gray-800">
                        {formatPrice(room.price)}
                        <span className="text-sm text-gray-500 font-normal"> /noche</span>
                      </p>
                    </div>
                    <button 
                      onClick={() => handleReserveRoom(room)}
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-400 to-yellow-500 text-white rounded-lg hover:from-amber-500 hover:to-yellow-600 transition-all duration-300 font-medium shadow-md hover:shadow-lg group"
                    >
                      Editar
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Hotel;