import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="navbaritem"> Home </Link>
      <Link to="/calculator" className="navbaritem"> Calculator </Link>
      <Link to="/quote" className="navbaritem"> Quote </Link>
    </div>
  );
}

export default Navbar;
