import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import classes from './HeroText.module.css';

const HeroText = () => {
  const [text] = useTypewriter({
    words: ['Web Developer', 'Software Engineer', 'Team Player'],
    loop: false,
  });

  return (
    <div className={classes['hero-text-container']}>
      <h1>Hi there! I'm Matthew Bronstein.</h1>
      <h2>
        I am a{' '}
        <span style={{ color: 'blue', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          {text}
        </span>
        <Cursor cursorColor='blue' />
      </h2>
    </div>
  );
};

export default HeroText;
