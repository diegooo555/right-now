import React, { useState, useEffect } from 'react';
import { useUserContext } from '../../context/useUsercontext.js';
import MenuUser from './MenuUser';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user } = useUserContext();


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
    <MenuUser isScrolled={isScrolled} user={user} isOpen={isOpen} setIsOpen={setIsOpen} />
  )
};

export default Navbar;