import React from "react";
import "./Experience.css";
import ExperienceCard from "./Components/ExperienceCard";

function Experience() {
  const experienceData = [
    {
      photo:'https://github.com/steeevin88/steeevin88/assets/59713070/077d2dc3-0e0a-49a4-bd8c-444013b07738',
      title:'Instructional Student Assistant',
      dates:'May 2023',
      description:'alskdjfk;asjflaskfjlas'
    },
    {
      photo:'https://github.com/steeevin88/steeevin88/assets/59713070/077d2dc3-0e0a-49a4-bd8c-444013b07738',
      title:'Instructional Student Assistant',
      dates:'May 2023',
      description:'alskdjfk;asjflaskfjlas'
    },
    {
      photo:'https://github.com/steeevin88/steeevin88/assets/59713070/077d2dc3-0e0a-49a4-bd8c-444013b07738',
      title:'Instructional Student Assistant',
      dates:'May 2023',
      description:'alskdjfk;asjflaskfjlas'
    },
    {
      photo:'https://github.com/steeevin88/steeevin88/assets/59713070/077d2dc3-0e0a-49a4-bd8c-444013b07738',
      title:'Instructional Student Assistant',
      dates:'May 2023',
      description:'alskdjfk;asjflaskfjlas'
    },
    {
      photo:'https://github.com/steeevin88/steeevin88/assets/59713070/077d2dc3-0e0a-49a4-bd8c-444013b07738',
      title:'Instructional Student Assistant',
      dates:'May 2023',
      description:'alskdjfk;asjflaskfjlas'
    },
    {
      photo:'https://github.com/steeevin88/steeevin88/assets/59713070/077d2dc3-0e0a-49a4-bd8c-444013b07738',
      title:'Instructional Student Assistant',
      dates:'May 2023',
      description:'alskdjfk;asjflaskfjlas'
    },
    {
      photo:'https://github.com/steeevin88/steeevin88/assets/59713070/077d2dc3-0e0a-49a4-bd8c-444013b07738',
      title:'Instructional Student Assistant',
      dates:'May 2023',
      description:'alskdjfk;asjflaskfjlas'
    },
    {
      photo:'https://github.com/steeevin88/steeevin88/assets/59713070/077d2dc3-0e0a-49a4-bd8c-444013b07738',
      title:'Instructional Student Assistant',
      dates:'May 2023',
      description:'alskdjfk;asjflaskfjlas'
    },
  ];

  return (
    <div className="experience-page" id="experience">
      <div className="experience-header">
          <b>MY EXPERIENCES</b>
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
