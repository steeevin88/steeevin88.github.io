import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-scroll';
import './Experience.css';
import ExperienceCard from './ExperienceCard/ExperienceCard';
    
function Experience() {
    const experiencesTable = [
        {
            photo: 'https://user-images.githubusercontent.com' +
            '/59713070/235859723-cdea1a8e-5698-40c2-9755-9ec2e40984cd.jpeg',
            title: 'Experience 1',
            dates: 'Jan 2020 - Dec 2020',
            description: 'Description of experience 1...',
          },
          {
            photo: '',
            title: 'Experience 2',
            dates: 'Jan 2021 - Dec 2021',
            description: 'Description of experience 2...',
          },
          {
            photo: '',
            title: 'Experience 3',
            dates: 'Jan 2021 - Dec 2021',
            description: 'Description of experience 3...',
          },
          {
            photo: '',
            title: 'Experience 4',
            dates: 'Jan 2021 - Dec 2021',
            description: 'Description of experience 4...',
          },
          {
            photo: '',
            title: 'Experience 5',
            dates: 'Jan 2021 - Dec 2021',
            description: 'Description of experience 5...',
          },
        ];

    const [currentExperience, setCurrentExperience] = useState(0);

    const handlePrevious = () => {
        if (currentExperience > 0) {
        setCurrentExperience(currentExperience - 1);
        }
    };

    const handleNext = () => {
        if (currentExperience < experiencesTable.length - 1) {
        setCurrentExperience(currentExperience + 1);
        }
    };

    const { photo, title, dates, description } = experiencesTable[currentExperience];

    return (
        <div className='experience-page' id='experience'>
            <div className='experience-table'>
                <div className='experience-header'><b>Experience</b></div>
                <div className='experience-row'>
                    <Button onClick={handlePrevious} disabled={currentExperience === 0}>
                        ←
                    </Button>
                    <div className='experience-card'>
                        <ExperienceCard photo={photo} title={title} dates={dates} description={description} />
                    </div>
                    <Button onClick={handleNext} disabled={currentExperience === experiencesTable.length - 1}>
                        →
                    </Button>
                </div> 
                <Button
                    outline
                    id='projects-btn'
                    style={{
                    width: '20vw',
                    border: '5px solid black',
                    borderRadius: 10,
                    fontSize: '2vw',
                    fontFamily:'Arial'
                    }}
                >
                    <Link
                        activeClass="active"
                        to="experience"
                        spy={true}
                        smooth={true}
                        duration={800}
                        href=""
                    > 
                    Projects →
                    </Link>
                </Button>
            </div>
        </div>
    );
}

export default Experience;