import { Card, CardImg, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import './ProjectCard.css';

function ProjectCard({ photo, title, dates, description }) {
  return (
    <Card>
      <CardImg
        top
        width="100%"
        src={photo}
        alt="Project Photo"
        style={{ objectFit: 'fill' }}
      />
      <CardTitle>{title}</CardTitle>
      <CardSubtitle>{dates}</CardSubtitle>
      <CardText>{description}</CardText>
    </Card>
  );
}

export default ProjectCard;
