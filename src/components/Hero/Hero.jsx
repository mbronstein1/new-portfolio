import React from 'react';
import { Link } from 'react-router-dom';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';
import Container from '../UI/Container';
import { resume, socials } from '../../data/site-data';
import classes from './Hero.module.css';

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Full Stack Engineer', 'Web Developer', 'Technical Lead', 'Collaborator', 'Eagle Scout', ''],
    loop: false,
  });

  return (
    <header className={classes.hero} id='top'>
      <div className={classes.backdrop} aria-hidden='true' />
      <Container>
        <div className={classes.content}>
          <p className='eyebrow'>Full stack engineer &amp; technical lead</p>
          <h1>Matthew Bronstein</h1>
          <h2>
            <span className={classes.typewriter}>{text}</span>
            <Cursor cursorColor='var(--accent)' />
          </h2>
          <p className={classes.summary}>
            I build web platforms end to end, from React interfaces and TypeScript services to the databases, CI/CD, and infrastructure that ship them. These days I also
            lead a development team. Former professional French horn player.
          </p>
          <div className={classes.actions}>
            <Link to='/portfolio' className='btn btn-primary'>
              See my work <FiArrowRight />
            </Link>
            <a href={resume} target='_blank' rel='noreferrer' className='btn btn-ghost'>
              View resume
            </a>
          </div>
          <div className={classes.meta}>
            <span>
              <FiMapPin /> Chicago, IL
            </span>
            <a href={socials.github} target='_blank' rel='noreferrer' aria-label='GitHub'>
              <FiGithub />
            </a>
            <a href={socials.linkedin} target='_blank' rel='noreferrer' aria-label='LinkedIn'>
              <FiLinkedin />
            </a>
            <a href={`mailto:${socials.email}`} aria-label='Email'>
              <FiMail />
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Hero;
