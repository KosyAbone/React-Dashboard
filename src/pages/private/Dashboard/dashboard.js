import React from 'react';
import Sidebar from '../../../components/SideBar/sideBar';
import { Outlet } from 'react-router-dom';
import './dashboard.css';
import Profile from '../Profile/profile'


const Dashboard = () => {

  return (
    <div className='dashboard-container'>
        <Sidebar />
        <div className='content'>
          <div>
            <Outlet />
          </div>
        </div>
    </div>
  );
};

export default Dashboard;
