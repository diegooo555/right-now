import React, { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import {
  Star,
  Heart,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Shield,
  Sparkles,
  ArrowRight,
  ThumbsUp,
  Award,
  Send,
} from "lucide-react";

const ServiceSurvey = () => {
  const [searchParams] = useSearchParams();
  const reference = searchParams.get("reference");

  const [formData, setFormData] = useState({
    overallRating: 0,
    cleanlinessRating: 0,
    staffRating: 0,
    facilitiesRating: 0,
    valueRating: 0,
    wouldRecommend: "",
    bestAspect: "",
    improvementSuggestion: "",
    additionalComments: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRatingChange = (category, rating) => {
    setFormData((prev) => ({
      ...prev,
      [category]: rating,
    }));
  };

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");
    setIsLoading(true);

    try {
      // Simular envío de encuesta
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSuccessMessage(
        "¡Gracias por tu opinión! Tu feedback nos ayuda a mejorar continuamente."
      );

      // Limpiar formulario después del éxito
      setTimeout(() => {
        setFormData({
          overallRating: 0,
          cleanlinessRating: 0,
          staffRating: 0,
          facilitiesRating: 0,
          valueRating: 0,
          wouldRecommend: "",
          bestAspect: "",
          improvementSuggestion: "",
          additionalComments: "",
        });
      }, 3000);
    } catch (error) {
      console.error("Error al enviar encuesta:", error);
      setErrorMessage(
        "Ocurrió un error al enviar tu opinión. Por favor, intenta nuevamente."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const StarRating = ({ rating, onRatingChange, label }) => {
    return (
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">
          {label}
        </label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => onRatingChange(star)}
              className={`p-1 rounded-full transition-all duration-200 hover:scale-110 ${
                star <= rating
                  ? "text-amber-400 hover:text-amber-500"
                  : "text-gray-300 hover:text-amber-300"
              }`}
            >
              <Star
                className={`w-8 h-8 ${star <= rating ? "fill-current" : ""}`}
              />
            </button>
          ))}
        </div>
        <p className="text-xs text-gray-500">
          {rating === 0 && "Selecciona una calificación"}
          {rating === 1 && "Muy malo"}
          {rating === 2 && "Malo"}
          {rating === 3 && "Regular"}
          {rating === 4 && "Bueno"}
          {rating === 5 && "Excelente"}
        </p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-100 py-12 px-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(245,158,11,0.1),transparent_50%)]" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl border border-amber-100/50 overflow-hidden">
          {/* Header with gradient */}
          <div className="h-2 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500" />

          <div className="p-8">
            {/* Header Section */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1">
                    <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
                  </div>
                </div>
              </div>
              <h1 className="text-3xl font-serif font-semibold text-gray-800 mb-2">
                ¿Cómo fue tu Experiencia?
              </h1>
              <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Tu opinión es muy valiosa para nosotros. Ayúdanos a mejorar
                nuestros servicios compartiendo tu experiencia de alojamiento.
              </p>
              {reference && (
                <div className="mt-4 inline-block bg-amber-50 border border-amber-200 rounded-lg px-4 py-2">
                  <p className="text-sm text-amber-700">
                    <span className="font-medium">Reserva:</span>{" "}
                    {reference.split("_")[0]}
                  </p>
                </div>
              )}
            </div>

            {/* Trust Badge */}
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-xl p-4 mb-8">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-amber-800">
                    Encuesta Anónima y Segura
                  </p>
                  <p className="text-xs text-amber-700">
                    Tus respuestas nos ayudan a brindarte un mejor servicio en
                    futuras visitas
                  </p>
                </div>
              </div>
            </div>

            {/* Success/Error Messages */}
            {successMessage && (
              <div className="mb-8 bg-green-50 border-2 border-green-200 rounded-xl p-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="text-green-800 font-medium">
                      {successMessage}
                    </p>
                    <div className="mt-4">
                      <Link
                        to="/"
                        className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                      >
                        Volver al Inicio
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {errorMessage && (
              <div className="mb-8 bg-red-50 border-2 border-red-200 rounded-xl p-6">
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <p className="text-red-800 font-medium">{errorMessage}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Overall Rating */}
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-amber-600" />
                  <h3 className="text-xl font-semibold text-gray-800">
                    Calificación General
                  </h3>
                </div>
                <StarRating
                  rating={formData.overallRating}
                  onRatingChange={(rating) =>
                    handleRatingChange("overallRating", rating)
                  }
                  label="¿Cómo calificarías tu experiencia general?"
                />
              </div>

              {/* Detailed Ratings */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <StarRating
                    rating={formData.cleanlinessRating}
                    onRatingChange={(rating) =>
                      handleRatingChange("cleanlinessRating", rating)
                    }
                    label="Limpieza y Orden"
                  />

                  <StarRating
                    rating={formData.staffRating}
                    onRatingChange={(rating) =>
                      handleRatingChange("staffRating", rating)
                    }
                    label="Atención del Personal"
                  />
                </div>

                <div className="space-y-6">
                  <StarRating
                    rating={formData.facilitiesRating}
                    onRatingChange={(rating) =>
                      handleRatingChange("facilitiesRating", rating)
                    }
                    label="Instalaciones y Comodidades"
                  />

                  <StarRating
                    rating={formData.valueRating}
                    onRatingChange={(rating) =>
                      handleRatingChange("valueRating", rating)
                    }
                    label="Relación Calidad-Precio"
                  />
                </div>
              </div>

              {/* Recommendation */}
              <div className="space-y-4">
                <label className="block text-sm font-semibold text-gray-700">
                  ¿Recomendarías este alojamiento a otros viajeros?
                </label>
                <div className="flex gap-4">
                  {[
                    {
                      value: "definitely",
                      label: "Definitivamente sí",
                      color: "green",
                    },
                    {
                      value: "probably",
                      label: "Probablemente sí",
                      color: "amber",
                    },
                    { value: "maybe", label: "Tal vez", color: "gray" },
                    {
                      value: "probably_not",
                      label: "Probablemente no",
                      color: "orange",
                    },
                    {
                      value: "definitely_not",
                      label: "Definitivamente no",
                      color: "red",
                    },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="wouldRecommend"
                        value={option.value}
                        checked={formData.wouldRecommend === option.value}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div
                        className={`w-4 h-4 rounded-full border-2 mr-2 transition-all duration-200 ${
                          formData.wouldRecommend === option.value
                            ? `bg-${option.color}-500 border-${option.color}-500`
                            : "border-gray-300 hover:border-amber-400"
                        }`}
                      >
                        {formData.wouldRecommend === option.value && (
                          <div className="w-full h-full rounded-full bg-white scale-50"></div>
                        )}
                      </div>
                      <span className="text-sm text-gray-700">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Text Inputs */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    ¿Qué fue lo que más te gustó?
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-start pt-4 pointer-events-none">
                      <ThumbsUp className="h-5 w-5 text-amber-400" />
                    </div>
                    <textarea
                      name="bestAspect"
                      value={formData.bestAspect}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Comparte lo que más disfrutaste de tu estadía..."
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-100 transition-all duration-200 hover:border-amber-300 resize-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    ¿Qué podríamos mejorar?
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-start pt-4 pointer-events-none">
                      <Sparkles className="h-5 w-5 text-amber-400" />
                    </div>
                    <textarea
                      name="improvementSuggestion"
                      value={formData.improvementSuggestion}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Tus sugerencias nos ayudan a mejorar..."
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-100 transition-all duration-200 hover:border-amber-300 resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Comments */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Comentarios Adicionales (Opcional)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-start pt-4 pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-amber-400" />
                  </div>
                  <textarea
                    name="additionalComments"
                    value={formData.additionalComments}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="¿Hay algo más que te gustaría compartir con nosotros?"
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-100 transition-all duration-200 hover:border-amber-300 resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isLoading || formData.overallRating === 0}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 group"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando tu Opinión...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                      Enviar Encuesta
                    </>
                  )}
                </button>

                {formData.overallRating === 0 && (
                  <p className="text-center text-sm text-amber-600 mt-2 font-medium">
                    Por favor, proporciona una calificación general para
                    continuar
                  </p>
                )}
              </div>
            </form>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-center text-xs text-gray-500 leading-relaxed">
                Gracias por tomarte el tiempo de compartir tu experiencia con
                nosotros.
                <br />
                <span className="text-amber-600 font-medium">
                  Tu feedback es fundamental para nuestro crecimiento.
                </span>
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

export default ServiceSurvey;
