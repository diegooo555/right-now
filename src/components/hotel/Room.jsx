import React from 'react';
import { Users, BedDouble, Star, ArrowRight } from 'lucide-react';

const Room = ({ room, onReserve }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img 
          src={room.urlImg || 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg'} 
          alt={room.name} 
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-amber-400 fill-current" />
            <span className="text-sm font-semibold">4.8</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-serif font-semibold text-gray-800 mb-1">{room.name}</h3>
            <p className="text-amber-600 font-medium">{room.roomType}</p>
          </div>
          <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg">
            <Users className="w-4 h-4 text-amber-600" />
            <span className="text-sm text-amber-600 font-medium">{room.capacity}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-6 text-gray-600">
          <BedDouble className="w-5 h-5" />
          <span className="text-sm">Cama King Size • Vista al jardín • Baño privado</span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <p className="text-2xl font-semibold text-gray-800">
              ${room.price}
              <span className="text-sm text-gray-500 font-normal"> /noche</span>
            </p>
          </div>
          <button 
            onClick={() => onReserve(room)}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-400 to-yellow-500 text-white rounded-lg hover:from-amber-500 hover:to-yellow-600 transition-all duration-300 font-medium shadow-md hover:shadow-lg group"
          >
            Reservar
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Room;