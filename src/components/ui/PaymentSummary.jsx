import { CreditCard } from "lucide-react"

function PaymentSummary({half}) {
  return(
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
  )
}

export default PaymentSummary