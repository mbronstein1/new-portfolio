import React, { useEffect, useState } from 'react';
import classes from './Navbar.module.css';
import { Link } from 'react-scroll';

const NAV_ITEMS = ['About', 'Portfolio', 'Contact'];

const Navbar = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    window.onscroll = () => (window.pageYOffset === 0 ? setIsAtTop(true) : setIsAtTop(false));

    return () => (window.onscroll = null);
  });

  return (
    <nav className={`${classes.navbar} ${!isAtTop && classes['navbar-scroll']}`}>
      <h1>MbronsteinWebDev</h1>
      <ul className={classes['nav-list']}>
        {NAV_ITEMS.map(item => (
          <li key={item}>
            <Link to={item.toLowerCase()} smooth={true} offset={-70} duration={500}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
