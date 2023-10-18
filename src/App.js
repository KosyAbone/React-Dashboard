import './App.css';
import React from 'react'
import NavBar from './components/NavBar/navBar'
import Home from './pages/Main/home';
import Notifications from './pages/Main/notifications';
import Settings from './pages/Main/settings';
import Map from './pages/SidePages/Map/map';
import Dashboard from './pages/SidePages/Dashboard/dashboard';
import Weather from './pages/SidePages/Weather/weather';
import NewsFeed from './pages/SidePages/NewsFeed/newsfeed';
import ToolsWidget from './pages/SidePages/ToolsWidget/toolsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/Main/profile';


const App = () => {
  return (
    <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/notifications" element={<Notifications/>} />
          <Route path="/login" element={<Profile/>}>
            <Route path="/login/dashboard" element={<Dashboard/>} />
            <Route path="/login/map" element={<Map/>} />
            <Route path="/login/weather" element={<Weather/>} />
            <Route path="/login/news-feed" element={<NewsFeed/>} />
            <Route path="/login/tools" element={<ToolsWidget/>} />
          </Route>
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
    </Router>
  );
}

export default App;
