import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
        <Link to="/" className="nav-item"><i className="fas fa-home"></i>Home</Link>
        <Link to="/about" className="nav-item"><i className="fas fa-cog"></i>About</Link> 
        <Link to="/notifications" className="nav-item"><i className="fas fa-bell"></i>Users</Link>
        <Link to="/profile" className="nav-item"><i className="fas fa-user"></i>
            Profile
        </Link>
    </nav>
  );
};

export default NavBar;