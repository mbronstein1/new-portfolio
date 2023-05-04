import React from 'react';
import classes from './Footer.module.css';
import { GrFacebook, GrLinkedin, GrGithub } from 'react-icons/gr';

const socials = [
  {
    component: GrLinkedin,
    style: {
      color: 'rgb(3,112,174)',
    },
    link: 'https://www.linkedin.com/in/matthew-bronstein-a9230462/',
  },
  {
    component: GrGithub,
    style: {
      color: 'rgb(0,0,0)',
      borderRadius: 100,
    },
    link: 'https://github.com/mbronstein1',
  },
  {
    component: GrFacebook,
    style: {
      color: 'rgb(1,53,187)',
    },
    link: 'https://www.facebook.com/bronstein007',
  },
];

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div>
        <ul className={classes.socials}>
          {socials.map(({ component: Component, style, link }) => (
            <li key={link}>
              <a href={link}>
                <Component size={25} style={{ ...style, backgroundColor: 'white' }} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>|</div>
      <div>
        <a className={classes.email} href='mailto:mbronstein1@gmail.com'>
          mbronstein1@gmail.com
        </a>
      </div>
      <div>|</div>
      <div>
        <p>MbronsteinWebDev</p>
      </div>
    </div>
  );
};

export default Footer;
