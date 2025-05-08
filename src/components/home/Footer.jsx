import React from 'react';
import { Hotel, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8" id='contact'>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Hotel className="h-8 w-8 text-gold-500" />
              <span className="ml-2 text-xl font-playfair font-bold">LuxStay</span>
            </div>
            <p className="text-gray-400 mb-6">
              Experience luxury and comfort at its finest. Our hotels offer exceptional service and unforgettable experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gold-600 transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gold-600 transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gold-600 transition-colors duration-300">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-playfair font-bold mb-4 text-gold-500">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#destinations" className="text-gray-400 hover:text-white transition-colors duration-300">Destinations</a></li>
              <li><a href="#offers" className="text-gray-400 hover:text-white transition-colors duration-300">Special Offers</a></li>
              <li><a href="#amenities" className="text-gray-400 hover:text-white transition-colors duration-300">Amenities</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors duration-300">Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-playfair font-bold mb-4 text-gold-500">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-gold-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Luxury Avenue, Golden City, CA 91234</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">info@luxstay.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-playfair font-bold mb-4 text-gold-500">We Accept</h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-gray-800 rounded p-2 flex items-center justify-center">
                <span className="text-sm font-medium">Visa</span>
              </div>
              <div className="bg-gray-800 rounded p-2 flex items-center justify-center">
                <span className="text-sm font-medium">MasterCard</span>
              </div>
              <div className="bg-gray-800 rounded p-2 flex items-center justify-center">
                <span className="text-sm font-medium">Amex</span>
              </div>
              <div className="bg-gray-800 rounded p-2 flex items-center justify-center">
                <span className="text-sm font-medium">PayPal</span>
              </div>
              <div className="bg-gray-800 rounded p-2 flex items-center justify-center">
                <span className="text-sm font-medium">Apple Pay</span>
              </div>
              <div className="bg-gray-800 rounded p-2 flex items-center justify-center">
                <span className="text-sm font-medium">Google Pay</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} LuxStay. All rights reserved. | <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a> | <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;