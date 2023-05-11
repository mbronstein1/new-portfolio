import React from 'react';
import classes from './Overlay.module.css';

const Overlay = ({ setIsOpen }) => {
  return <div onClick={() => setIsOpen(false)} className={classes.overlay}></div>;
};

export default Overlay;
