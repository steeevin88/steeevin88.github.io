import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';
import './Intro.css';

function Intro() {
  const [randomText, setRandomText] = useState('Working on projects!');

  useEffect(() => {
    const textOptions = [
        'Leetcoding',
        'Working on projects',
        'Practicing new interview techniques',
        'Learning new technologies',
        'Studying for my CS courses',
        'Debugging',
      ];

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * textOptions.length);
      setRandomText(textOptions[randomIndex]);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='intro-page' id='intro'>
      <Typewriter options={{ strings: ['Hey, I\'m Steven.'], autoStart: true, loop: true, pauseFor: 30000}}/>
      <p>CS Major @ SJSU + aspiring software engineer</p>
      <p>As of right now, I am probably...</p>
      <div className='random-text-container'>
        <p>{randomText}</p>
      </div>
      <p>Click the button below to learn more about me.</p>
      <Link activeClass="active" to="about" offset={-50} smooth={true}>
        <Button id='about-btn' style={{width: '100%', border: 'none', borderRadius: 10}}>
          About Me →
        </Button>
      </Link>
    </div>
  );
}

export default Intro;
