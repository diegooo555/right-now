import React from 'react';
import { 
  Users, 
  BedDouble, 
  Star, 
  MapPin, 
  Building2,
  Eye,
  Calendar,
  Wifi,
  Car,
  Coffee,
  Tv
} from 'lucide-react';

const RoomPreview = ({ formData, hotel, isVisible }) => {
  const formatPrice = (price) => {
    if (!price) return '$0';
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  if (!isVisible) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <Eye className="w-12 h-12 mx-auto text-gray-400 mb-4" />
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Vista Previa</h3>
        <p className="text-gray-600">
          Activa la vista previa para ver cómo se verá tu habitación
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Preview Card */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-amber-400 to-yellow-500" />
        
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Eye className="w-5 h-5 text-amber-500" />
            <h3 className="text-lg font-semibold text-gray-800">Vista Previa</h3>
          </div>

          {/* Room Card Preview */}
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            {/* Room Image */}
            <div className="relative">
              {formData.urlImg ? (
                <img 
                  src={formData.urlImg} 
                  alt={formData.name || 'Habitación'} 
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg';
                  }}
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Sin imagen</span>
                </div>
              )}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-amber-400 fill-current" />
                  <span className="text-sm font-semibold">4.9</span>
                </div>
              </div>
            </div>
            
            {/* Room Content */}
            <div className="p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="text-lg font-serif font-semibold text-gray-800">
                    {formData.name || 'Nombre de la habitación'}
                  </h4>
                  <p className="text-amber-600 font-medium">
                    {formData.type || 'Tipo de habitación'}
                  </p>
                </div>
                {formData.capacity && (
                  <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg">
                    <Users className="w-4 h-4 text-amber-600" />
                    <span className="text-sm text-amber-600 font-medium">
                      {formData.capacity}
                    </span>
                  </div>
                )}
              </div>

              {formData.description && (
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {formData.description}
                </p>
              )}

              <div className="flex items-center gap-2 mb-4 text-gray-600">
                <BedDouble className="w-4 h-4" />
                <span className="text-sm">Cama cómoda • Baño privado • Vista panorámica</span>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div>
                  <p className="text-xl font-semibold text-gray-800">
                    {formatPrice(formData.price)}
                    <span className="text-sm text-gray-500 font-normal"> /noche</span>
                  </p>
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-amber-400 to-yellow-500 text-white rounded-lg text-sm font-medium">
                  Reservar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hotel Context */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">Contexto del Hotel</h4>
        
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            {hotel.urlImg && (
              <img 
                src={hotel.urlImg} 
                alt={hotel.name}
                className="w-12 h-12 object-cover rounded-lg flex-shrink-0"
              />
            )}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Building2 className="w-4 h-4 text-amber-500" />
                <h5 className="font-semibold text-gray-800">{hotel.name}</h5>
              </div>
              <div className="flex items-start gap-2 text-gray-600">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-500" />
                <p className="text-sm">{hotel.address}</p>
              </div>
            </div>
          </div>

          {/* Hotel Amenities */}
          <div className="grid grid-cols-2 gap-2 pt-3 border-t border-gray-100">
            <div className="flex items-center gap-2 text-gray-600">
              <Wifi className="w-4 h-4 text-amber-500" />
              <span className="text-xs">WiFi Gratuito</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Car className="w-4 h-4 text-amber-500" />
              <span className="text-xs">Estacionamiento</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Coffee className="w-4 h-4 text-amber-500" />
              <span className="text-xs">Desayuno</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Tv className="w-4 h-4 text-amber-500" />
              <span className="text-xs">TV Cable</span>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Images Preview */}
      {formData.images.some(img => img.trim()) && (
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Galería de Imágenes</h4>
          <div className="grid grid-cols-2 gap-3">
            {formData.images
              .filter(img => img.trim())
              .slice(0, 4)
              .map((image, index) => (
                <div key={index} className="relative">
                  <img 
                    src={image} 
                    alt={`Imagen ${index + 1}`}
                    className="w-full h-20 object-cover rounded-lg"
                    onError={(e) => {
                      e.target.src = 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg';
                    }}
                  />
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomPreview;