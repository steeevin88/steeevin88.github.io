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
                    <Button outline id='intro-btn' style={{ width: '70%', 
                    border: 'none', borderRadius: 10, fontSize: '2vw',
                    fontFamily:'Arial' }}>
                        <Link className="navlink" activeClass="active" to="intro" 
                        spy={true} smooth={true} offset={-200} href="">
                        Back to Top →
                </Link>
                    </Button>
                </div>
                <div className='socials-col'>
                    <div className='socials-icons-container'>
                        <Button outline id='intro-btn' style={{ width: '70%', 
                        border: 'none', borderRadius: 10, fontSize: '2vw', backgroundColor: '#0077B5',
                        fontFamily:'Arial' }}>
                            <a href="https://www.linkedin.com/in/steven-le-90b28b23b/" 
                            target="_blank" rel="noopener noreferrer" >Linkedin</a>
                        </Button>
                        <Button outline id='intro-btn' style={{ width: '70%', 
                        border: 'none', borderRadius: 10, fontSize: '2vw', backgroundColor: '#6CC644',
                        fontFamily:'Arial' }}>
                            <a href="https://github.com/steeevin88" 
                            target="_blank" rel="noopener noreferrer" >Github</a>
                        </Button>
                        <Button outline id='intro-btn' style={{ width: '70%', 
                        border: 'none', borderRadius: 10, fontSize: '2vw', backgroundColor: '#A334FA',
                        fontFamily:'Arial' }}>
                            <a href="https://www.facebook.com/steven.le.58555/" 
                            target="_blank" rel="noopener noreferrer" >Messenger</a>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Socials;