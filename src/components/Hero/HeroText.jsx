import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import classes from './HeroText.module.css';

const HeroText = () => {
  const [text] = useTypewriter({
    words: ['Web Developer', 'Software Engineer', 'Collaborator'],
    loop: false,
  });

  return (
    <div className={classes['hero-text-container']}>
      <h1>Hi there! I'm Matthew.</h1>
      <h2>
        I am a <span className={classes.typewriter}>{text}</span>
        <Cursor cursorColor='#2a1f80' />
      </h2>
      <hr style={{ width: '50%' }} />
    </div>
  );
};

export default HeroText;
