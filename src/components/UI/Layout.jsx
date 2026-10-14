import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Drawer from './Drawer';
import Overlay from './Overlay';
import Footer from '../Footer/Footer';
import { useNavBarHandler } from '../../hooks/useNavBarHandler';
import { useTheme } from '../../hooks/useTheme';

const Layout = () => {
  const { isTransparent, isMobile, isOpen, setIsOpen } = useNavBarHandler();
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Navbar isTransparent={isTransparent} isMobile={isMobile} isOpen={isOpen} setIsOpen={setIsOpen} theme={theme} toggleTheme={toggleTheme} />
      {isMobile && (
        <div>
          <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
          {isOpen && <Overlay setIsOpen={setIsOpen} />}
        </div>
      )}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
