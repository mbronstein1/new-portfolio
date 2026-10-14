import React from 'react';
import classes from './Footer.module.css';
import Container from '../UI/Container';
import { GrLinkedin, GrGithub } from 'react-icons/gr';
import { socials } from '../../data/site-data';

const links = [
  { component: GrLinkedin, link: socials.linkedin, label: 'LinkedIn' },
  { component: GrGithub, link: socials.github, label: 'GitHub' },
];

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Container>
        <div className={classes.content}>
          <p>© {new Date().getFullYear()} Matthew Bronstein</p>
          <ul className={classes.socials}>
            {links.map(({ component: Component, link, label }) => (
              <li key={link}>
                <a href={link} target='_blank' rel='noreferrer' aria-label={label}>
                  <Component size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
