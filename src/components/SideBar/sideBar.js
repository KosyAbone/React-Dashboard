import React from 'react';
import './sideBar.css';
import { Link } from 'react-router-dom';

const Sidebar = ({ onItemClick }) => {
  return (
    <div className="sidebar">
        <Link to="/" className="sidebar-item">Home</Link>
        <Link to="/profile/dashboard" className="sidebar-item" onClick={() => onItemClick('DashBoard')}>User Dashboard</Link>
        <Link to="/profile/map" className="sidebar-item" onClick={() => onItemClick('Map')}>Map</Link>
        <Link to="/profile/checklist" className="sidebar-item" onClick={() => onItemClick('Checklist')}>Checklist</Link>
        <Link to="/profile/news-feed" className="sidebar-item" onClick={() => onItemClick('NewsFeed')}>News Feed</Link>
    </div>
  );
};

export default Sidebar;
