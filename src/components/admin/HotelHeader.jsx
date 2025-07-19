import { 
  MapPin, 
  PlusCircle, 
  Star, 
  Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';

function HotelHeader({hotel}) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { 
      day: 'numeric', 
      month: 'long',
      year: 'numeric'
    };
    
    const formattedDate = date.toLocaleDateString('es-ES', options);
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  };

  return (
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
          </div>

          {/* Hotel Info and Actions */}
          <div className="space-y-4">
            {/* Hotel Creation Date */}
            <div className="bg-amber-50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-amber-500" />
                <span className="text-sm font-medium text-amber-600">Hotel creado</span>
              </div>
              <p className="text-gray-700">{formatDate(hotel.createdAt)}</p>
            </div>

            {/* Add Room Button */}
            <Link 
              to="/hotel/room/create" 
              state={{ hotel }}
              className="flex items-center gap-3 w-full bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-white py-3 px-6 rounded-lg transition-all duration-300 font-medium shadow-md hover:shadow-lg group"
            >
              <PlusCircle className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              <span>Añadir Nueva Habitación</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelHeader;