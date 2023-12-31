import React from 'react';
import './navBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Xplorer</h1>
      </div>
      <nav className="navbar">
        {/* Home link */}
        <Link to="/" className="nav-item">
          <i className="fas fa-home"></i>Home
        </Link>

        {/* About link */}
        <Link to="/about" className="nav-item">
          <i className="fas fa-cog"></i>About
        </Link>

        {/* Users link */}
        <Link to="/users" className="nav-item">
          <i className="fas fa-bell"></i>Users
        </Link>

        {/* Account link */}
        <Link to="/login" className="nav-item">
          <i className="fas fa-user"></i>Account
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
