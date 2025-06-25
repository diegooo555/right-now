import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Mail,  
  CreditCard,
  Shield,
  Home
} from 'lucide-react';



const BookingSuccess = () => {
  const [searchParams] = useSearchParams();
  
  const reference = searchParams.get('reference');
  const price = Number(searchParams.get('price')).toLocaleString('es-CO', { currency: 'COP' });
  // Assuming half is the same as price
  const half = Number(searchParams.get('half')).toLocaleString('es-CO', { currency: 'COP' });

  const enterpriseData = {
    phone: "+57 3132827158",
    email: "villalibertad76@gmail.com"
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-amber-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Success Header */}
          <div className="h-2 bg-gradient-to-r from-green-400 to-emerald-500" />
          
          <div className="p-8">
            {/* Success Icon and Title */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h1 className="text-3xl font-serif font-semibold text-gray-800 mb-2">
                ¡Reserva Confirmada Exitosamente!
              </h1>
              <p className="text-lg text-gray-600">
                Tu pago ha sido procesado correctamente y tu habitación está asegurada
              </p>
            </div>

            {/* Confirmation Details */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-green-800 mb-2">Confirmación de Pago Seguro</h3>
                  <p className="text-green-700 mb-3">
                    Hemos procesado exitosamente tu pago inicial del 50%. Tu reserva está completamente confirmada y protegida.
                  </p>
                  <div className="bg-white rounded-lg p-3 border border-green-200">
                    <p className="text-sm text-gray-600">Número de Referencia:</p>
                    <p className="font-mono text-sm font-semibold text-gray-800 break-all">{reference}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Notification */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <Mail className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-amber-800 mb-2">Confirmación por Email</h3>
                  <p className="text-amber-700 mb-3">
                    Te hemos enviado un email de confirmación con todos los detalles de tu reserva, incluyendo:
                  </p>
                  <ul className="text-sm text-amber-700 space-y-1 ml-4">
                    <li>• Comprobante de pago y número de referencia</li>
                    <li>• Detalles completos de tu reserva</li>
                    <li>• Instrucciones para el check-in</li>
                    <li>• Información de contacto del hotel</li>
                    <li>• Políticas de cancelación y modificación</li>
                  </ul>
                  <p className="text-sm text-amber-600 mt-3 font-medium">
                    Si no recibes el email en los próximos minutos, revisa tu carpeta de spam.
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Summary */}
            <div className="border-t border-gray-100 pt-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Resumen de Pagos</h3>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Costo total de la estadía</span>
                    <span className="font-medium text-gray-800">{price} COP</span>
                  </div>
                  
                  <div className="border-t border-green-200 pt-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <span className="text-gray-700">Pagado</span>
                      </div>
                      <span className="font-semibold text-green-600">{half} COP</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                        <span className="text-gray-700">Pendiente (en el hotel)</span>
                      </div>
                      <span className="font-medium text-amber-600">{half} COP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Information */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
              <h4 className="font-semibold text-blue-800 mb-3">Información Importante</h4>
              <ul className="text-sm text-blue-700 space-y-2">
                <li>• <strong>Check-in:</strong> Presenta tu documento de identidad y menciona tu número de referencia</li>
                <li>• <strong>Pago restante:</strong> Puedes pagar el 50% restante en efectivo o tarjeta al llegar al hotel</li>
                <li>• <strong>Cancelaciones:</strong> Consulta las políticas de cancelación en el email de confirmación</li>
                <li>• <strong>Modificaciones:</strong> Contacta directamente al hotel para cambios en tu reserva</li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              >
                <Home className="w-5 h-5" />
                Volver al Inicio
              </Link>
              
              <button 
                onClick={() => window.print()}
                className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              >
                <CreditCard className="w-5 h-5" />
                Imprimir Confirmación
              </button>
            </div>

            {/* Contact Support */}
            <div className="text-center mt-8 pt-6 border-t border-gray-100">
              <p className="text-gray-600 text-sm">
                ¿Necesitas ayuda? Contáctanos al {enterpriseData.phone} o envía un email a {enterpriseData.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccess;