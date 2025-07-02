import React, { useState, useEffect } from 'react';
import { useUserContext } from '../../context/useUsercontext.js';
import MenuAdmin from './MenuAdmin';
import MenuUser from './MenuUser';
import { Loader2 } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, loading } = useUserContext();


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

  if(loading) {
    return (
      <nav className='fixed w-full z-50 transition-all duration-300 bg-white py-1'>
      <div className="mx-auto px-4 md:px-2 w-full">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/villa.png" alt="logo" className='w-20 h-20 rounded-[100%]'/>
          </div>

          <div className="flex-1 flex justify-center">
              <Loader2 className="animate-spin h-12 w-12 text-amber-500"/>
            </div>
        </div>
      </div>
    </nav>
    )
  }

  const isAdmin = user?.roles?.some(role => role === "ROLE_ADMIN");

  return (
    <>
      {isAdmin ? <MenuAdmin isScrolled={isScrolled} user={user} isOpen={isOpen} setIsOpen={setIsOpen} /> : <MenuUser isScrolled={isScrolled} user={user} isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};

export default Navbar;