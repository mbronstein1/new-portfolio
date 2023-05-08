import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classes from './Navbar.module.css';
import { HashLink } from 'react-router-hash-link';

const NAV_ITEMS = ['About', 'Portfolio', 'Contact'];

const scrollWithOffset = el => {
  const elId = el.getAttribute('id');
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = elId === 'contact' ? -100 : -140;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
};

const Navbar = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const location = useLocation();

  // Handle navbar state based on the lcoation of the window
  useEffect(() => {
    window.onscroll = () => (window.pageYOffset === 0 ? setIsAtTop(true) : setIsAtTop(false));

    return () => (window.onscroll = null);
  });

  return (
    <nav className={`${classes.navbar} ${isAtTop && location.pathname !== '/portfolio' ? classes['nav-bar-top'] : classes['nav-bar__portfolio']}`}>
      {location.pathname === '/portfolio' ? (
        <Link to={'/'}>
          <h1>MbronsteinWebDev</h1>
        </Link>
      ) : (
        <Link to='#top'>
          <h1>MbronsteinWebDev</h1>
        </Link>
      )}
      <ul className={classes['nav-list']}>
        {NAV_ITEMS.map(item => (
          <li key={item}>{item === 'Portfolio' ? <Link to='/portfolio'>{item}</Link> : <Link to={`/#${item.toLowerCase()}`}>{item}</Link>}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
