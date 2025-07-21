import { 
  Phone, 
  Mail, 
  CreditCard, 
  Smartphone, 
  Building2,
  MapPin
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-amber-50 to-amber-100 border-t border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Hotel Info */}
          <div className="space-y-4">
            <div className="font-serif text-2xl font-bold text-amber-400">
              Villa Libertad
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Hotel Villa Libertad - Pantano de Vargas, Paipa. 
              Tu destino ideal para descanso, bienestar y conexión con la naturaleza.
            </p>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-4 h-4 text-amber-500" />
              <span className="text-sm">Pantano de Vargas, Paipa - Boyacá</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-amber-400">
              Contacto
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4 text-amber-600" />
                </div>
                <div>
                  <p className="text-gray-800 font-medium text-sm">Teléfono</p>
                  <a 
                    href="tel:+573132827158" 
                    className="text-gray-600 text-sm hover:text-amber-600 transition-colors"
                  >
                    +57 313 282 7158
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4 text-amber-600" />
                </div>
                <div>
                  <p className="text-gray-800 font-medium text-sm">Email</p>
                  <a 
                    href="mailto:villalibertad76@gmail.com" 
                    className="text-gray-600 text-sm hover:text-amber-600 transition-colors"
                  >
                    villalibertad76@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-amber-400">
              Medios de Pago
            </h3>
            <div className="space-y-3">
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center">
                  <CreditCard className="w-4 h-4 text-amber-600" />
                </div>
                <span className="text-gray-700 text-sm">Tarjeta de Crédito</span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center">
                    <Smartphone className="w-4 h-4 text-amber-600" />
                  </div>
                  <span className="text-gray-700 text-sm">PSE</span>
                </div>

              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-amber-600" />
                </div>
                <span className="text-gray-700 text-sm">Corresponsal Bancario</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;