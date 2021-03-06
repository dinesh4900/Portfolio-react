import React from 'react';
import {Link} from 'react-scroll';
import './TopContent.css';
import Typewriter from 'typewriter-effect';

const TopContent = () => {
    return (
        <div className="topContent">
            <div className="topContent__Container">
                {/* <h1><span> </span> M Dinesh<span> </span></h1> */}

                {/* <h1><span>  M Dinesh </span></h1> */}

                <h1><span>  
                            <Typewriter
                                onInit={(typewriter) => {
                                typewriter.typeString('M Dinesh')
                                .callFunction(() => {
                                console.log('String typed out!');
                             })
                                    .pauseFor(3)
                                    
                                    .callFunction(() => {
                                        console.log('All strings were deleted');
                                    })
                                    .start();
                                }}
                            />
                    
                    
                     </span></h1>
                <p>Web Developer</p>
                {/* <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString('Hello World!')
                        .callFunction(() => {
                            console.log('String typed out!');
                        })
                        .pauseFor(2500)
                        .deleteAll()
                        .callFunction(() => {
                            console.log('All strings were deleted');
                        })
                        .start();
                    }}
                /> */}

                
                <a href="https://drive.google.com/file/d/1BU5Q-bwg1CLGpPq93jMpq2svyshCUbjd/view"  >
                    <button className="topContent__downloadbtn">Download Resume</button>
                </a>
                <Link to="projects" smooth={true} duration={500}>
                    <button className="topContent__myworkbtn">My Work</button>
                </Link>
            </div>
        </div>
    )
}

export default TopContent;