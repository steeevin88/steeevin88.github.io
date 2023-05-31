import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-scroll';
import './About.css';
import me from '../Intro/me.jpg';

function About() {
    return (
        <div className='about-page' id='about'>
            <div className='about-table'>
                <div className='about-col'>
                    <div className='about-header'>
                        <b>Welcome! </b>
                    </div>
                    <p>Thanks for visiting! My name is Steven Le.
                    <br></br>
                    <br></br>
                    I'm currently studying computer science at San Jose State
                    University, pursuing a bachelor's of science.
                    <br></br>
                    <br></br>
                    I'm working towards building a career as a software engineer;
                    this website is intended to serve as a digitial portfolio, 
                    documenting my career growth.
                    </p>
                    <Link
                        className="navlink"
                        activeClass="active"
                        to="experience"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={800}
                        href=""
                    >
                        <Button
                            outline
                            id='about-btn'
                            style={{
                            width: '70%',
                            border: '5px solid black',
                            borderRadius: 10,
                            fontSize: '2vw',
                            fontFamily:'Arial'
                            }}
                        >
                        Experience →
                        </Button>
                    </Link>
                </div>
                <div className='about-col'>
                    <img id='me-image' src={me} alt='me'></img>
                </div>
            </div>
        </div>
    );
}

export default About;