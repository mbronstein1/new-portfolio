import React from 'react';
import classes from './Drawer.module.css';

const Drawer = ({ isOpen }) => {
  return <div className={`${classes.drawer} ${isOpen ? classes.open : classes.closed}`}>Drawer</div>;
};

export default Drawer;
