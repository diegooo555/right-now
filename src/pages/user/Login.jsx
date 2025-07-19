import Logo from "../../components/ui/Logo"
import ButtonLoginGoogle from "../../components/ui/ButtonLoginGoogle"

const Login = () => {

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-amber-50 opacity-70"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-100 to-transparent"></div>
      </div>

      <div className="w-full max-w-md z-10">

        <div className="border border-amber-200 rounded-lg shadow-lg bg-white overflow-hidden">
          
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-center p-4">
              <Logo size="large"/>
            </div>

            <div
              className="w-full py-2 px-4 bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 hover:border-amber-300 transition-colors rounded-md flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <ButtonLoginGoogle/>
            </div>
          </div>

          <div className="space-y-1 text-center p-6">
            <p className="text-gray-500">Inicia sesión para acceder a nuestros servicios</p>
          </div>

          <div className="p-6 border-t border-gray-100">
            <div className="text-center text-sm text-gray-500">
              Al iniciar sesión, aceptas nuestros
              <a href="#" className="text-amber-600 hover:text-amber-700 font-medium">
                {" "}
                Términos de servicio
              </a>{" "}
              y
              <a href="#" className="text-amber-600 hover:text-amber-700 font-medium">
                {" "}
                Política de privacidad
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Right Now. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
