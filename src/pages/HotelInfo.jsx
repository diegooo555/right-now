import React from "react";
import {
  Waves,
  MapPin,
  Heart,
  Building2,
  ChefHat,
  Car,
  Star,
  Calendar,
  ArrowRight,
  Wifi,
  Coffee,
  Tv,
  Phone,
  Clock,
  ShowerHead,
} from "lucide-react";
import Navbar from "../components/home/Navbar";

const HotelInfo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-amber-50 ">
      <Navbar/>
      <section className="pt-24 pb-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {/* Main large image */}
                <div className="col-span-2">
                  <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="/exterior.webp"
                      alt="Villa Libertad - Vista principal"
                      className="object-cover w-full h-full rounded-2xl hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full">
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 text-amber-400 fill-current" />
                        <span className="font-semibold">4.8</span>
                        <span className="text-gray-500 text-sm">
                          (124 reseñas)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Secondary images */}
                <div className="relative h-32 sm:h-40 rounded-2xl overflow-hidden shadow-md">
                  <img
                    src="/pantano.webp"
                    alt="Villa Libertad - Spa y Wellness"
                    className="object-cover w-full h-full rounded-2xl hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="relative h-32 sm:h-40 rounded-2xl overflow-hidden shadow-md">
                  <img
                    src="/sala_2.webp"
                    alt="Villa Libertad - Piscina"
                    className="object-cover w-full h-full rounded-2xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Pet Friendly Badge */}
              <div className="flex justify-start">
                <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-full px-4 py-2 flex items-center space-x-2 shadow-sm">
                  <Heart className="w-4 h-4 text-amber-600" />
                  <span className="text-amber-800 font-medium text-sm">
                    Pet Friendly
                  </span>
                </div>
              </div>
            </div>

            {/* Hotel Information */}
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold block text-amber-400 leading-tight">
                  Hotel Villa Libertad -
                  Pantano de Vargas - Paipa
                </h1>
              </div>

              <div>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
                  En Hotel Villa Libertad le damos a nuestros huéspedes la
                  oportunidad de descanso, bienestar y conexión con la
                  naturaleza, mediante un alojamiento cálido, rodeado de
                  historia, eventos al aire libre y experiencias gastronómicas
                  realizadas por el huésped. Nos apoyamos en alianzas
                  estratégicas con servicios de spa y recorridos por los
                  pueblitos más emblemáticos de Boyacá. Ideal para compartir 
                  con familia, amigos y pareja. 
                  Somos PET Friendly (Condiciones y restricciones).
                </p>
              </div>

              {/* Quick Info Cards */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-amber-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="w-4 h-4 text-amber-500" />
                    <span className="text-sm font-medium text-gray-800">
                      Contacto
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">+57 3132827158</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-amber-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-amber-500" />
                    <span className="text-sm font-medium text-gray-800">
                      Check-in
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">4:00 PM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel Features Section */}
      <section className="py-5 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-400 mb-4">
              Servicios Incluidos
            </h2>
            <p className="text-amber-500 text-lg max-w-2xl mx-auto">
              Descubre todo lo que Villa Libertad tiene para ofrecerte
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Wifi,
                title: "Wifi",
                desc: "Internet 4G de alta velocidad.",
                bg: "bg-blue-50",
                iconColor: "text-blue-600",
              },
              {
                icon: MapPin,
                title: "Ubicación Privilegiada",
                desc: "A 300 metros del monumento, cerca de museos y el casco histórico.",
                bg: "bg-green-50",
                iconColor: "text-green-600",
              },
              {
                icon: Heart,
                title: "Pet Friendly",
                desc: "Trae a tu mascota y disfruten juntos de una experiencia inolvidable.",
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
                desc: "Mira tus canales nacionales favoritos totalmente gratis.",
                bg: "bg-red-50",
                iconColor: "text-red-600",
              },
              {
                icon: Car,
                title: "Fácil Acceso",
                desc: "Estacionamiento gratuito y fácil acceso a las principales vías de la ciudad.",
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
        </div>
      </section>
    </div>
  );
};

export default HotelInfo;
