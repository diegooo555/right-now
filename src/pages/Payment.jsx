import { Navigate, useLocation } from 'react-router-dom';
import { useUserContext } from "../context/useUsercontext.js";
import { Calendar, Users, CreditCard, Building2, Shield, CheckCircle } from 'lucide-react';
import { Decimal } from 'decimal.js';
import BuyButton from "../wompi/BuyButton";
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Payment = () => {
  const { user } = useUserContext();
  const location = useLocation();
  if (!location.state) {
    return <Navigate to="/"/>;
  }

  const { checkIn, checkOut, guests, room } = location.state || {};

  console.log(user);
  console.log(location.state);

  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);

  const formattedCheckIn = checkInDate.toLocaleDateString('es-CO', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });

  const formattedCheckOut = checkOutDate.toLocaleDateString('es-CO', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });

  const startDate = new Date(checkIn);
  const endDate = new Date(checkOut);
  const numberOfNights = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
  const price = new Decimal(room?.price);
  const nights = new Decimal(numberOfNights);
  const totalPrice = price.mul(nights);
  const half = totalPrice.div(2);
  const amountForWompi = half.toDecimalPlaces(0).toString() + "00";
  const totalPriceStr = totalPrice.toDecimalPlaces(0).toString();

  const reservationData = {
    email: user?.sub || '',
    hotelId: room?.hotel?.id || '',
    roomId: room?.id || '',
    numPersons: guests,
    checkIn,
    checkOut,
    reference: '',
    total: totalPrice,
    deposit: half,
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-amber-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          
          <div className="h-2 bg-gradient-to-r from-amber-400 to-yellow-500" />

          <Link className="flex items-center gap-2 text-amber-500 hover:text-amber-700 m-3 font-bold text-xl" to={`/availability?checkin=${checkIn}&checkout=${checkOut}&capacity=${guests}`}>
            <ArrowLeft className="w-5 h-5" />
            Atrás
          </Link>
          
          <div className="p-4">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-amber-500" />
              <h2 className="text-3xl font-serif font-semibold text-amber-600">Confirma tu Reserva</h2>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div className="text-amber-800">
                  <p className="font-medium mb-1">Sistema de Pago Seguro y Flexible</p>
                  <p className="text-sm">Para tu comodidad y seguridad, solo necesitas abonar el 50% ahora para asegurar tu habitación. El saldo restante lo abonarás directamente en el hotel al momento del check-in.</p>
                </div>
              </div>
            </div>

            <div className="mb-8 p-6 bg-amber-50 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-6 h-6 text-amber-600" />
                <h3 className="text-xl font-semibold text-gray-800">{room?.name}</h3>
              </div>
              <p className="text-amber-700 font-medium mb-2">{room?.roomType}</p>
              <img 
                src={room?.urlImg} 
                alt={room?.name} 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-600">
                <Calendar className="w-5 h-5 text-amber-500" />
                <div>
                  <p className="font-extrabold text-2xl text-amber-600">Fechas de tu Estadía</p>
                  <p className="font-bold text-xl">{formattedCheckIn} - {formattedCheckOut}</p>
                  <p className="text-amber-600 font-bold">{nights?.toLocaleString('es-CO', { currency: 'COP' })} {nights?.toLocaleString() === '1' ? 'noche' : 'noches'}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <Users className="w-5 h-5 text-amber-500" />
                <div>
                  <p className="font-extrabold text-2xl text-amber-600">Huéspedes</p>
                  <p className="text-amber-600 font-bold">{guests} {guests === 1 ? 'persona' : 'personas'}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-6 mb-8">
              <h4 className="text-lg font-bold text-gray-800 mb-4">Desglose de Costos</h4>
              <div className="space-y-3 text-gray-600">
                <div className="flex justify-between">
                  <span>Precio por noche</span>
                  <span className="font-medium">${room?.price?.toLocaleString('es-CO', { currency: 'COP' })} COP</span>
                </div>
                <div className="flex justify-between">
                  <span>Número de {nights?.toLocaleString() === '1' ? 'noche' : 'noches'}</span>
                  <span className="font-medium">{nights?.toLocaleString()}</span>
                </div>
                <div className="flex justify-between p-4 text-lg text-blue-800 pt-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <span className="font-semibold">Costo Total de la Estadía</span>
                  <span className="font-semibold">${totalPrice?.toNumber().toLocaleString('es-CO', { currency: 'COP' })} COP</span>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-xl p-6">
                <h5 className="text-lg font-semibold text-amber-800 mb-3">Plan de Pago Conveniente</h5>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                      <span className="text-gray-700">Abono inicial (hoy)</span>
                    </div>
                    <span className="font-medium text-gray-800">${half?.toNumber().toLocaleString('es-CO', { currency: 'COP' })} COP</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                      <span className="text-gray-700">Pago restante (en el hotel)</span>
                    </div>
                    <span className="font-medium text-gray-800">${half?.toNumber().toLocaleString('es-CO', { currency: 'COP' })} COP</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t-2 border-amber-300">
                  <div className="flex justify-between items-center bg-amber-100 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <CreditCard className="w-6 h-6 text-amber-600" />
                      <div>
                        <p className="font-bold text-lg text-amber-800">Total a Pagar Ahora</p>
                        <p className="text-sm text-amber-700">50% para confirmar tu reserva</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-amber-600">${half?.toNumber().toLocaleString('es-CO', { currency: 'COP' })}</p>
                      <p className="text-sm text-amber-700 font-medium">COP</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-green-600" />
                <h5 className="font-semibold text-gray-800">Pago Seguro y Protegido</h5>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Tu información está protegida con encriptación de grado bancario. Procesamos tu pago de forma segura.
              </p>
              <BuyButton
                amount={amountForWompi}
                customerData={{
                  email: user?.sub || '',
                  name: user?.given_name || '',
                }}
                totalPrice={totalPriceStr}
                reservationData={reservationData}
              />
            </div>

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Recordatorio:</strong> Una vez completado este pago, recibirás un email de confirmación con todos los detalles de tu reserva y las instrucciones para el check-in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;