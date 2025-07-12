import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CarouselRoom = ({room}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + allImages.length) % allImages.length
    );
  };

    const allImages = room?.images ? [
   {url: room?.urlImg},
    ...room.images.filter(img => img.url !== room.urlImg)
  ] : [{ url: room?.urlImg }];

  return (
    <div className="relative">
      {/* Imagen principal */}
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={allImages[currentImageIndex]?.url}
          alt={`${room?.name} - Imagen ${currentImageIndex + 1}`}
          className="w-full h-64 object-cover transition-all duration-300"
        />

        {/* Controles de navegación si hay más de una imagen */}
        {allImages.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-amber-600 bg-opacity-80 hover:bg-opacity-100 text-white p-2 rounded-full transition-all duration-200 shadow-lg"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-amber-600 bg-opacity-80 hover:bg-opacity-100 text-white p-2 rounded-full transition-all duration-200 shadow-lg"
            >
              <ChevronRight className="w-4 h-4" />
            </button>


            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
              {allImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentImageIndex
                      ? "bg-amber-600 w-6"
                      : "bg-white bg-opacity-60 hover:bg-opacity-80"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {allImages.length > 1 && (
        <div className="flex gap-2 overflow-x-auto scrollbar-hide p-2">
          {allImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`flex-shrink-0 relative overflow-hidden rounded-lg transition-all duration-200 ${
                index === currentImageIndex
                  ? "ring-2 ring-amber-500 ring-offset-2"
                  : "hover:opacity-75"
              }`}
            >
              <img
                src={image.url}
                alt={`${room?.name} - Vista ${index + 1}`}
                className="w-20 h-16 object-cover"
              />
              {index === currentImageIndex && (
                <div className="absolute"></div>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Contador de imágenes */}
      {allImages.length > 1 && (
        <div className="mt-2 text-center">
          <span className="text-sm text-amber-700 bg-amber-100 px-3 py-1 rounded-full font-medium">
            {currentImageIndex + 1} de {allImages.length} fotos
          </span>
        </div>
      )}
    </div>
  );
};


export default CarouselRoom;