import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import './Intro.css';
import me from './me.jpg';

function Intro() {
  const [randomText, setRandomText] = useState('Leetcoding away!');

  useEffect(() => {
    const textOptions = [
        'Leetcoding away!',
        'Building awesome projects!',
        'Learning new technologies!',
        'Exploring the world of software engineering!',
      ];

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * textOptions.length);
      setRandomText(textOptions[randomIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='intro-table'>
      <div className='intro-col'>
        <b>Hey! It's Steven.</b>
        <p>As of right now, I am probably...</p>
        <div className='random-text-container'>
          <p className='random-text'>{randomText}</p>
        </div>
        <Button
          outline
          id='intro-btn'
          style={{
            width: '70%',
            border: '5px solid black',
            borderRadius: 10,
            fontSize: '2vw',
            fontFamily:'Calibri'
          }}
        >
        <a href='/about'>About Me →</a>
        </Button>
      </div>
      <div className='intro-col'>
        <img id='me-image' src={me} alt='me'></img>
      </div>
    </div>
  );
}

export default Intro;
