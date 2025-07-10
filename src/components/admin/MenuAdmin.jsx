import React from 'react';
import LinkGoogle from '../ui/LinkGoogle';
import { Link } from 'react-router';
import { Menu, X } from 'lucide-react';

const MenuAdmin = ({isScrolled, user, isOpen, setIsOpen}) => {
  return (
    <nav 
    className={`w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-1' : 'bg-white py-1'
    }`}
  >
    <div className="mx-auto px-4 md:px-2 w-full">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src="/villa.png" alt="" className='w-20 h-20 rounded-[100%]'/>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-7">
          <Link to="/admin" className="text-sm font-medium hover:text-amber-400 transition-colors">Inicio</Link>
          <a href="#destinations" className="text-sm font-medium hover:text-amber-400 transition-colors">Encuestas</a>
          <a href="#offers" className="text-sm font-medium hover:text-amber-400 transition-colors">Reservas</a>
          <a href="#amenities" className="text-sm font-medium hover:text-amber-400 transition-colors">Pagos</a>
          <a href="#testimonials" className="text-sm font-medium hover:text-amber-400 transition-colors">Habitaciones</a>
          <a href="#contact" className="text-sm font-medium hover:text-amber-400 transition-colors">Finanzas</a>
          <Link to="/hotel" className="text-sm font-medium hover:text-amber-400 transition-colors">Hoteles</Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <LinkGoogle user={user}/>
        </div>

        {/* Mobile Navigation Toggle */}


        <div className="md:hidden focus:outline-none flex gap-2">
        <LinkGoogle user={user}/>
        <button 
          className="md:hidden focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6 text-gold-600" /> : <Menu className="h-6 w-6 text-gold-600" />}
        </button>
        </div>
      </div>
    </div>

    {/* Mobile Navigation Menu */}
    <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
      <div className="px-4 pt-2 pb-4 bg-white shadow-lg">
        <div className="flex flex-col space-y-3">
          <Link to="/admin" className="text-sm font-medium py-2 hover:text-gold-600 transition-colors" onClick={() => setIsOpen(false)}>Inicio</Link>
          <a href="#destinations" className="text-sm font-medium py-2 hover:text-gold-600 transition-colors" onClick={() => setIsOpen(false)}>Destinos</a>
          <a href="#offers" className="text-sm font-medium py-2 hover:text-gold-600 transition-colors" onClick={() => setIsOpen(false)}>Ofertas</a>
          <a href="#amenities" className="text-sm font-medium py-2 hover:text-gold-600 transition-colors" onClick={() => setIsOpen(false)}>Amenidades</a>
          <a href="#testimonials" className="text-sm font-medium py-2 hover:text-gold-600 transition-colors" onClick={() => setIsOpen(false)}>Testimonios</a>
          <a href="#contact" className="text-sm font-medium py-2 hover:text-gold-600 transition-colors" onClick={() => setIsOpen(false)}>Contacto</a>
          <Link to="/reservations" className="text-sm font-medium py-2 hover:text-gold-600 transition-colors" onClick={() => setIsOpen(false)}>Mis Reservas</Link>  
        </div>
      </div>
    </div>
  </nav>
  )
}

export default MenuAdmin