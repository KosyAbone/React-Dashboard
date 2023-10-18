import React from 'react';
import Sidebar from '../../components/SideBar/sideBar';
import { Outlet } from 'react-router-dom';
import './profile.css';


const Profile = () => {
  // const [showSidebar, setShowSidebar] = useState(false);

  // const toggleSidebar = () => {
  //   setShowSidebar(!showSidebar);
  // };

  return (
    <div className='profile-container'>
        <Sidebar />
        <div className='content'>
          <div>
            <Outlet />
          </div>
        </div>
    </div>
  );
};

export default Profile;
