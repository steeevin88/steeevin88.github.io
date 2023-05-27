import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavItem, NavLink, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './Navbar.css';
import logo from './logo.png';

function ProjectNavbar() {
  const [isMobile, setIsMobile] = useState(false); // track "mobile view"
  const [dropdownOpen, setDropdownOpen] = useState(false); // track dropdown state

  useEffect(() => {
    // Function to handle resizing of the window
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800); // Set isMobile state based on screen width
    };

    // Attach event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call handleResize initially to set the initial isMobile state
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); // toggle dropdown state
  };

  return (
    <Navbar expand="md" className="navbar">
      <div className="navbar-container">
        <div className="side-container">
          <img className="logo" src={logo} alt="logo" />
        </div>
        {isMobile ? (
          // Render dropdown menu on mobile view
          <div className="dropdown-container">
            <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
              <DropdownToggle caret>Menu</DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/about">About</DropdownItem>
                <DropdownItem href="/experience">Experience</DropdownItem>
                <DropdownItem href="/projects">Projects</DropdownItem>
                <DropdownItem href="/socials">Socials</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        ) : (
          // Render regular Navbar on larger screens
          <>
            <Nav className="navbar-nav" navbar>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/experience">Experience</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/projects">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/socials">Socials</NavLink>
              </NavItem>
            </Nav>
            <div className="side-container">
              <Button
                outline
                id="btn"
                href=""
                style={{
                  width: '100px',
                  border: '3px solid #2B1D14',
                  borderRadius: 8,
                  fontSize: '20px',
                }}
              >
                Resume
              </Button>
            </div>
          </>
        )}
      </div>
    </Navbar>
  );
}

export default ProjectNavbar;
