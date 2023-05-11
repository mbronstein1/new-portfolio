import React from 'react';
import classes from './Navbar.module.css';
import { HashLink } from 'react-router-hash-link';
import { Sling as Hamburger } from 'hamburger-react';

const NAV_ITEMS = ['About', 'Portfolio', 'Contact'];

const scrollWithOffset = el => {
  const elId = el.getAttribute('id');
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = elId === 'contact' ? -40 : -74;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
};

const Navbar = ({ isNavBarTop, isMobile, isOpen, setIsOpen }) => {
  return (
    <nav className={`${classes.navbar} ${isNavBarTop}`}>
      <HashLink to='/new-portfolio#top' smooth scroll={scrollWithOffset}>
        <h1>Matthew Bronstein</h1>
      </HashLink>
      {isMobile ? (
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      ) : (
        <ul className={classes['nav-list']}>
          {NAV_ITEMS.map(item => (
            <li key={item}>
              <HashLink to={item === 'Portfolio' ? '/new-portfolio/portfolio' : `/new-portfolio/#${item.toLowerCase()}`} smooth scroll={scrollWithOffset}>
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
