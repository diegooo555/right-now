import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getRoomsByHotelId } from '../../api/hotel.js';
import { useLocation } from "react-router-dom";
import { Building2, ArrowLeft } from 'lucide-react';
import { toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query';
import HotelHeader from '../../components/admin/HotelHeader.jsx';
import NoneHotel from '../../components/admin/NoneHotel.jsx';
import Room from '../../components/admin/Room.jsx';

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

  const handleReserveRoom = (room) => {
    setSelectedRoom(room);
    toast.success(`Iniciando reserva para ${room.name}`);
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
          <button onClick={handleBackToHotels}
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
        <HotelHeader hotel={hotel}/>

        <div className="mb-8">
          <h2 className="text-3xl font-serif font-bold text-gray-800 mb-4">
            Habitaciones Disponibles
          </h2>
          <p className="text-amber-600 text-lg">
            {roomsData.length} {roomsData.length === 1 ? 'habitación disponible' : 'habitaciones disponibles'}
          </p>
        </div>

        {roomsData.length === 0 ? (
          <NoneHotel/>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roomsData.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative">
                  <img  src={room.urlImg}  alt={room.name} className="w-full h-64 object-cover"/>
                </div>
  
                <Room room={room} handleReserveRoom={handleReserveRoom}/>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Hotel;