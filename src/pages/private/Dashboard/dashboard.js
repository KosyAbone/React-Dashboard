import React, {useState} from 'react';
import Sidebar from '../../../components/SideBar/sideBar';
import { Outlet } from 'react-router-dom';
import './dashboard.css';


const Profile = () => {

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
