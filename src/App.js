import React from 'react'
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/public/Login/login';
import { UserContextProvider } from './context/userContext';
import NavBar from './components/NavBar/navBar'
import Home from './pages/public/Main/home';
import About from './pages/public/Main/about';
import UserList from './pages/public/Main/userList';
import Map from './pages/private/Map/map';
import Profile from './pages/private/Profile/profile';
import Weather from './pages/private/Weather/weather';
import NewsFeed from './pages/private/NewsFeed/news-feed';
import ToolsWidget from './pages/private/ToolsWidget/toolsPage';

const App = () => {
  return (
    <UserContextProvider>
      <Router>
        <NavBar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="about" element={<About/>} />
            <Route path="users" element={<UserList/>} />
            {/* <Route path="login" element={<Login/>}>
              <Route index element={<Profile />} />
              <Route path="profile" element={<Profile/>} />
              <Route path="map" element={<Map/>} />
              <Route path="weather" element={<Weather/>} />
              <Route path="news-feed" element={<NewsFeed/>} />
              <Route path="tools" element={<ToolsWidget/>} /> */}
            </Route>
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
      </Router>
      <ToastContainer />
    </UserContextProvider>
  );
}

export default App;
