import { Waves, Sparkles, Heart, Info } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Spa",
      description: "Tratamientos relajantes y terapéuticos para renovar tu cuerpo y mente en un ambiente de tranquilidad total.",
      icon: Sparkles,
      features: ["Tratamientos faciales", "Aromaterapia", "Relajación profunda", "Ambiente zen"],
      color: "from-purple-100 to-pink-100",
      iconColor: "text-purple-600"
    },
    {
      id: 2,
      title: "Piscina",
      description: "Disfruta de momentos refrescantes en nuestras piscinas con agua cristalina y vistas espectaculares.",
      icon: Waves,
      features: ["Agua temperada", "Área infantil", "Zona de descanso", "Vista panorámica"],
      color: "from-blue-100 to-cyan-100",
      iconColor: "text-blue-600"
    },
    {
      id: 3,
      title: "Masajes",
      description: "Experimenta la relajación total con nuestros masajes terapéuticos realizados por profesionales expertos.",
      icon: Heart,
      features: ["Masaje relajante", "Masaje deportivo", "Masaje en pareja", "Aceites naturales"],
      color: "from-green-100 to-emerald-100",
      iconColor: "text-green-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-400 mb-4">
            Servicios de Bienestar
          </h2>
          <p className="text-amber-600 text-lg max-w-2xl mx-auto mb-6">
            Relájate y renuévate con nuestros servicios especializados
          </p>
          
          {/* ITP Partnership Notice */}
          <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-xl p-4 border border-amber-200 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Info className="w-5 h-5 text-amber-600" />
              <span className="font-semibold text-amber-800">Convenio Especial</span>
            </div>
            <p className="text-amber-700 text-sm">
              Estos servicios están disponibles a través de nuestro convenio con el 
              <span className="font-semibold"> Instituto de Turismo y Patrimonio (ITP)</span>, 
              garantizando calidad y profesionalismo en cada experiencia.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-100 hover:border-amber-200"
              >
                <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-6 mx-auto`}>
                  <IconComponent className={`w-8 h-8 ${service.iconColor}`} />
                </div>
                
                <h3 className="text-xl font-serif font-bold text-gray-800 text-center mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-center mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-center gap-1 text-xs text-amber-600">
                    <Info className="w-3 h-3" />
                    <span>Convenio ITP</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-white rounded-2xl p-6 shadow-lg border border-amber-100">
          <div className="text-center">
            <h3 className="text-lg font-serif font-bold text-amber-400 mb-3">
              Información Importante
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span>Reservas con 24 horas de anticipación</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span>Servicios sujetos a disponibilidad</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span>Profesionales certificados</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span>Tarifas preferenciales para huéspedes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;