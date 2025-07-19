import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getRoomsAvailable } from '../../api/hotel.js';
import { Loader2, Calendar, Users, Loader } from 'lucide-react';
import Room from '../../components/hotel/Room.jsx';
import HomeLink from '../../components/ui/HomeLink.jsx';

const Availability = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const checkIn = searchParams.get('checkin');
  const checkOut = searchParams.get('checkout');
  const guests = searchParams.get('capacity');

  const {
    data: rooms = [],
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ['availableRooms', checkIn, checkOut, guests],
    queryFn: () => getRoomsAvailable(checkIn, checkOut, guests),
    enabled: Boolean(checkIn && checkOut && guests),
    staleTime: 1000 * 60 * 5,
  });

  const handleReserve = (room) => {
    navigate('/payment', {
      state: { checkIn, checkOut, guests, room }
    });
  };

  return (
    <div className="min-h-full bg-gradient-to-br from-white to-amber-50 w-full overflow-hidden">
      <div className="container min-w-full px-4 py-5">
        <HomeLink/>

        {/* Header Section */}
        <div className="text-center mb-12 mt-4">
          <h1 className="text-4xl font-serif font-bold text-amber-500 mb-4">
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
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="flex flex-col items-center gap-4">
              <Loader2 className="animate-spin h-12 w-12 text-amber-500" />
              <p className="text-gray-600">Buscando las mejores habitaciones...</p>
            </div>
          </div>
        ) : isError ? (
          <div className="text-center py-16">
            <p className="text-xl text-red-600">Error al cargar las habitaciones.</p>
            <p className="text-gray-500 mt-2">{error?.message || 'Inténtalo de nuevo más tarde.'}</p>
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