import Services from '../../components/hotel/Services';
import Navbar from '../../components/home/Navbar';

import {
  Heart,
  Star,
  Phone,
  Clock,
  Mail,
  Dog,
  DollarSign,
} from "lucide-react";

const HotelInfo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-amber-50 ">
      <Navbar/>
      <section className="pt-24 pb-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Expanded Image Gallery */}
            <div className="space-y-4">
              {/* Main large image */}
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://res.cloudinary.com/dv465a7h0/image/upload/exterior_uotkrn"
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

              {/* Grid of secondary images */}
              <div className="grid grid-cols-3 gap-3">
                <div className="relative h-24 sm:h-32 rounded-xl overflow-hidden shadow-md">
                  <img
                    src="https://res.cloudinary.com/dv465a7h0/image/upload/pantano_vpit6t"
                    alt="Villa Libertad - Habitación"
                    className="object-cover w-full h-full rounded-xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="relative h-24 sm:h-32 rounded-xl overflow-hidden shadow-md">
                  <img
                    src="https://res.cloudinary.com/dv465a7h0/image/upload/sala_2_x110gh"
                    alt="Villa Libertad - Piscina"
                    className="object-cover w-full h-full rounded-xl hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="relative h-24 sm:h-32 rounded-xl overflow-hidden shadow-md">
                  <img
                    src="https://res.cloudinary.com/dv465a7h0/image/upload/v1752890760/DSC01745_lgitgp.jpg"
                    alt="Villa Libertad - Spa"
                    className="object-cover w-full h-full rounded-xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="relative h-24 sm:h-32 rounded-xl overflow-hidden shadow-md">
                  <img
                    src="https://res.cloudinary.com/dv465a7h0/image/upload/v1752890993/DSC01748_pajnf4.jpg"
                    alt="Villa Libertad - Habitación"
                    className="object-cover w-full h-full rounded-xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="relative h-24 sm:h-32 rounded-xl overflow-hidden shadow-md">
                  <img
                    src="https://res.cloudinary.com/dv465a7h0/image/upload/v1752890935/DSC01780_o45juh.jpg"
                    alt="Villa Libertad - Piscina"
                    className="object-cover w-full h-full rounded-xl hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="relative h-24 sm:h-32 rounded-xl overflow-hidden shadow-md">
                  <img
                    src="https://res.cloudinary.com/dv465a7h0/image/upload/v1752806054/DSC01700_etevxs.jpg"
                    alt="Villa Libertad - Spa"
                    className="object-cover w-full h-full rounded-xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>              

              {/* Additional larger images */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative h-28 sm:h-36 rounded-xl overflow-hidden shadow-md">
                  <img
                    src="https://res.cloudinary.com/dv465a7h0/image/upload/apartment_2_1_d1ajyr"
                    alt="Villa Libertad - Vista panorámica"
                    className="object-cover w-full h-full rounded-xl hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="relative h-28 sm:h-36 rounded-xl overflow-hidden shadow-md">
                  <img
                    src="https://res.cloudinary.com/dv465a7h0/image/upload/DSC01716_t1rog2"
                    alt="Villa Libertad - Área común"
                    className="object-cover w-full h-full rounded-xl hover:scale-105 transition-transform duration-300"
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
            <div className="space-y-8">
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
                  en familia, amigos y pareja. 
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
                    <Mail className="w-4 h-4 text-amber-500" />
                    <span className="text-sm font-medium text-gray-800">
                      Gmail
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">villalibertad76@gmail.com</p>
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
                

                <div className="bg-white rounded-xl p-4 shadow-sm border border-amber-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-amber-500" />
                    <span className="text-sm font-medium text-gray-800">
                      Check-out
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">9:00 AM - 11:00 AM</p>
                </div> 

                <div className="bg-white rounded-xl p-4 shadow-sm border border-amber-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Dog className="w-4 h-4 text-amber-500" />
                    <span className="text-sm font-medium text-gray-800">
                      Pet Friendly
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">Trae a  tu mejor amigo</p>
                </div>     
                
                <div className="bg-white rounded-xl p-4 shadow-sm border border-amber-100">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-4 h-4 text-amber-500" />
                    <span className="text-sm font-medium text-gray-800">
                      Medios de Pago
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">Pagos Online</p>
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
          
          <Services/>
        </div>
      </section>
    </div>
  );
};

export default HotelInfo;