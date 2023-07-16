import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-scroll';
import './Socials.css';

function Socials() {
    return (
        <div className='socials-page' id='socials'>
            <div className='socials-table'>
                <div className='socials-col'>
                    <div className='socials-header'>
                        <p>CONTACT ME</p>
                        <b>Let's connect.</b>
                    </div>
                    <p>
                    Click the buttons following buttons to access some of my profiles.
                    <br></br>
                    <br></br>
                    Otherwise, use the button below to go back 
                    to the top of my page. Thanks again for visiting!
                    </p>
                    <div className="center">
                        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-200} href="">
                            <Button outline id='intro-btn' style={{width: '70%', border: 'none', borderRadius: 10}}>
                                Back To Top →
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className='socials-col'>
                    <div className='socials-icons-container'>
                        <a href="https://www.linkedin.com/in/steven-le-90b28b23b/" 
                        target="_blank" rel="noopener noreferrer" >
                            <Button outline id='media-btn' style={{width: '100%', border: 'none', borderRadius: 10}}>
                                Linkedin
                            </Button>
                        </a>
                        <a href="https://github.com/steeevin88" 
                        target="_blank" rel="noopener noreferrer" >
                            <Button outline id='media-btn' style={{width: '100%', border: 'none', borderRadius: 10}}>
                                Github
                            </Button>
                        </a>
                        <a href="mailto:stevenleusa79@yahoo.com" 
                        target="_blank" rel="noopener noreferrer" >
                            <Button outline id='media-btn' style={{width: '100%', border: 'none', borderRadius: 10}}>
                                Email
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Socials;