import React, { useState } from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-scroll';
import './CustomDDM.css';

import dropdown from './dropdown.png';

function CustomDDM() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
      <DropdownToggle caret>
        <img src={dropdown} alt='Menu' id="menu-icon"></img>
      </DropdownToggle>
      {dropdownOpen && (
        <DropdownMenu>
          <DropdownItem>
            <Link className="navlink" activeClass="active" to="about" 
            spy={true} smooth={true} offset={-70} duration={800} href="">
              About 🙋‍♂️
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link className="navlink" activeClass="active" to="experience" 
            spy={true} smooth={true} offset={-70} duration={800} href="">
              Experience
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link className="navlink" activeClass="active" to="projects" 
            spy={true} smooth={true} offset={-70} duration={800} href="">
              Projects 🛠️
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link className="navlink" activeClass="active" to="contacts" 
            spy={true} smooth={true} offset={-70} duration={800} href="">
              Contact 📞
            </Link>
          </DropdownItem>
          <DropdownItem>
            <a href='https://drive.google.com/file/d/1fS1tur2jLJAuUhM1rJDuV8TeyMBq-hlY/view?usp=sharing'
            target='_blank' rel="noopener noreferrer">
              Resume 📝
            </a>
          </DropdownItem>
      </DropdownMenu>
      )}
    </Dropdown>
  );
}

export default CustomDDM;