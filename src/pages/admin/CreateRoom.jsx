import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { createRoom } from '../../api/hotel.js';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RoomForm from '../../components/admin/RoomForm';
import RoomPreview from '../../components/admin/RoomPreview';
import PageHeader from '../../components/admin/PageHeader';
import { ArrowLeft } from 'lucide-react';

const CreateRoom = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { hotel } = location.state || {};
  
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    description: '',
    price: '',
    urlImg: '',
    images: [''],
    capacity: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  // Redirect if no hotel data
  if (!hotel) {
    navigate('/admin');
    return null;
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleImageChange = (index, value) => {
    const newImages = [...formData.images];
    newImages[index] = value;
    setFormData(prev => ({
      ...prev,
      images: newImages
    }));
  };

  const addImageField = () => {
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, '']
    }));
  };

  const removeImageField = (index) => {
    if (formData.images.length > 1) {
      const newImages = formData.images.filter((_, i) => i !== index);
      setFormData(prev => ({
        ...prev,
        images: newImages
      }));
    }
  };

  const validateForm = () => {
    const { name, type, description, price, urlImg, capacity } = formData;
    
    if (!name.trim()) {
      toast.error('El nombre de la habitación es requerido');
      return false;
    }
    
    if (!type.trim()) {
      toast.error('El tipo de habitación es requerido');
      return false;
    }
    
    if (!description.trim()) {
      toast.error('La descripción es requerida');
      return false;
    }
    
    if (!price || price <= 0) {
      toast.error('El precio debe ser mayor a 0');
      return false;
    }
    
    if (!urlImg.trim()) {
      toast.error('La imagen principal es requerida');
      return false;
    }
    
    if (!capacity || capacity <= 0) {
      toast.error('La capacidad debe ser mayor a 0');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const roomData = {
        hotelId: hotel.id,
        name: formData.name.trim(),
        type: formData.type.trim(),
        description: formData.description.trim(),
        price: parseFloat(formData.price),
        urlImg: formData.urlImg.trim(),
        images: formData.images.filter(img => img.trim() !== ''),
        capacity: parseInt(formData.capacity)
      };
      
      
      const response = await createRoom(roomData);
      
      if (response.status === 200) {
        toast.success('¡Habitación creada exitosamente!');
        setTimeout(() => {
          navigate(`/hotel/${hotel.id}`);
        }, 2000);
      } else {
        throw new Error('Error al crear la habitación');
      }
    } catch (error) {
      console.error('Error creating room:', error);
      toast.error('Error al crear la habitación. Por favor intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    navigate(`/hotel/${hotel.id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-amber-50">
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-amber-600 hover:text-amber-700 transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver al Hotel
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <PageHeader hotel={hotel} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <div className="space-y-8">
            <RoomForm
              formData={formData}
              onInputChange={handleInputChange}
              onImageChange={handleImageChange}
              onAddImage={addImageField}
              onRemoveImage={removeImageField}
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              onTogglePreview={() => setShowPreview(!showPreview)}
              showPreview={showPreview}
            />
          </div>

          {/* Preview Section */}
          <div className="lg:sticky lg:top-8">
            <RoomPreview
              formData={formData}
              hotel={hotel}
              isVisible={showPreview}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRoom;