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
        <div className={classes['about-content']}>
          <div className='flex col'>
            <img src={headshot} alt='headshot' width='200px' />
            <button onClick={portfolioButtonHandler} className={classes.btn}>
              See My Work
            </button>
          </div>
          <div>
            <h3>About Me</h3>
            <p>
              This is the about section. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusantium doloribus provident sunt, quos inventore expedita
              necessitatibus libero eveniet quo qui iure eos optio eaque, dolor unde, dicta fugiat distinctio.
            </p>
            <Logos />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
