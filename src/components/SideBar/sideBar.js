import React from 'react';
import './sideBar.css';
import { Link } from 'react-router-dom';

const Sidebar = ({ onItemClick }) => {
  return (
    <div className="sidebar">
        <Link to="/profile/dashboard" className="sidebar-item" onClick={() => onItemClick('DashBoard')}>Profile</Link>
        <Link to="/profile/map" className="sidebar-item" onClick={() => onItemClick('Map')}>Map</Link>
        <Link to="/profile/news-feed" className="sidebar-item" onClick={() => onItemClick('Checklist')}>News Feed</Link>
        <Link to="/profile/weather" className="sidebar-item" onClick={() => onItemClick('Weather')}>Weather</Link>
        <Link to="/profile/tools" className="sidebar-item" onClick={() => onItemClick('Tools')}>Tools</Link>
        <button className='logoutBtn'>Logout</button>
    </div>
  );
};

export default Sidebar;
