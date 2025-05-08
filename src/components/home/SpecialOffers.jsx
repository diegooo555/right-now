import React from 'react';
import { Clock} from 'lucide-react';

const Offer = ({ 
  image,
  title,
  description,
  discount,
  expiry,
  alignment
}) => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
      <div className={`md:w-1/2 ${alignment === 'right' ? 'md:order-2' : ''}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-64 md:h-full object-cover"
        />
      </div>
      <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
        <div className="inline-block bg-gold-100 text-gold-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
          {discount}
        </div>
        <h3 className="text-2xl font-playfair font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <Clock className="w-4 h-4 mr-2" />
          <span>Expires: {expiry}</span>
        </div>
        
        <button className="btn-primary self-start">
          Book This Offer
        </button>
      </div>
    </div>
  );
};

const SpecialOffers = () => {
  return (
    <section id="offers" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title ">Exclusive Special Offers</h2>
          <p className="section-subtitle">Limited-time deals on premium accommodations</p>
        </div>

        <div className="space-y-8">
          <Offer
            image="/view.webp"
            title="Summer Gateway Package"
            description="Enjoy a luxurious 7-night stay with complimentary breakfast, spa access, and a sunset dinner cruise. Perfect for couples looking for a romantic escape."
            discount="Save 25%"
            expiry="August 31, 2023"
            alignment="left"
          />
          
          <Offer
            image="/hotel.jpeg"
            title="Family Vacation Special"
            description="Book a family suite and get 50% off for children under 12, plus complimentary access to kids' club activities and a family adventure tour package."
            discount="Kids Stay Free"
            expiry="September 15, 2023"
            alignment="right"
          />
        </div>

        <div className="text-center mt-12">
          <a href="#" className="btn-outline">
            View All Offers
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;