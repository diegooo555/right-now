import React from 'react';
import { Star } from 'lucide-react';

const DestinationCard = ({ image, name, location, rating }) => {
  return (
    <div className="card group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
          <p className="text-white font-medium">{location}</p>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-playfair font-bold">{name}</h3>
        <div className="flex items-center mt-2">
          <Star className="w-4 h-4 text-amber-500" />
          <span className="ml-1 text-sm text-amber-500">{rating} (120+ reviews)</span>
        </div>
      </div>
    </div>
  );
};

const PopularDestinations = () => {
  const destinations = [
    {
      id: 1,
      image: "/monumento.webp",
      name: "Monumento a los 14 Lanceros",
      location: "Paipa",
      rating: 4.9
    },
    {
      id: 2,
      image: "/museo.webp",
      name: "Museo",
      location: "Paipa",
      rating: 4.8
    },
    {
      id: 3,
      image: "/stone.webp",
      name: "Mountain Escape Resort",
      location: "Paipa",
      rating: 4.9
    },
    {
      id: 4,
      image: "/cerro.webp",
      name: "Cerro de la Guerra",
      location: "Paipa",
      rating: 4.6
    }
  ];

  return (
    <section id="destinations" className="py-10 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-amber-500 mb-4 leading-tight">Explora y Descubre Pantano de Vargas</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              image={destination.image}
              name={destination.name}
              location={destination.location}
              rating={destination.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;