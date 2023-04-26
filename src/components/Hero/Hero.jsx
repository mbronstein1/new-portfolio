import React from 'react';
import Container from '../UI/Container';
import HeroText from './HeroText';
import classes from './Hero.module.css';

const Hero = ({ children }) => {
  return (
    <>
      <div className={classes.hero}>
        {children}
        <Container>
          <HeroText />
        </Container>
      </div>
    </>
  );
};

export default Hero;
