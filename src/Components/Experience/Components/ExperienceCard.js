import { Card, CardImg, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import './ExperienceCard.css';

function ExperienceCard({ photo, title, dates, description }) {
  return (
    <Card className="experience-card">
      <CardImg className="experience-image" top width="100%" src={photo} alt="Experience Photo" />
      <div className="card-content">
        <CardTitle tag="h3" className="title">{title}</CardTitle>
        <CardSubtitle tag="h4" className="subtitle">{dates}</CardSubtitle>
        <CardText className="description">{description}</CardText>
      </div>
    </Card>
  );
}

export default ExperienceCard;
