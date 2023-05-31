import React from 'react';
import './HomePage.css';

import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="content-container">
        <Intro />
        <About />
        <Projects />
      </div>
    </div>
  );
}

export default HomePage;
