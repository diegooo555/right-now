import { useNavigate } from "react-router";

function NoneHotel() {
  const navigate = useNavigate();

  const handleBackToHotels = () => {
    navigate("/hotel");
  };

  return (
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
  );
}

export default NoneHotel;
