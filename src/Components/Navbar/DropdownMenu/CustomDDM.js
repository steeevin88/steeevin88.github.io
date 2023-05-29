import React, { useState } from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './CustomDDM.css';
import dropdown from './dropdown.png';

function CustomDDM() {
  const [dropdownOpen, setDropdownOpen] = useState(false); // track dropdown state

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); // toggle dropdown state
  };
  
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
      <DropdownToggle caret>
        <img src={dropdown} alt='Menu' id="menu-icon"></img>
      </DropdownToggle>
      {dropdownOpen && (
        <DropdownMenu>
          <DropdownItem><a href="/about">Home 🏠</a></DropdownItem>
          <DropdownItem>About 🙋‍♂️</DropdownItem>
          <DropdownItem>Experience </DropdownItem>
          <DropdownItem>Contact 📞</DropdownItem>
          <DropdownItem>Resume 📝</DropdownItem>
      </DropdownMenu>
      )}
    </Dropdown>
  );
}

export default CustomDDM;