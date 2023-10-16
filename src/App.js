import './App.css';
import React from 'react'
import NavBar from './components/NavBar/navbar.js';
import Home from './pages/Main/home';
import Notifications from './pages/Main/notifications';
import Settings from './pages/Main/settings';
import Profile from './pages/Main/profile';
import Map from './pages/SidePages/Map/map';
import Dashboard from './pages/SidePages/Dashboard/dashboard';
import Weather from './pages/SidePages/Weather/weather';
import NewsFeed from './pages/SidePages/NewsFeed/newsfeed';
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
          <Route path="/profile/dashboard" element={<Dashboard/>} />
          <Route path="/profile/map" element={<Map/>} />
          <Route path="/profile/checklist" element={<Weather/>} />
          <Route path="/profile/news-feed" element={<NewsFeed/>} />
        </Routes>
    </Router>
  );
}

export default App;
