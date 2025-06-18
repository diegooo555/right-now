import React, { useState } from 'react';
import Logo from '../components/ui/Logo';
import { registerUser, refreshAccesToken } from '../api/user.js';
import { useUserContext } from '../context/useUsercontext.js';
import { jwtDecode } from 'jwt-decode';
import { 
  User, 
  Phone, 
  MapPin, 
  Mail, 
  CheckCircle, 
  AlertCircle,
  Shield,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const Register = () => {
  const {user, setUser} = useUserContext();

  console.log(user);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    email: user?.sub
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');
    setIsLoading(true);
    
    try {
      const response = await registerUser({ ...formData });
      console.log(response);

      if (response?.status === 201) {
        setSuccessMessage("¡Registro exitoso! Redirigiendo...");
        const refreshRequest = await refreshAccesToken();
        const newToken = refreshRequest?.data?.token;
        localStorage.setItem('alfretyuiopwerqazxcnosrew', newToken);
        const decoded = jwtDecode(newToken);
        setTimeout(() => setUser(decoded), 2000); // redirige después de 2 segundos
      } else {
        setErrorMessage("No se pudo completar el registro. Intenta nuevamente.");
      }
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      setErrorMessage("Ocurrió un error al registrar. Por favor, verifica los datos o intenta más tarde.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-100 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(245,158,11,0.1),transparent_50%)]" />
      </div>

      <div className="relative w-full max-w-3xl">
        <div className="bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl border border-amber-100/50 overflow-hidden">
          {/* Header with gradient */}
          <div className="h-2 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500" />
          
          <div className="p-8">
            {/* Logo and Welcome Section */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <Logo size="large"/>
                  <div className="absolute -top-1 -right-1">
                    <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
                  </div>
                </div>
              </div>
              <h1 className="text-2xl font-serif font-semibold text-gray-800 mb-2">
                Completa tu Perfil
              </h1>
              <p className="text-gray-600 text-sm leading-relaxed">
                Solo necesitamos algunos datos adicionales para personalizar tu experiencia de reservas
              </p>
            </div>

            {/* Trust Badge */}
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-xl p-4 mb-6">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-amber-800">Información Segura</p>
                  <p className="text-xs text-amber-700">Tus datos están protegidos con encriptación de grado bancario</p>
                </div>
              </div>
            </div>

            {/* Success/Error Messages */}
            {successMessage && (
              <div className="mb-6 bg-green-50 border-2 border-green-200 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <p className="text-green-800 font-medium text-sm">{successMessage}</p>
                </div>
              </div>
            )}
            
            {errorMessage && (
              <div className="mb-6 bg-red-50 border-2 border-red-200 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <p className="text-red-800 font-medium text-sm">{errorMessage}</p>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field (Read-only) */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Correo Electrónico
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-amber-400" />
                  </div>
                  <input
                    type='email'
                    name='email'
                    value={user?.sub}
                    readOnly
                    className="w-full pl-12 pr-4 py-3 bg-amber-50 border-2 border-amber-200 rounded-xl text-gray-700 font-medium focus:outline-none cursor-not-allowed"
                  />
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                </div>
                <p className="text-xs text-amber-600 font-medium">✓ Verificado automáticamente</p>
              </div>

              {/* Name Field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Nombre Completo
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-amber-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Ingresa tu nombre completo"
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-100 transition-all duration-200 hover:border-amber-300"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Número de Teléfono
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-amber-400" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+57 300 123 4567"
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-100 transition-all duration-200 hover:border-amber-300"
                  />
                </div>
              </div>

              {/* City Field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Ciudad de Residencia
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-amber-400" />
                  </div>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    placeholder="Ej: Bogotá, Medellín, Cali..."
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-100 transition-all duration-200 hover:border-amber-300"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 group"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Procesando...
                  </>
                ) : (
                  <>
                    Completar Registro
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </>
                )}
              </button>
            </form>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-center text-xs text-gray-500 leading-relaxed">
                Al completar tu registro, aceptas nuestros términos de servicio y política de privacidad. 
                <br />
                <span className="text-amber-600 font-medium">Tu información está completamente segura.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-amber-200/30 to-yellow-200/30 rounded-full blur-xl" />
        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-amber-300/20 to-yellow-300/20 rounded-full blur-xl" />
      </div>
    </div>
  );
};

export default Register;