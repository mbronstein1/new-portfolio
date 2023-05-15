import React from 'react';
import classes from './Navbar.module.css';
import { scrollWithOffset } from '../../utils/helpers';
import { HashLink } from 'react-router-hash-link';
import { Sling as Hamburger } from 'hamburger-react';

const NAV_ITEMS = ['About', 'Portfolio', 'Contact'];

const Navbar = ({ isNavBarTop, isMobile, isOpen, setIsOpen }) => {
  return (
    <nav className={`${classes.navbar} ${isNavBarTop}`}>
      {
        <HashLink to='/#top' smooth scroll={scrollWithOffset} style={{ transform: isOpen ? 'translateX(-100px)' : 'translateX(0px)', transition: '.5s all ease-in-out' }}>
          <h1>Matthew Bronstein</h1>
        </HashLink>
      }
      {isMobile ? (
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      ) : (
        <ul className={classes['nav-list']}>
          {NAV_ITEMS.map(item => (
            <li key={item}>
              <HashLink to={item === 'Portfolio' ? '/portfolio' : `/#${item.toLowerCase()}`} smooth scroll={scrollWithOffset}>
                {item}
              </HashLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
