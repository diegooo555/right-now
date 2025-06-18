import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { getRoomsAvailable } from '../api/hotel.js';
import { Loader2, Calendar, Users } from 'lucide-react';
import Room from '../components/hotel/Room';

const Availability = () => {
  const [searchParams] = useSearchParams();
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  const checkIn = searchParams.get('checkin');
  const checkOut = searchParams.get('checkout');
  const guests = searchParams.get('capacity');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const data = await getRoomsAvailable(checkIn, checkOut, guests);
        setRooms(data);
      } catch (err) {
        console.error('Error loading rooms:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, [checkIn, checkOut, guests]);

  const handleReserve = (room) => {
    console.log('Reserving room:', room);
    navigate(`/payment`, {
      state: {
        checkIn,
        checkOut,
        guests,
        room
      }
    });

  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-amber-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-800 mb-4">
            Habitaciones Disponibles
          </h1>
          <div className="flex items-center justify-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-amber-500" />
              <span>{checkIn} - {checkOut}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-amber-500" />
              <span>{guests} huéspedes</span>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="flex flex-col items-center gap-4">
              <Loader2 className="animate-spin h-12 w-12 text-amber-500" />
              <p className="text-gray-600">Buscando las mejores habitaciones...</p>
            </div>
          </div>
        ) : rooms.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">No hay habitaciones disponibles para las fechas seleccionadas.</p>
            <p className="text-gray-500 mt-2">Por favor, intenta con diferentes fechas o número de huéspedes.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <Room 
                key={room.id} 
                room={room} 
                onReserve={handleReserve}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Availability;