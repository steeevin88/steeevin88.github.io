import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavItem, NavLink, Button} from 'reactstrap';
import './Navbar.css';
import logo from './logo.png';
import CustomDDM from './DropdownMenu/CustomDDM';

function ProjectNavbar() {
  const [isMobile, setIsMobile] = useState(false); // track "mobile view"

  useEffect(() => {
    // Function to handle resizing of the window
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900); // Set isMobile state based on screen width
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

  return (
    <Navbar expand="md" className="navbar">
      <div className="navbar-container">
        <div className="side-container">
          <img className="logo" src={logo} alt="logo" />
        </div>
        {isMobile ? (
          // Render dropdown menu on mobile view
          <div className="dropdown-container">
            <CustomDDM />
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
              <Button outline id="btn" href=""
                style={{
                  width: '100%',
                  border: '10px solid #F5F5DC',
                  borderRadius: 10,
                  fontSize: '18px',
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
