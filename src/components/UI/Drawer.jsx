import React from 'react';
import { scrollWithOffset } from '../../utils/helpers';
import { HashLink } from 'react-router-hash-link';
import classes from './Drawer.module.css';
import { NAV_ITEMS } from '../Navbar/navItems';
import { resume } from '../../data/site-data';

const Drawer = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`${classes.drawer} ${isOpen ? classes.open : classes.closed}`}>
      <HashLink to='/#top' smooth scroll={scrollWithOffset} onClick={() => setIsOpen(false)} className={classes.logo}>
        Matthew Bronstein<span>.</span>
      </HashLink>
      <ul>
        {NAV_ITEMS.map(({ label, to }) => (
          <li key={`${label}: drawer`}>
            <HashLink to={to} smooth scroll={scrollWithOffset} onClick={() => setIsOpen(false)}>
              {label}
            </HashLink>
          </li>
        ))}
        <li>
          <a href={resume} target='_blank' rel='noreferrer' onClick={() => setIsOpen(false)} className={classes.resume}>
            Resume ↗
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Drawer;
