import React from 'react';
import './HomePage.css';

import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="content-container">
        <Intro />
        <About />
        <Experience />
      </div>
    </div>
  );
}

export default HomePage;
