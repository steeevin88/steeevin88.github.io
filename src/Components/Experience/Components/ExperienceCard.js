import React, { useState } from 'react';
import { Card, CardImg, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import './ExperienceCard.css';

function ExperienceCard({ photo, title, dates, description }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const flip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Card className="experience-card" onClick={flip}>
      <div className={`card-face front ${isFlipped ? 'flipped' : ''}`}>
        <CardImg className="experience-image" top src={photo} alt="Experience Photo" />
        <div className="card-content">
          <CardTitle className="title">{title}</CardTitle>
          <CardSubtitle className="subtitle">{dates}</CardSubtitle>
        </div>
      </div>
      <div className={`card-face back ${isFlipped ? '' : 'flipped'}`}>
        <CardText className="description">{description}</CardText>
      </div>
    </Card>
  );
}

export default ExperienceCard;
