import React, { useState } from 'react';
import { CardImg } from 'reactstrap';
import './ExperienceCard.css';

function ExperienceCard({ photo, title, dates, description, skills }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const flip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="experience-card" onClick={flip}>
      <div className={`front ${isFlipped ? 'flipped' : ''}`}>
        <CardImg className="experience-image" top src={photo} alt="Experience Photo" />
        <div className="card-content">
          <p className="title">{title}</p>
          <p className="subtitle">{dates}</p>
        </div>
      </div>
      <div className={`back ${isFlipped ? '' : 'flipped'}`}>
        <p className="description">{description}</p>
        <p className="skills">{skills}</p>
      </div>
    </div>
  );
}

export default ExperienceCard;