import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo.svg';  // Adjust the path if needed
import './Nav.css';  // Importing the CSS file for styling

export default function Nav() {
  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="Little Lemon Logo" />  {/* Adjust the style as needed */}
      </Link>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/booking">Reservations</Link></li>
        <li><Link to="/order">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}