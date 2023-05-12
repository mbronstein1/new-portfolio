import React from 'react';
import { scrollWithOffset } from '../../utils/helpers';
import { HashLink } from 'react-router-hash-link';
import classes from './Drawer.module.css';

const navItems = ['About', 'Portfolio', 'Contact'];

const Drawer = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`${classes.drawer} ${isOpen ? classes.open : classes.closed}`}>
      <HashLink to='/#top' smooth scroll={scrollWithOffset} onClick={() => setIsOpen(false)}>
        <h1>Matthew Bronstein</h1>
      </HashLink>
      <hr />
      <ul>
        {navItems.map(item => (
          <li key={`${item}: drawer`}>
            <HashLink
              to={item === 'Portfolio' ? '/portfolio' : `/#${item.toLowerCase()}`}
              smooth
              scroll={scrollWithOffset}
              onClick={() => setIsOpen(false)}>
              {item}
            </HashLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Drawer;
