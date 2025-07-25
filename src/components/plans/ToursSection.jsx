import { MapPin, Clock, Camera, Star } from "lucide-react";

const ToursSection = () => {
  const destinations = [
    {
      name: "Tibasosa",
      description: "Conocido como la 'Capital Frutera de Boyacá', famoso por sus deliciosas fresas y clima templado.",
      highlights: ["Cultivos de fresa", "Gastronomía local", "Artesanías"],
      image: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Nobsa",
      description: "Pueblo textil por excelencia, donde la tradición de los tejidos se mantiene viva generación tras generación.",
      highlights: ["Tejidos artesanales", "Ruanas tradicionales", "Talleres textiles"],
      image: "https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Monguí",
      description: "Uno de los pueblos más hermosos de Colombia, famoso por sus balones de fútbol y arquitectura colonial.",
      highlights: ["Balones artesanales", "Arquitectura colonial", "Plaza principal"],
      image: "https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-400 mb-4">
            Puebleando por Boyacá
          </h2>
          <p className="text-amber-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Descubre los pueblos más emblemáticos de Boyacá en tours guiados que te 
            conectarán con la historia, cultura y tradiciones de nuestra hermosa región.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-amber-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={destination.image}
                  alt={`${destination.name} - Boyacá`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-amber-500" />
                    <span className="text-sm font-medium text-gray-800">{destination.name}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-gray-800 mb-3">
                  {destination.name}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {destination.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-amber-600 mb-2">Destacados:</h4>
                  {destination.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Star className="w-3 h-3 text-amber-400 fill-current" />
                      <span className="text-xs text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tour Information */}
        <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-8 border border-amber-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 shadow-sm">
                <Clock className="w-6 h-6 text-amber-600" />
              </div>
              <h4 className="font-semibold text-amber-800 mb-1">Duración</h4>
              <p className="text-amber-700 text-sm">Tours de día completo</p>
              <p className="text-amber-600 text-xs">8:00 AM - 6:00 PM</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 shadow-sm">
                <Camera className="w-6 h-6 text-amber-600" />
              </div>
              <h4 className="font-semibold text-amber-800 mb-1">Incluye</h4>
              <p className="text-amber-700 text-sm">Transporte y guía</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 shadow-sm">
                <MapPin className="w-6 h-6 text-amber-600" />
              </div>
              <h4 className="font-semibold text-amber-800 mb-1">Salidas</h4>
              <p className="text-amber-700 text-sm">Desde Villa Libertad</p>
              <p className="text-amber-600 text-xs">Grupos mínimo 4 personas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToursSection;