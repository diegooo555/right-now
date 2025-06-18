import React, { useState } from 'react';
import { X, Upload, Building2, MapPin } from 'lucide-react';

const HotelForm = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-md relative animate-fadeIn">
        <div className="h-2 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-t-2xl" />
        
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-serif font-semibold text-gray-800">Add New Hotel</h2>
            <p className="text-amber-600 mt-1">Create a new hotel listing</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Hotel Name</label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent gold-glow"
                  placeholder="Villa Libertad"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent gold-glow"
                  placeholder="Pantano de Vargas Paipa"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-gradient-to-r from-amber-400 to-yellow-500 text-white py-2 px-4 rounded-lg hover:from-amber-500 hover:to-yellow-600 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Upload className="w-5 h-5" />
              Create Hotel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HotelForm;