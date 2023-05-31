import React from 'react';
import './ProjectsHeader.css';
import { Button } from 'reactstrap';
import { Link } from 'react-scroll';

export default function ProjectHeader() {
  return (
    <div className='projects-header'>
      <div className='text-header'>
        <div className='upper-header'>
          <b>My Projects</b>
          <Link activeClass="active" to="about" spy={true} smooth={true}
          offset={-70} duration={800} href="">
            <Button outline id='contacts-btn' style={{ width: '15vw', border: '3px solid black',
            borderRadius: 10, fontSize: '1.5vw', fontFamily:'Arial' }}>
              Contact Me →
            </Button>
          </Link>
        </div>
        <hr />
      </div>
    </div>
  );
}