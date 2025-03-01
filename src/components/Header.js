import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';
import Nav from './Nav';

export default function Header() {
  return (
    <header className="header">
      <Link to="/" aria-label="Little lemon home page">
        <img className="logo" src={logo} alt="Little lemon logo" />
      </Link>
      <Nav />
    </header>
  );
}