import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className="navbaritems">
        <Link to="/" className="navbaritem"> Books </Link>
        <Link to="/categories" className="navbaritem"> Categories </Link>
      </div>
    </>
  );
}

export default Navbar;
