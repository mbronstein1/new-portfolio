import React from 'react';
import classes from './About.module.css';
import Container from '../UI/Container';
import headshot from '../../assets/headshot.jpeg';

const About = () => {
  return (
    <div id='about' className={classes.about}>
      <Container>
        <div className={classes['about-content']}>
          <div>
            <img src={headshot} alt='headshot' width='200px' />
          </div>
          <div>
            <h3>About Me</h3>
            <p>
              This is the about section. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusantium doloribus provident sunt, quos inventore expedita
              necessitatibus libero eveniet quo qui iure eos optio eaque, dolor unde, dicta fugiat distinctio.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
