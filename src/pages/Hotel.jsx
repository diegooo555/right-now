import React, { useState, useEffect } from 'react';
import { getHotels, createHotel, createRoom } from '../api/hotel.js';
import { Building2, MapPin, Calendar, PlusCircle, Text } from 'lucide-react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import RoomForm from '../components/hotel/RoomForm';
import HotelForm from '../components/hotel/HotelForm';


function Hotel() {
  const [hotels, setHotels] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showRoomForm, setShowRoomForm] = useState(false);
  const [showHotelForm, setShowHotelForm] = useState(false);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const data = await getHotels();
        setHotels(data);
      } catch (error) {
        console.error('Error fetching hotels:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  const handleHotelSelect =  (hotel) => {
    setSelectedHotel(hotel);
  };

  const handleCreateRoom = async (roomData) => {
    try {
      const response = await createRoom(roomData);
  
      if (response.status === 201) {
        setShowRoomForm(false);
        toast.success("¡Habitación creada correctamente!");
      } else {
        toast.error("No se pudo crear la habitación.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error del servidor al crear la habitación.");
    }
  };
  
  
  const handleCreateHotel = async (hotelData) => {
    await createHotel(hotelData);
    setShowHotelForm(false);
    // Here you would typically make an API call to create the hotel
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-amber-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-400"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-amber-50 p-6">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="colored"
      />
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-serif font-bold text-gray-800">Hoteles Disponibles</h1>
            <p className="text-amber-600 mt-2">Seleccione un hotel para manejar las habitaciones</p>
          </div>
          <button
            onClick={() => setShowHotelForm(true)}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-400 to-yellow-500 text-white rounded-lg hover:from-amber-500 hover:to-yellow-600 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <PlusCircle className="w-5 h-5" />
            <span>Add New Hotel</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-gold cursor-pointer ${
                selectedHotel?.id === hotel.id ? 'ring-2 ring-amber-400' : ''
              }`}
              onClick={() => handleHotelSelect(hotel)}
            >
              <div className="h-2 bg-gradient-to-r from-amber-400 to-yellow-500" />
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-amber-500" />
                      <h3 className="text-xl font-semibold text-gray-800">{hotel.name}</h3>
                    </div>
                    <div className="mt-3 flex items-start gap-2 text-gray-600">
                      <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                      <p>{hotel.address}</p>
                    </div>
                    <div className="mt-3 flex items-start gap-2 text-gray-600">
                      <img src={hotel.urlImg} alt="image-hotel" className='w-full rounded-2xl' width="100%" height="100%"/>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <p>Added {new Date(hotel.createdAt).toLocaleDateString()}</p>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                      <Text className="w-4 h-4" />
                      <p>{hotel.description}</p>
                    </div>
                  </div>
                </div>

                {selectedHotel?.id === hotel.id && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <button
                      className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowRoomForm(true);
                      }}
                    >
                      <PlusCircle className="w-5 h-5" />
                      <span>Add New Room</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {hotels.length === 0 && (
          <div className="text-center py-12">
            <Building2 className="w-16 h-16 mx-auto text-gray-400" />
            <p className="mt-4 text-gray-600">No hotels available at the moment</p>
          </div>
        )}
      </div>

      {showRoomForm && selectedHotel && (
        <RoomForm
          hotel={selectedHotel}
          onClose={() => setShowRoomForm(false)}
          onSubmit={handleCreateRoom}
        />
      )}

      {showHotelForm && (
        <HotelForm
          onClose={() => setShowHotelForm(false)}
          onSubmit={handleCreateHotel}
        />
      )}
    </div>
  );
}

export default Hotel;