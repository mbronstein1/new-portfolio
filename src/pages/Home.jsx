import React from 'react';
import VideoOverlay from '../components/UI/VideoOverlay';
import Video from '../components/UI/Video';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';

const Home = () => {
  return (
    <>
      <Hero>
        <VideoOverlay />
        <Video />
      </Hero>
      <About />
      <Contact />
    </>
  );
};

export default Home;
