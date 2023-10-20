import React from 'react';
import './home.css';

function Home() {
  const navigateToAbout = () => {
    window.location.href = '/about';
  };

  return (
    
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
  
  );
}

export default Home;