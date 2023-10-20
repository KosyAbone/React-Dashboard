import React from 'react';
import './about.css';

function About() {
  return (
    <div className="about">
      <div className="student">
        <h3>Kosisochukwu</h3>
        <p>Kosisochukwu played a pivotal role in the development of our project, focusing on the implementation of the Login and Logout pages. They also took charge of ensuring secure user authentication through Firebase, allowing our application to maintain user data and provide secure access. Kosisochukwu's contributions extended to the seamless navigation between various pages, making the user experience more efficient and intuitive.</p>
      </div>

      <div className="student">
        <h3>Abhijit</h3>
        <p>Abhijit made significant contributions to our project, particularly in enhancing the Home and About pages. Their work involved fetching user data from Firebase, enabling us to access and utilize valuable information. Notably, Abhijit was responsible for the development of the Profile page, where user details are displayed in an organized and user-friendly manner. Furthermore, Abhijit's role in reporting each team member's contributions and responsibilities was vital in maintaining transparency and project management.</p>
      </div>
      
      <div className="student">
        <h3>Ilham</h3>
        <p>Ilham's contributions to the project are evident in the remarkable features they implemented. Ilham primarily focused on the development of the NewsFeed, which provides users with up-to-date information and content. Additionally, their work extended to creating an interactive map feature, integrating weather data, and implementing custom tools within the side navigation. Ilham's dedication to these features greatly enhanced the functionality and user experience of our application.</p>
      </div>
    </div>
  );
}

export default About;