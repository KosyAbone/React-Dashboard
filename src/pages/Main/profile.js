import React, {useState} from 'react';
import Sidebar from '../../components/SideBar/sideBar';
import { Outlet } from 'react-router-dom';
import './profile.css';


const Profile = () => {

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  return (
    <div className='profile-container'>
        <Sidebar onItemClick={handleItemClick}/>
        <div className='content'>
          <div>
            <Outlet />
          </div>
        </div>
    </div>
  );
};

export default Profile;
