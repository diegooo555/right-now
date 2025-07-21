import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonial = ({ 
  quote, 
  author, 
  location, 
  image,
  rating 
}) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
      <div className="flex items-center mb-6">
        <img 
          src={image} 
          alt={author} 
          className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-gold-300"
        />
        <div>
          <h4 className="font-playfair font-bold">{author}</h4>
          <p className="text-sm text-gray-600">{location}</p>
          <div className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                className={`${i < rating ? 'text-amber-400 fill-gold-500' : 'text-gray-300'} mr-1`} 
              />
            ))}
          </div>
        </div>
      </div>
      <p className="italic text-gray-700">"{quote}"</p>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "El lugar muy aseado, tranquilo y bien ubicado. El personal nos atendio muy bien con muy buena disposición, con Edelmira y sus trabajadores. El desayuno estuvo riquísimo.",
      author: "Camila Sierra",
      location: "Bogota D.C",
      image: "/emma.jpeg",
      rating: 5
    },
    {
      id: 2,
      quote: "Excelente atención, muy limpio, ubicación genial, tranquilidad y sonidos campestres. Desayuno increíble y gran sazón, recomendable al 200%.",
      author: "Michael Chen",
      location: "Bucaramanga",
      image: "/michael.webp",
      rating: 5
    },
    {
      id: 3,
      quote: "En general fue una excelente experiencia, es una muy buena ubicación, personal muy amable y atentos, la comida muy rica, los recorridos puebleando por Boyacá espectaculares.",
      author: "Sophia Rodriguez",
      location: "Quindio",
      image: "/sofia.jpeg",
      rating: 4
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">What Our Guests Say</h2>
          <p className="section-subtitle">Real experiences from satisfied guests</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Desktop View - Show all testimonials */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <Testimonial
                  key={testimonial.id}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  location={testimonial.location}
                  image={testimonial.image}
                  rating={testimonial.rating}
                />
              ))}
            </div>

            {/* Mobile View - Carousel */}
            <div className="md:hidden">
              <Testimonial
                quote={testimonials[currentIndex].quote}
                author={testimonials[currentIndex].author}
                location={testimonials[currentIndex].location}
                image={testimonials[currentIndex].image}
                rating={testimonials[currentIndex].rating}
              />
              
              <div className="flex justify-center mt-6">
                <button 
                  onClick={prevTestimonial}
                  className="p-2 rounded-full border border-gold-300 text-gold-600 hover:bg-gold-50 mr-4"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="p-2 rounded-full border border-gold-300 text-gold-600 hover:bg-gold-50"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;