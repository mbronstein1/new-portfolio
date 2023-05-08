import React from 'react';
import HeroText from './HeroText';
import classes from './Hero.module.css';

const Hero = ({ children }) => {
  return (
    <>
      <div className={classes.hero} id='top'>
        {children}
        <HeroText />
      </div>
    </>
  );
};

export default Hero;
