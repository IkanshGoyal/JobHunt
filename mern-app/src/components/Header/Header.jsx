import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const nav_links = [
  {
    path: '/',
    display: 'Home',
  },
  {
    path: '/about',
    display: 'About',
  },
  {
    path: '/contact',
    display: 'Contact Us',
  },
];

const Header = ({ toggleTheme, theme }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="nav_wrapper">
          <div className="logo">
            <h1>JobHunt</h1>
          </div>
          <div className="navigation">
            <ul className="menu">
              {nav_links.map((item, index) => (
                <li className="menu__item" key={index}>
                  <Link to={item.path} className="menu__link">
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="light__mode" onClick={toggleTheme}>
            <span style={{ color: theme === 'light-theme' ? '#000' : 'rgba(255, 255, 255, 0.637)' }}>
              <i className={theme === 'light-theme' ? 'ri-moon-line' : 'ri-sun-line'}></i>{' '}
              {theme === 'light-theme' ? 'Dark Mode' : 'Light Mode'}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
