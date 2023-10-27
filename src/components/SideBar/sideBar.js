import React, { useState } from 'react';
import './sideBar.css';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../context/userContext'; 

const Sidebar = () => {
  // Access the `logoutUser` function from the user context
  const { logoutUser } = useUserContext();

  // State to track the active navigation item
  const [activeItem, setActiveItem] = useState(null);

  // Function to handle the click event on navigation items
  const handleNavItemClick = (route) => {
    setActiveItem(route);
  };
  
  return (
    <div className="sidebar">
        <Link 
          to="/login/profile" 
          className={`sidenav-item ${activeItem === '/login/profile' ? 'active' : ''}`}
          onClick={() => handleNavItemClick('/login/profile')}
        >
          Profile
        </Link>

        <Link 
          to="/login/map" 
          className={`sidenav-item ${activeItem === '/login/map' ? 'active' : ''}`}
          onClick={() => handleNavItemClick('/login/map')}
        >
          Map
        </Link>

        <Link 
          to="/login/news-feed"  
          className={`sidenav-item ${activeItem === '/login/news-feed' ? 'active' : ''}`}
          onClick={() => handleNavItemClick('/login/news-feed')}
        >
          News Feed
        </Link>

        <Link 
          to="/login/weather" 
          className={`sidenav-item ${activeItem === '/login/weather' ? 'active' : ''}`}
          onClick={() => handleNavItemClick('/login/weather')}
        >
          Weather
        </Link>

        <Link 
          to="/login/tools" 
          className={`sidenav-item ${activeItem === '/login/tools' ? 'active' : ''}`}
          onClick={() => handleNavItemClick('/login/tools')}
        >
          Tools
        </Link>

        <button className='logoutBtn' onClick={() => logoutUser()}>Logout</button>
    </div>
  );
};

export default Sidebar;
