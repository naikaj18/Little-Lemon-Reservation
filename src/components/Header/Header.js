import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo.svg';
import './Header.css';  // Importing CSS for styling

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="text-content">
          <h1>Little Lemon</h1>
          <p>Your neighborhood restaurant</p>
          <Link to="/booking" className="reserve-button">Reserve a Table</Link>
        </div>
        <img src={logo} alt="Little Lemon Logo" className='logo'/>
      </div>
    </header>
  );
}

export default Header;
