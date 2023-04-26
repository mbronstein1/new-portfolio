import React from 'react';
import classes from './Navbar.module.css';

const NAV_ITEMS = ['About', 'Portfolio', 'Contact'];

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <h1>Logo</h1>
      <ul className={classes['nav-list']}>
        {NAV_ITEMS.map(item => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
