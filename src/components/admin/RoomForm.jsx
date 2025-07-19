import React from 'react';
import { 
  Hotel, 
  Tag, 
  FileText, 
  DollarSign, 
  Image, 
  Users, 
  Plus, 
  Minus,
  Save,
  Eye,
  EyeOff
} from 'lucide-react';

const RoomForm = ({
  formData,
  onInputChange,
  onImageChange,
  onAddImage,
  onRemoveImage,
  onSubmit,
  isSubmitting,
  onTogglePreview,
  showPreview
}) => {
  const roomTypes = [
    'Individual',
    'Doble',
    'Triple',
    'Suite',
    'Suite Familiar',
    'Suite Presidencial',
    'Ejecutiva',
    'Deluxe'
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="h-2 bg-gradient-to-r from-amber-400 to-yellow-500" />
      
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-serif font-semibold text-gray-800">
            Información de la Habitación
          </h2>
          <button
            type="button"
            onClick={onTogglePreview}
            className="flex items-center gap-2 px-4 py-2 bg-amber-50 hover:bg-amber-100 text-amber-600 rounded-lg transition-colors font-medium"
          >
            {showPreview ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            {showPreview ? 'Ocultar Vista Previa' : 'Mostrar Vista Previa'}
          </button>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          {/* Room Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nombre de la Habitación *
            </label>
            <div className="relative">
              <Hotel className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={formData.name}
                onChange={(e) => onInputChange('name', e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                placeholder="Suite Deluxe con Vista al Mar"
                required
              />
            </div>
          </div>

          {/* Room Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tipo de Habitación *
            </label>
            <div className="relative">
              <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={formData.type}
                onChange={(e) => onInputChange('type', e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all appearance-none bg-white"
                required
              >
                <option value="">Seleccionar tipo</option>
                {roomTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Descripción *
            </label>
            <div className="relative">
              <FileText className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <textarea
                value={formData.description}
                onChange={(e) => onInputChange('description', e.target.value)}
                rows={4}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all resize-none"
                placeholder="Describe las características y amenidades de la habitación..."
                required
              />
            </div>
          </div>

          {/* Price and Capacity */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Precio por Noche (COP) *
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) => onInputChange('price', e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                  placeholder="250000"
                  min="0"
                  step="1000"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Capacidad (Personas) *
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  value={formData.capacity}
                  onChange={(e) => onInputChange('capacity', e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                  placeholder="2"
                  min="1"
                  max="10"
                  required
                />
              </div>
            </div>
          </div>

          {/* Main Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Imagen Principal *
            </label>
            <div className="relative">
              <Image className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="url"
                value={formData.urlImg}
                onChange={(e) => onInputChange('urlImg', e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                placeholder="https://example.com/room-image.jpg"
                required
              />
            </div>
          </div>

          {/* Additional Images */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Imágenes Adicionales
              </label>
              <button
                type="button"
                onClick={onAddImage}
                className="flex items-center gap-1 text-amber-600 hover:text-amber-700 text-sm font-medium"
              >
                <Plus className="w-4 h-4" />
                Añadir Imagen
              </button>
            </div>
            
            <div className="space-y-3">
              {formData.images.map((image, index) => (
                <div key={index} className="flex gap-2">
                  <div className="relative flex-1">
                    <Image className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="url"
                      value={image}
                      onChange={(e) => onImageChange(index, e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                      placeholder={`Imagen ${index + 1}`}
                    />
                  </div>
                  {formData.images.length > 1 && (
                    <button
                      type="button"
                      onClick={() => onRemoveImage(index)}
                      className="p-3 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-6 border-t border-gray-100">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 px-6 rounded-lg transition-all duration-300 font-medium shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                  Creando Habitación...
                </>
              ) : (
                <>
                  <Save className="w-5 h-5" />
                  Crear Habitación
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RoomForm;