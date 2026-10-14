import React from 'react';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';
import classes from './Contact.module.css';
import Container from '../UI/Container';
import Reveal from '../UI/Reveal';
import ContactForm from './ContactForm';
import { socials } from '../../data/site-data';

const Contact = () => {
  return (
    <section className='section' id='contact'>
      <Container>
        <div className={classes.content}>
          <Reveal>
            <p className='eyebrow'>05 / Contact</p>
            <h2 className='section-title'>Let's talk</h2>
            <p className={classes.intro}>Whether it's a role, a project, or just a question about what I'm working on, I'd love to hear from you.</p>
            <ul className={classes.links}>
              <li>
                <a href={`mailto:${socials.email}`}>
                  <FiMail /> {socials.email}
                </a>
              </li>
              <li>
                <a href={socials.linkedin} target='_blank' rel='noreferrer'>
                  <FiLinkedin /> LinkedIn
                </a>
              </li>
              <li>
                <a href={socials.github} target='_blank' rel='noreferrer'>
                  <FiGithub /> GitHub
                </a>
              </li>
            </ul>
          </Reveal>
          <Reveal className='card' delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
