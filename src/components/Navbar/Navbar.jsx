import React from 'react';
import classes from './Navbar.module.css';
import { scrollWithOffset } from '../../utils/helpers';
import { HashLink } from 'react-router-hash-link';
import { Sling as Hamburger } from 'hamburger-react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { NAV_ITEMS } from './navItems';
import { resume } from '../../data/site-data';

const Navbar = ({ isTransparent, isMobile, isOpen, setIsOpen, theme, toggleTheme }) => {
  const themeToggle = (
    <button className={classes['theme-toggle']} onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
      {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  );

  return (
    <nav className={`${classes.navbar} ${isTransparent ? classes.transparent : ''}`}>
      <HashLink to='/#top' smooth scroll={scrollWithOffset} className={classes.logo} style={{ opacity: isOpen ? 0 : 1 }}>
        Matthew Bronstein<span>.</span>
      </HashLink>

      {isMobile ? (
        <div className={classes['mobile-controls']}>
          {themeToggle}
          <Hamburger toggled={isOpen} toggle={setIsOpen} size={22} label='Toggle menu' />
        </div>
      ) : (
        <ul className={classes['nav-list']}>
          {NAV_ITEMS.map(({ label, to }) => (
            <li key={label}>
              <HashLink to={to} smooth scroll={scrollWithOffset}>
                {label}
              </HashLink>
            </li>
          ))}
          <li>
            <a href={resume} target='_blank' rel='noreferrer' className={classes.resume}>
              Resume
            </a>
          </li>
          <li>{themeToggle}</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
