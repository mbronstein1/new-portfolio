import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import classes from '../components/Navbar/Navbar.module.css';

export const useNavBarHandler = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Handle navbar state based on the location of the window
  useEffect(() => {
    window.onscroll = () => (window.pageYOffset === 0 ? setIsAtTop(true) : setIsAtTop(false));

    return () => (window.onscroll = null);
  });

  // Stop scrolling when drawer is open
  useEffect(() => {
    const bodyStyle = document.body.style;
    if (isOpen) {
      bodyStyle.overflowY = 'hidden';
    } else {
      bodyStyle.overflowY = 'auto';
    }
  }, [isOpen]);

  const isMobile = useMediaQuery({ query: '(max-width: 645px)' });

  const isNavBarTop = (isAtTop && location.pathname !== '/portfolio') || isOpen ? classes['nav-bar-top'] : location.pathname === '/portfolio' && classes['nav-bar__portfolio'];

  return {
    setIsAtTop,
    isNavBarTop,
    isMobile,
    isOpen,
    setIsOpen,
  };
};
