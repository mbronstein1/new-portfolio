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
    <nav
      className={`${classes.navbar} ${
        isAtTop && location.pathname !== '/new-portfolio/portfolio' ? classes['nav-bar-top'] : location.pathname === '/new-portfolio/portfolio' && classes['nav-bar__portfolio']
      }`}>
      {location.pathname === '/new-portfolio/portfolio' ? (
        <Link to={'/new-portfolio'}>
          <h1>MbronsteinWebDev</h1>
        </Link>
      ) : (
        <HashLink to='/new-portfolio#top' smooth scroll={scrollWithOffset}>
          <h1>MbronsteinWebDev</h1>
        </HashLink>
      )}
      <ul className={classes['nav-list']}>
        {NAV_ITEMS.map(item => (
          <li key={item}>
            {item === 'Portfolio' ? (
              <Link to='/new-portfolio/portfolio'>{item}</Link>
            ) : (
              <HashLink to={`/new-portfolio/#${item.toLowerCase()}`} smooth scroll={scrollWithOffset}>
                {item}
              </HashLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
