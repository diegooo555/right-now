import {
  MapPin,
  Building2,
  Car,
  Wifi,
  Tv,
  Dog
} from "lucide-react";

const Services = () => {
  return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Wifi,
                title: "Wifi",
                desc: "",
                bg: "bg-blue-50",
                iconColor: "text-blue-600",
              },
              {
                icon: MapPin,
                title: "Ubicación Privilegiada",
                desc: "A 300 metros del monumento a los 14 Lanceros y el museo histórico.",
                bg: "bg-green-50",
                iconColor: "text-green-600",
              },
              {
                icon: Dog,
                title: "Pet Friendly",
                desc: "Viaja con tu mejor amigo.",
                bg: "bg-amber-50",
                iconColor: "text-amber-600",
              },
              {
                icon: Building2,
                title: "Espacios",
                desc: "Espacios para eventos corporativos y sociales.",
                bg: "bg-purple-50",
                iconColor: "text-purple-600",
              },
              {
                icon: Tv,
                title: "TV Gratis",
                desc: "Mira tus canales favoritos totalmente gratis.",
                bg: "bg-red-50",
                iconColor: "text-red-600",
              },
              {
                icon: Car,
                title: "Parking",
                desc: "Estacionamiento gratuito y fácil acceso.",
                bg: "bg-teal-50",
                iconColor: "text-teal-600",
              },
            ].map((feature, i) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                >
                  <div
                    className={`w-12 h-12 ${feature.bg} rounded-xl flex items-center justify-center mb-4`}
                  >
                    <IconComponent className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
  )
}

export default Services