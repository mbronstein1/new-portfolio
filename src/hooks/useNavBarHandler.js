import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

export const useNavBarHandler = () => {
  const [isAtTop, setIsAtTop] = useState(window.scrollY === 0);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Track whether the window is scrolled to the top
  useEffect(() => {
    const scrollHandler = () => setIsAtTop(window.scrollY === 0);
    window.addEventListener('scroll', scrollHandler, { passive: true });

    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  // Stop scrolling when drawer is open
  useEffect(() => {
    document.body.style.overflowY = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  const isMobile = useMediaQuery({ query: '(max-width: 645px)' });

  // Navbar is transparent over the home hero, solid everywhere else
  const isTransparent = (isAtTop && location.pathname === '/') || isOpen;

  return {
    isTransparent,
    isMobile,
    isOpen,
    setIsOpen,
  };
};
