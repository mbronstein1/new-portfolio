import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './About.module.css';
import Container from '../UI/Container';
import headshot from '../../assets/headshot.jpeg';
import Logos from './Logos';

const About = () => {
  const navigate = useNavigate();

  const portfolioButtonHandler = () => {
    navigate('/new-portfolio/portfolio');
  };

  return (
    <div id='about' className={classes.about}>
      <Container>
        <h3>About Me</h3>
        <div className={classes['about-content']}>
          <div className='flex col'>
            <img src={headshot} alt='headshot' width='250px' />
            <button onClick={portfolioButtonHandler} className={classes.btn}>
              See My Work
            </button>
          </div>
          <div className='flex col'>
            <div className={classes['about__text-container']}>
              <p>
                Hello and welcome to my website! I'm Matthew Bronstein, a Junior Full Stack Developer with a unique background in music and software development. With over two
                years of experience as a developer, I have led and developed multiple front-end and full-stack projects, fueling my passion for creating user-friendly applications,
                pushing boundaries, and continuously expanding my knowledge. Drawing from my extensive training as a professional classical musician, I have been able to leverage
                many transferable skills, including pattern-matching, adaptability, performing under pressure, and regularly assessing output. As one of only 0.3% of the US
                population to attain the rank of Eagle Scout, I consistently uphold principles of leadership, determination, and integrity in my daily endeavors. Let's connect and
                discuss how I can contribute to your team!
              </p>
            </div>
            <Logos />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
