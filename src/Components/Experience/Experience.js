import React from "react";
import { Button } from 'reactstrap';
import { Link } from 'react-scroll';
import ExperienceCard from "./Components/ExperienceCard";
import "./Experience.css";

function Experience() {
  const experienceData = [
    {
      photo:'https://github.com/steeevin88/steeevin88/assets/59713070/077d2dc3-0e0a-49a4-bd8c-444013b07738',
      title:'Grader - CS46A at SJSU',
      dates:'Fall 2024 (Upcoming)',
      description:
        <>
          - Grader for SJSU's Introduction to Programming course (CS46A)
        </>
    },
    {
      photo:'https://github.com/steeevin88/steeevin88/assets/59713070/c99b42e3-9718-43a0-8915-9c840dfe36f4',
      title:'SCE Dev Team Officer',
      dates:'March 2023 - present',
      description:
        <>
          - Created and designed Projects page UI for club website
        </>
    },
    {
      photo:'https://github.com/steeevin88/steeevin88/assets/59713070/077d2dc3-0e0a-49a4-bd8c-444013b07738',
      title:'Instructional Student Assistant',
      dates:'March 2023 - May 2023',
      description:
        <>
          - Classroom assistant for SJSU's Introduction to Programming course (CS46A)
        </>
    },
    {
      photo:'https://github.com/steeevin88/steeevin88/assets/59713070/bbc5c054-efe4-41f1-b96a-a84da7397e77',
      title:'Google CSSI Participant',
      dates:'June 2022 - August 2022',
      description:
        <>
          - Participated in a 4-week intensive computer science summer program led by Google engineers
          - Delivered a collaborative final project presentation live to Google employees and community leaders
        </>
    },
  ];

  return (
    <div className="experience-page" id="experience">
      <div className="experience-header">
          <div className="experience-htext"><p>EXPERIENCE - <b>Opportunities I've been apart of.</b></p></div>
          <Link activeClass="active" to="projects" spy={true} smooth={true}
          offset={-60} duration={800} href="">
            <Button outline id='projects-btn' style={{ width: '15vw', border: 'none',
            borderRadius: 10, fontSize: '1.5vw', fontFamily:'Arial' }}>
              View My Projects →
            </Button>
          </Link>
      </div>
      <div className='experience-table'>
      {experienceData.map((experience, index) => {
        return (
          <div className="experience-container" key={index}>
            <ExperienceCard {...experience} />
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default Experience;
