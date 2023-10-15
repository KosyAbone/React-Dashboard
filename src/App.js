import './App.css';
import React from 'react'
import NavBar from './components/NavBar/navbar.js';
import Home from './pages/Main/home';
import Notifications from './pages/Main/notifications';
import Settings from './pages/Main/settings';
import Profile from './pages/Main/profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/notifications" element={<Notifications/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
    </Router>
  );
}

export default App;
