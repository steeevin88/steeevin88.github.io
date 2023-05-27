import React from 'react';
import { Navbar, Nav, NavItem, NavLink, Button } from 'reactstrap';
import './Navbar.css';
import logo from './logo.png';

function ProjectNavbar() {
  return (
    <Navbar expand="md" className="navbar">
      <div className="navbar-container">
        <div className="side-container">
          <img className="logo" src={logo} alt="logo"/>
        </div>
        <div>
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
        </div>
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
      </div>
    </Navbar>
  );
}

export default ProjectNavbar;
