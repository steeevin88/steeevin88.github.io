import { Card, CardImg, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import './ProjectCard.css';

function ProjectCard({ photo, title, dates, description, repo }) {
  return (
    <Card>
      <a href={repo} target="_blank" rel="noopener noreferrer">
        <CardImg className='project-image' top width="95%" src={photo}
        alt="Project Photo" style={{ objectFit: 'fill' }}/>
      </a>
      <CardTitle>{title}</CardTitle>
      <CardSubtitle>{dates}</CardSubtitle>
      <CardText>{description}</CardText>
    </Card>
  );
}

export default ProjectCard;
