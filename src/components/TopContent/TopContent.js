import React from 'react';
import {Link} from 'react-scroll';
import './TopContent.css'

const TopContent = () => {
    return (
        <div className="topContent">
            <div className="topContent__Container">
                <h1>M Dinesh</h1>
                <p>Web Developer</p>
                <a href="https://www.npmjs.com/package/@material-ui/icons"  >
                    <button className="topContent__downloadbtn">Download CV</button>
                </a>
                <Link to="projects" smooth={true} duration={500}>
                    <button className="topContent__myworkbtn">My Work</button>
                </Link>
            </div>
        </div>
    )
}

export default TopContent;