import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavItem, Button } from 'reactstrap';
import { Link } from 'react-scroll';
import './Navbar.css';

import logo from './logo.png';
import CustomDDM from './DropdownMenu/CustomDDM';
import { handleResize } from '../../Utilities/WindowResize';

function ProjectNavbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const cleanup = handleResize((newWidth) => {
      setWindowWidth(newWidth);
    });

    return cleanup;
  }, []);

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Navbar expand="md" className="navbar">
      <div className="navbar-container">
        <div className="side-container">
          <img className="logo" src={logo} alt="logo" onClick={toTop}/>
        </div>
        {windowWidth <= 900 ? (
          <div className="dropdown-container">
            <CustomDDM />
          </div>
        ) : (
          <>
            <Nav className="navbar-nav" navbar>
              <NavItem>
                <Link className="navlink" activeClass="active" to="about" 
                spy={true} smooth={true} offset={-50}>
                  About
                </Link>
              </NavItem>
              <NavItem>
                <Link className="navlink" activeClass="active" to="experience" 
                spy={true} smooth={true} offset={-50}>
                  Experience
                </Link>
              </NavItem>
              <NavItem>
                <Link className="navlink" activeClass="active" to="projects" 
                spy={true} smooth={true} offset={-50}>
                  Projects
                </Link>
              </NavItem>
              <NavItem>
                <Link className="navlink" activeClass="active" to="socials" 
                spy={true} smooth={true} offset={-50}>
                  Socials
                </Link>
              </NavItem>
            </Nav>
            <div className="side-container">
              <Button outline id="btn" href="https://drive.google.com/drive/folders/1OSHBOTT75md3qCo9_5yzw71_MD8Aku3I?usp=sharing" 
              target="_blank" rel="noopener noreferrer" 
              style={{ width: '100%', border: '10px solid #F5F5DC', borderRadius: 10, fontSize: '18px' }}>
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
