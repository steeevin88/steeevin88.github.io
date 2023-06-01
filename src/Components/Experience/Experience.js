import React from "react";
import "./Experience.css";
import ExperienceCard from "./Components/ExperienceCard";

function Experience() {
  return (
    <div className="experience-page" id="experience">
        <div className='experience-table'> 
        <ExperienceCard
            frontContent={<div>Card 1 - Front</div>}
            backContent={<div>Card 1 - Back</div>}
        />
        <ExperienceCard
            frontContent={<div>Card 2 - Front</div>}
            backContent={<div>Card 2 - Back</div>}
        />
        <ExperienceCard
            frontContent={<div>Card 3 - Front</div>}
            backContent={<div>Card 3 - Back</div>}
        />
        </div>
    </div>
  );
}

export default Experience;
