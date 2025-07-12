import React from 'react';
import { Wifi, Utensils, Car, Bath, Dumbbell, Coffee } from 'lucide-react';

const Amenity = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-cream-200 transition-all duration-300 hover:shadow-lg hover:border-gold-300 group">
      <div className="w-14 h-14 rounded-full bg-cream-100 flex items-center justify-center mb-4 group-hover:bg-gold-100 transition-colors duration-300">
        <div className="text-gold-600">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-playfair font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Amenities = () => {
  const amenities = [
    {
      id: 1,
      icon: <Wifi size={24} />,
      title: "High-Speed WiFi",
      description: "Stay connected with complimentary high-speed internet access throughout the property."
    },
    {
      id: 2,
      icon: <Utensils size={24} />,
      title: "Gourmet Dining",
      description: "Experience culinary excellence at our award-winning restaurants featuring international cuisine."
    },
    {
      id: 3,
      icon: <Bath size={24} />,
      title: "Luxury Spa",
      description: "Indulge in rejuvenating treatments and therapies at our world-class spa facilities."
    },
    {
      id: 4,
      icon: <Coffee size={24} />,
      title: "24/7 Room Service",
      description: "Enjoy delicious meals and snacks delivered to your room at any time of day or night."
    },
    {
      id: 5,
      icon: <Dumbbell size={24} />,
      title: "Fitness Center",
      description: "Maintain your workout routine with state-of-the-art equipment and professional trainers."
    },
    {
      id: 6,
      icon: <Car size={24} />,
      title: "Airport Transfers",
      description: "Arrive in style with our luxurious airport transfer service available upon request."
    }
  ];

  return (
    <section id="amenities" className="py-5 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title text-4xl font-bold text-amber-500">Servicios incluidos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity) => (
            <Amenity
              key={amenity.id}
              icon={amenity.icon}
              title={amenity.title}
              description={amenity.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;