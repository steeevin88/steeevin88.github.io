import { Card, CardImg, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import './ExperienceCard.css';

function ExperienceCard({ photo, title, dates, description }) {
  return (
    <Card>
      <CardImg
        top
        width="100%"
        src={photo}
        alt="Experience Photo"
        style={{ objectFit: 'cover', height: '200px' }}
      />
      <CardTitle>{title}</CardTitle>
      <CardSubtitle>{dates}</CardSubtitle>
      <CardText>{description}</CardText>
    </Card>
  );
}

export default ExperienceCard;
