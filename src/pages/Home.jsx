import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Experience from '../components/Experience/Experience';
import Stack from '../components/Stack/Stack';
import Outside from '../components/Outside/Outside';
import Contact from '../components/Contact/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Stack />
      <Outside />
      <Contact />
    </>
  );
};

export default Home;
