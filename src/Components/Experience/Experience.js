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
          In the Fall of 2024, I'll be working as a student grader for 50% of the CS46A courses, 
          SJSU's Introduction to Programming course.
        </>
    },
    {
      photo:'https://github.com/steeevin88/steeevin88/assets/59713070/c99b42e3-9718-43a0-8915-9c840dfe36f4',
      title:'SCE Development Team Officer',
      dates:'March 2023 - Present',
      description:
        <>
          I'm currently working with members of the SJSU's Software and Computer Engineering Society to build projects,
          including a rework to the club websites frontend.
        </>,
      skills: 'Skills: HTML/CSS, React.js, Docker',
    },
    {
      photo:'https://github.com/steeevin88/steeevin88/assets/59713070/077d2dc3-0e0a-49a4-bd8c-444013b07738',
      title:'Instructional Student Assistant',
      dates:'March 2023 - May 2023',
      description:
        <>
          In Spring of 2023, I worked as a 1 on 1 instructional student assistant for CS46A, coordinating with professors
          and students to support the learning of fundamental programming concepts.
        </>,
      skills: 'Skills: Java, Eclipse IDE',
    },
    {
      photo:'https://github.com/steeevin88/steeevin88/assets/59713070/bbc5c054-efe4-41f1-b96a-a84da7397e77',
      title:'Google CSSI Participant',
      dates:'June 2022 - August 2022',
      description:
        <>
          I participated in Google's Computer Science Summer Institute in 2022. <br/><br/>Led by Google engineers, I
          learned new web development technologies, delivering a cumulative project presentation live to Google employees 
          and community leaders.
        </>,
        skills: 'Skills: HTML/CSS, Bulma (CSS Framework), Javascript',
    },
    {
      photo:'https://github.com/steeevin88/stevens-webpage/assets/59713070/adeac3f9-fdaa-4122-87d2-a00664b01c28',
      title:'NextFlex FlexFactor Finalist',
      dates:'December 2021',
      description:
        <>
          As a participant in NextFlex's FlexFactor program, my team devised blueprints for a mock product that
          received 2nd place at the Silicon competition, judged by a panel of NextFlex board members.
        </>,
    },
  ];

  return (
    <div className="experience-page" id="experience">
      <div className="experience-header">
          <div className="experience-htext">
            <p>EXPERIENCE - <b>Opportunities I've been apart of.</b></p>
            <div className="experience-subtext"><p>Scroll through or click on the icons to see more:</p></div>
          </div>
          <Link activeClass="active" to="projects" offset={-50} smooth={true}>
            <Button outline id='projects-btn' style={{width: '100%', border: 'none', borderRadius: 10}}>
              View Projects →
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
