import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-scroll';
import './ProjectsHeader.css';

export default function ProjectHeader() {
  return (
    <div className='projects-header'>
      <div className='text-header'>
        <div className='upper-header'>
          <b>My Projects</b>
          <Link activeClass="active" to="socials" spy={true} smooth={true}
          offset={-60} duration={800} href="">
            <Button outline id='contacts-btn' style={{ width: '25vw', border: 'none',
            borderRadius: 10, fontSize: '1.5vw', fontFamily:'Arial' }}>
              Contact Me →
            </Button>
          </Link>
        </div>
        
      </div>
    </div>
  );
}