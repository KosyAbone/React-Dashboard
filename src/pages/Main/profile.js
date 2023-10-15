import React, { useState } from 'react';
import Sidebar from '../../components/SideBar/sideBar';


const Profile = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div>
        <Sidebar />
        {/* {showSidebar && <Sidebar />} */}
    </div>
  );
};

export default Profile;
