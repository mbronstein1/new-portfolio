import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Drawer from './Drawer';
import Overlay from './Overlay';
import Footer from '../Footer/Footer';
import { useNavBarHandler } from '../../hooks/useNavBarHandler';
import classes from './Layout.module.css';

const Layout = () => {
  const { isNavBarTop, isMobile, isOpen, setIsOpen } = useNavBarHandler();
  return (
    <>
      <Navbar isNavBarTop={isNavBarTop} isMobile={isMobile} isOpen={isOpen} setIsOpen={setIsOpen} />
      {isMobile && (
        <div className={classes['drawer-container']}>
          <Drawer isOpen={isOpen} />
          {isOpen && <Overlay setIsOpen={setIsOpen} />}
        </div>
      )}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
