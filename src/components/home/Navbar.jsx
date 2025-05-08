import React, { useState, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';
import Logo from '../ui/Logo'
import { useUserContext } from '../../context/useUsercontext.js';
import LinkGoogle from '../ui/LinkGoogle.jsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const {user} = useUserContext();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Logo/>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-sm font-medium hover:text-gold-600 transition-colors">Inicio</a>
            <a href="#destinations" className="text-sm font-medium hover:text-gold-600 transition-colors">Destinos</a>
            <a href="#offers" className="text-sm font-medium hover:text-gold-600 transition-colors">Ofertas Especiales</a>
            <a href="#amenities" className="text-sm font-medium hover:text-gold-600 transition-colors">Amenidades</a>
            <a href="#testimonials" className="text-sm font-medium hover:text-gold-600 transition-colors">Testimonios</a>
            <a href="#contact" className="text-sm font-medium hover:text-gold-600 transition-colors">Contacto</a>
            <a href="/reservations" className="text-sm font-medium hover:text-gold-600 transition-colors">Mis Reservas</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <LinkGoogle user={user}/>


            <a href="/reserve" className="btn-primary text-sm">Reservar</a>
          </div>

          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6 text-gold-600" /> : <Menu className="h-6 w-6 text-gold-600" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 pt-2 pb-4 bg-white shadow-lg">
          <div className="flex flex-col space-y-3">
            <a href="#home" className="text-sm font-medium py-2 hover:text-gold-600 transition-colors" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#destinations" className="text-sm font-medium py-2 hover:text-gold-600 transition-colors" onClick={() => setIsOpen(false)}>Destinations</a>
            <a href="#offers" className="text-sm font-medium py-2 hover:text-gold-600 transition-colors" onClick={() => setIsOpen(false)}>Special Offers</a>
            <a href="#amenities" className="text-sm font-medium py-2 hover:text-gold-600 transition-colors" onClick={() => setIsOpen(false)}>Amenities</a>
            <a href="#testimonials" className="text-sm font-medium py-2 hover:text-gold-600 transition-colors" onClick={() => setIsOpen(false)}>Testimonials</a>
            <a href="#contact" className="text-sm font-medium py-2 hover:text-gold-600 transition-colors" onClick={() => setIsOpen(false)}>Contact</a>
            <div className="pt-2 border-t border-gray-200">
              <a href="#" className="flex items-center text-sm font-medium py-2 hover:text-gold-600">
                <User className="h-4 w-4 mr-1" />
                <span>Sign In</span>
              </a>
              <a href="#book" className="block mt-3 btn-primary text-center text-sm" onClick={() => setIsOpen(false)}>Book Now</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;