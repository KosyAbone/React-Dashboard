import React from 'react';
import './sideBar.css';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../context/userContext'; 

const Sidebar = ({ onItemClick }) => {
  const { logoutUser } = useUserContext();
  return (
    <div className="sidebar">
        <Link to="/login/profile" className="sidebar-item">Profile</Link>
        <Link to="/login/map" className="sidebar-item" >Map</Link>
        <Link to="/login/news-feed" className="sidebar-item">News Feed</Link>
        <Link to="/login/weather" className="sidebar-item">Weather</Link>
        <Link to="/login/tools" className="sidebar-item">Tools</Link>
        <button className='logoutBtn' onClick={() => logoutUser()}>Logout</button>
    </div>
  );
};

export default Sidebar;
