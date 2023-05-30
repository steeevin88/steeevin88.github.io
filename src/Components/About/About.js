import React from 'react';
import './About.css';
import me from '../Intro/me.jpg';

function About() {
    return (
        <div className='about-page' id='about'>
            <div className='about-header'>
                <b>Welcome! </b>
            </div>
            <div className='about-table'>
                <div className='about-col'>
                    <p>Thanks for visiting! My name is Steven Le.
                    <br></br>
                    <br></br>
                    I'm currently pursuing a bachelor's degree in computer science at San Jose State University.
                    <br></br>
                    <br></br>
                    I'm working towards building a career as a software engineer; this website is intended to serve
                    as a digitial portfolio, documenting my career growth.
                    </p>
                </div>
                <div className='about-col'>
                    <img id='me-image' src={me} alt='me'></img>
                </div>
            </div>
        </div>
    );
}

export default About;