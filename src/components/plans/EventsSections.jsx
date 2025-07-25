import { Users, Heart, Cake, MapPin } from "lucide-react";

const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: "Eventos Corporativos",
      description: "Espacios ideales para reuniones de trabajo, conferencias y eventos empresariales en un ambiente natural y relajante.",
      icon: Users,
      features: ["Catering personalizado", "Espacios al aire libre"]
    },
    {
      id: 2,
      title: "Eventos Familiares",
      description: "Celebra momentos especiales con tu familia en nuestros hermosos espacios rodeados de naturaleza.",
      icon: Heart,
      features: ["Espacios amplios", "Menú familiar", "Juegos al aire libre"]
    },
    {
      id: 3,
      title: "Piñatas",
      description: "Fiestas infantiles llenas de diversión y alegría en un ambiente seguro y natural para los más pequeños.",
      icon: Cake,
      features: ["Decoración temática", "Animación infantil", "Actividades recreativas"]
    }
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-400 mb-4">
            Eventos Especiales
          </h2>
          <div className="flex items-center justify-center gap-2 text-amber-700">
            <Users className="w-5 h-5" />
            <span className="text-lg font-medium">Eventos a partir de 10 personas</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event) => {
            const IconComponent = event.icon;
            return (
              <div
                key={event.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-100 hover:border-amber-200"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl mb-6 mx-auto">
                  <IconComponent className="w-8 h-8 text-amber-600" />
                </div>
                
                <h3 className="text-xl font-serif font-bold text-gray-800 text-center mb-4">
                  {event.title}
                </h3>
                
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  {event.description}
                </p>
                
                <ul className="space-y-2">
                  {event.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Hiking Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-amber-100">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
              <MapPin className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-amber-400">
              Caminatas Ecológicas
            </h3>
          </div>
          
          <p className="text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
            Descubre la belleza natural de Boyacá a través de nuestras caminatas guiadas. 
            Conecta con la naturaleza mientras exploras senderos únicos y paisajes 
            espectaculares en compañía de guías expertos locales.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4">
              <div className="text-amber-500 font-semibold">Dificultad</div>
              <div className="text-gray-600 text-sm">Todos los niveles</div>
            </div>
            <div className="text-center p-4">
              <div className="text-amber-500 font-semibold">Duración</div>
              <div className="text-gray-600 text-sm">1 hora</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;