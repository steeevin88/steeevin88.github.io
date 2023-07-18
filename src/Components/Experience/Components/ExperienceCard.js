import React, { useState } from 'react';
import { CardImg } from 'reactstrap';
import ReactCardFlip from 'react-card-flip';
import './ExperienceCard.css';

function ExperienceCard({ photo, title, dates, description, skills }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const flip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className="experience-card" onClick={flip}>
        <CardImg className="experience-image" top src={photo} alt="Experience Photo" />
        <div className="card-content">
          <p className="title">{title}</p>
          <p className="subtitle">{dates}</p>
        </div>
      </div>
      <div className="experience-card" onClick={flip}>
        <p className="description">{description}</p>
        <p className="skills">{skills}</p>
      </div>
    </ReactCardFlip>
  );
}

export default ExperienceCard;
