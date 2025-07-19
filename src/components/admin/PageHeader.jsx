import React from 'react';
import { Building2, MapPin, Plus } from 'lucide-react';

const PageHeader = ({ hotel }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
      <div className="h-2 bg-gradient-to-r from-amber-400 to-yellow-500" />
      
      <div className="p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
            <Plus className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-serif font-bold text-gray-800">
              Crear Nueva Habitación
            </h1>
            <p className="text-amber-600 text-lg mt-1">
              Añadir habitación a {hotel.name}
            </p>
          </div>
        </div>

        <div className="bg-amber-50 rounded-xl p-6">
          <div className="flex items-start gap-4">
            {hotel.urlImg && (
              <img 
                src={hotel.urlImg} 
                alt={hotel.name}
                className="w-20 h-20 object-cover rounded-xl flex-shrink-0"
              />
            )}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-5 h-5 text-amber-600" />
                <h3 className="text-xl font-semibold text-gray-800">{hotel.name}</h3>
              </div>
              <div className="flex items-start gap-2 text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-amber-500" />
                <p>{hotel.address}</p>
              </div>
              {hotel.description && (
                <p className="text-gray-600 text-sm">{hotel.description}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;