import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-scroll';
import './Projects.css';
import ProjectHeader from './ProjectComponents/ProjectsHeader';
import ProjectCard from './ProjectComponents/ProjectCard';
    
function Projects() {
    const projectsTable = [
        {
            photo: 'https://user-images.githubusercontent.com' +
            '/59713070/235859723-cdea1a8e-5698-40c2-9755-9ec2e40984cd.jpeg',
            title: 'Instructional Student Assistant at SJSU',
            dates: 'Jan 2020 - Dec 2020',
            description: 'Description of projects 1...',
          },
          {
            photo: '',
            title: 'projects 2',
            dates: 'Jan 2021 - Dec 2021',
            description: 'Description of projects 2...',
          },
          {
            photo: '',
            title: 'projects 3',
            dates: 'Jan 2021 - Dec 2021',
            description: 'Description of projects 3...',
          },
          {
            photo: '',
            title: 'projects 4',
            dates: 'Jan 2021 - Dec 2021',
            description: 'Description of projects 4...',
          },
          {
            photo: '',
            title: 'projects 5',
            dates: 'Jan 2021 - Dec 2021',
            description: 'Description of projects 5...',
          },
        ];

    const [currentProject, setcurrentProject] = useState(0);

    const handlePrevious = () => {
        if (currentProject > 0) {
        setcurrentProject(currentProject - 1);
        }
    };

    const handleNext = () => {
        if (currentProject < projectsTable.length - 1) {
        setcurrentProject(currentProject + 1);
        }
    };

    const { photo, title, dates, description } = projectsTable[currentProject];

    return (
        <div className='projects-page' id='projects'>
            <ProjectHeader />
            <div className='projects-table'>
                <div className='projects-row'>
                    <Button onClick={handlePrevious} disabled={currentProject === 0}>
                        ←
                    </Button>
                    <div className='project-card'>
                        <ProjectCard photo={photo} title={title} dates={dates} description={description} />
                    </div>
                    <Button onClick={handleNext} disabled={currentProject === projectsTable.length - 1}>
                        →
                    </Button>
                </div> 
            </div>
        </div>
    );
}

export default Projects;