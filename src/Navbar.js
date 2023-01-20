import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <h1>Math Magicians</h1>
      <div className="navbaritems">
        <Link to="/" className="navbaritem"> Home </Link>
        <hr />
        <Link to="/calculator" className="navbaritem"> Calculator </Link>
        <hr />
        <Link to="/quote" className="navbaritem"> Quote </Link>
      </div>
    </div>
  );
}

export default Navbar;
