import React, { useState, useEffect } from 'react';
import MenuAdmin from './MenuAdmin';
import { useUserContext } from '../../context/useUsercontext';

const AdminLayout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const {user} = useUserContext();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-amber-50">
      <MenuAdmin 
        user={user}
        isScrolled={isScrolled}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <main className="pt-4">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;