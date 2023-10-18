import './App.css';
import React from 'react'
import NavBar from './components/NavBar/navbar.js';
import Home from './pages/Main/home';
import Notifications from './pages/Main/notifications';
import About from './pages/Main/about';
import Profile from './pages/Main/profile';
import Map from './pages/SidePages/Map/map';
import Dashboard from './pages/SidePages/Dashboard/dashboard';
import Weather from './pages/SidePages/Weather/weather';
import NewsFeed from './pages/SidePages/NewsFeed/newsfeed';
import ToolsWidget from './pages/SidePages/ToolsWidget/toolsPage';
import SignIn from './pages/SignIn/signIn';
import SignUp from './pages/SignUp/signUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/notifications" element={<Notifications/>} />
          <Route path="/profile" element={<Profile/>}>
            <Route path="/profile/dashboard" element={<Dashboard/>} />
            <Route path="/profile/map" element={<Map/>} />
            <Route path="/profile/weather" element={<Weather/>} />
            <Route path="/profile/news-feed" element={<NewsFeed/>} />
            <Route path="/profile/tools" element={<ToolsWidget/>} />
          </Route>
          <Route path="/sign-in" element={<SignIn/>} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
    </Router>
  );
}

export default App;
