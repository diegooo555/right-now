import { useState, useMemo } from 'react';
import { getHotels } from '../../api/hotel.js';
import { Building2, MapPin, Calendar, Star, ArrowRight, Search, Filter } from 'lucide-react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';
import { useQuery } from '@tanstack/react-query';

function Hotels() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const navigate = useNavigate();

  const {
    data: hotels = [],
    isLoading,
  } = useQuery({
    queryKey: ['hotels'],
    queryFn: getHotels,
    staleTime: 1000 * 60 * 5,
    onError: (err) => {
      console.error('Error fetching hotels:', err);
      toast.error('Error al cargar los hoteles');
    },
  });

  const filteredHotels = useMemo(() => {
    if (!hotels) return [];
    return hotels.filter(hotel =>
      hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hotel.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hotel.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [hotels, searchTerm]);

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

  const handleHotelSelect = (hotel) => {
    toast.success(`Explorando ${hotel.name}`);
    navigate(`/hotel/rooms/${hotel.id}`, {
      state: { hotel }
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-amber-50">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-400"></div>
          <p className="text-amber-600 font-medium">Cargando hoteles...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-amber-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-amber-600 mb-4">
            Administra tus Hoteles
          </h1>

          {/* Search and Filter Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative mb-4">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar hoteles por nombre, ubicación o descripción..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-transparent shadow-sm"
              />
            </div>
            
            <div className="flex justify-center">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:shadow-md transition-all duration-300"
              >
                <Filter className="w-4 h-4" />
                <span>Filtros</span>
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600 text-center">
            {filteredHotels.length} {filteredHotels.length === 1 ? 'hotel encontrado' : 'hoteles encontrados'}
          </p>
        </div>

        {/* Hotels Grid */}
        {filteredHotels.length === 0 ? (
          <div className="text-center py-16">
            <Building2 className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {searchTerm ? 'No se encontraron hoteles' : 'No hay hoteles disponibles'}
            </h3>
            <p className="text-gray-600">
              {searchTerm 
                ? 'Intenta con otros términos de búsqueda' 
                : 'Vuelve pronto para ver nuevos destinos'
              }
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHotels.map((hotel) => (
              <div
                key={hotel.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
                onClick={() => handleHotelSelect(hotel)}
              >
                {/* Hotel Image */}
                <div className="relative">
                  <img 
                    src={hotel.urlImg || 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg'} 
                    alt={hotel.name} 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-amber-400 fill-current" />
                      <span className="text-sm font-semibold">4.8</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Hotel Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-serif font-semibold text-gray-800 group-hover:text-amber-600 transition-colors">
                        {hotel.name}
                      </h3>
                      <div className="h-2 w-2 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full"></div>
                    </div>
                    
                    <div className="flex items-start gap-2 text-gray-600 mb-3">
                      <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-amber-500" />
                      <p className="text-sm">{hotel.address}</p>
                    </div>

                    {hotel.description && (
                      <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                        {hotel.description}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>Desde {formatDate(hotel.createdAt)}</span>
                    </div>
                    
                    <button 
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-400 to-yellow-500 text-white rounded-lg hover:from-amber-500 hover:to-yellow-600 transition-all duration-300 font-medium shadow-md hover:shadow-lg group-hover:scale-105"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleHotelSelect(hotel);
                      }}
                    >
                      Explorar
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

export default Hotels;