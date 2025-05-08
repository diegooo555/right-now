import React from 'react';
import { Star } from 'lucide-react';

const DestinationCard = ({ image, name, location, rating, price }) => {
  return (
    <div className="card group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
          <p className="text-white font-medium">{location}</p>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-playfair font-bold">{name}</h3>
        <div className="flex items-center mt-2">
          <Star className="w-4 h-4 text-gold-500 fill-gold-500" />
          <span className="ml-1 text-sm">{rating} (120+ reviews)</span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <p className="text-amber-600 font-medium">
            <span className="text-lg">${price}</span>
            <span className="text-sm text-gray-600"> / night</span>
          </p>
          <a href="/reserve" className="text-sm text-amber-600 hover:text-amber-700 font-medium">
            Reservar
          </a>
        </div>
      </div>
    </div>
  );
};

const PopularDestinations = () => {
  const destinations = [
    {
      id: 1,
      image: "/hotel1.jpeg",
      name: "Luxury Ocean Suite",
      location: "Maldives",
      rating: 4.8,
      price: 249
    },
    {
      id: 2,
      image: "/hotel2.webp",
      name: "Grand City View",
      location: "New York",
      rating: 4.7,
      price: 199
    },
    {
      id: 3,
      image: "/hotel3.jpeg",
      name: "Mountain Escape Resort",
      location: "Switzerland",
      rating: 4.9,
      price: 329
    },
    {
      id: 4,
      image: "/hotel4.jpeg",
      name: "Historic Palace Hotel",
      location: "Rome",
      rating: 4.6,
      price: 185
    }
  ];

  return (
    <section id="destinations" className="py-20 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-amber-500 mb-4 leading-tight">Explore Our Popular Destinations</h2>
          <p className="text-2xl text-amber-400">Discover handpicked properties in breathtaking locations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              image={destination.image}
              name={destination.name}
              location={destination.location}
              rating={destination.rating}
              price={destination.price}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="btn-outline">
            View All Destinations
          </a>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;