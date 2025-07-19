import { ArrowRight, Users, BedDouble } from "lucide-react";

const Room = ({ room, handleReserveRoom }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
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
          <span className="text-sm text-amber-600 font-medium">
            {room.capacity}
          </span>
        </div>
      </div>

      {room.description && (
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {room.description}
        </p>
      )}

      <div className="flex items-center gap-2 mb-6 text-gray-600">
        <BedDouble className="w-5 h-5" />
        <span className="text-sm">
          Cama cómoda • Baño privado • Vista panorámica
        </span>
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
  );
};

export default Room;
