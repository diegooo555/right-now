import React, { useState, useEffect } from 'react';
import { useUserContext } from '../../context/useUsercontext.js';
import MenuAdmin from './MenuAdmin';
import MenuUser from './MenuUser';

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
    return <div className="text-center text-2xl font-bold">Cargando...</div>;
  }

  const isAdmin = user?.roles?.some(role => role === "ROLE_ADMIN");

  return (
    <>
      {isAdmin ? <MenuAdmin isScrolled={isScrolled} user={user} isOpen={isOpen} setIsOpen={setIsOpen} /> : <MenuUser isScrolled={isScrolled} user={user} isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};

export default Navbar;