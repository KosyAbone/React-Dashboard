import React from 'react';
import './home.css';

function Home() {
  const navigateToAbout = () => {
    window.location.href = '/about';
  };

  return (
    <div className="home">
      <div className="marquee-text">
        <h1>Assignment 2</h1>
      </div>
      <main>
        <div className="contributors">
          <div className="contributor" onClick={navigateToAbout}>
            <h2>Kosisochukwu's Contribution</h2>
          </div>
          <div className="contributor" onClick={navigateToAbout}>
            <h2>Abhijit's Contribution</h2>
          </div>
          <div className="contributor" onClick={navigateToAbout}>
            <h2>Ilham's Contribution</h2>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;