import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import './Projects.css';

import ProjectHeader from './ProjectComponents/ProjectsHeader';
import ProjectCard from './ProjectComponents/ProjectCard';
import { handleResize } from '../../Utilities/WindowResize';
    
function Projects() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const cleanup = handleResize((newWidth) => {
        setWindowWidth(newWidth);
        });

        return cleanup;
    }, []);
      

    const projectsTable = [
        {
            photo: 'https://github.com/steeevin88/steeevin88/assets/59713070/6f37ad11-770c-4599-b0a4-9f5197fd1d22',
            title: 'Personal Portfolio / Webpage',
            dates: 'May 2023',
            description: 'Website created to showcase experiences and personal projects',
            repo: 'https://github.com/steeevin88/stevens-webpage'
          },
          {
            photo: 'https://github.com/steeevin88/steeevin88/assets/59713070/e22c5ddd-6788-45e3-afc4-d4cc71460dfe',
            title: 'NutriCount',
            dates: 'February 2023',
            description: 'Web application made as part of Santa Clara University\'s'
            + ' 10th Hack for Humanity Hackathon (2023)',
            repo: 'https://github.com/steeevin88/NutriCount'
          },
          {
            photo: 'https://github.com/steeevin88/steeevin88/assets/59713070/33a0982e-8709-44c4-abf4-083d13afce6f',
            title: 'Gym Ratz',
            dates: 'September 2022',
            description: 'Group project created for Google\'s CSSI (2022)',
            repo: 'https://github.com/steeevin88/CSSI-Final-Project'
          }
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

    const { photo, title, dates, description, repo} = projectsTable[currentProject];

    return (
        <div className='projects-page' id='projects'>
            <ProjectHeader />
            <div className='projects-table'>
                <div className='projects-row'>
                    {windowWidth > 900 && (
                    <Button id='projects-switcher' onClick={handlePrevious} disabled={currentProject === 0}>
                        ←
                    </Button>
                    )}
                    <div className='project-card'>
                        <ProjectCard photo={photo} title={title} dates={dates} description={description} repo={repo} />
                    </div>
                    {windowWidth < 900 && (
                    <Button id='projects-switcher' onClick={handlePrevious} disabled={currentProject === 0}>
                        ←
                    </Button>
                    )}
                    <Button id='projects-switcher' onClick={handleNext} disabled={currentProject === projectsTable.length - 1}>
                        →
                    </Button>
                </div> 
            </div>
        </div>
    );
}

export default Projects;