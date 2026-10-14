import React from 'react';
import classes from './About.module.css';
import Container from '../UI/Container';
import Reveal from '../UI/Reveal';
import headshot from '../../assets/headshot.jpeg';

const About = () => {
  return (
    <section id='about' className='section'>
      <Container>
        <Reveal>
          <p className='eyebrow'>01 / About</p>
          <h2 className='section-title'>Full stack engineer, technical lead</h2>
        </Reveal>
        <div className={classes['about-content']}>
          <Reveal className={classes.photo}>
            <img src={headshot} alt='Matthew Bronstein' />
          </Reveal>
          <Reveal className={classes.text} delay={100}>
            <p>
              Hi, I'm Matthew. I'm a full stack engineer with 3+ years of experience building and running a production web platform. I started as a React developer and
              grew into owning the platform's architecture and leading a team of eight developers.
            </p>
            <p>
              My work spans the whole stack: real-time React interfaces, TypeScript services, Postgres schema design and migrations, Docker-based CI/CD, and the networking
              and server setup needed to run software on-prem. I'm just as comfortable planning a feature with stakeholders as I am debugging it in production.
            </p>
            <p>I like owning problems end to end, from the first conversation about what's needed to the deploy that makes someone's day easier.</p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default About;
