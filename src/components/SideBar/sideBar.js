import React from 'react';
import './sideBar.css';
import { Link } from 'react-router-dom';

const Sidebar = ({ onItemClick }) => {
  return (
    <div className="sidebar">
        <Link to="/login/dashboard" className="sidebar-item" onClick={() => onItemClick('DashBoard')}>Profile</Link>
        <Link to="/login/map" className="sidebar-item" onClick={() => onItemClick('Map')}>Map</Link>
        <Link to="/login/news-feed" className="sidebar-item" onClick={() => onItemClick('Checklist')}>News Feed</Link>
        <Link to="/login/weather" className="sidebar-item" onClick={() => onItemClick('Weather')}>Weather</Link>
        <Link to="/login/tools" className="sidebar-item" onClick={() => onItemClick('Tools')}>Tools</Link>
        <button className='logoutBtn'>Logout</button>
    </div>
  );
};

export default Sidebar;
