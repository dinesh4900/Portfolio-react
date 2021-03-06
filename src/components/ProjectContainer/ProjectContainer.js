import React from 'react';
import {Element} from 'react-scroll';
// import Project from './Project/Project';
import './ProjectContainer.css';
import chatapp from '../../assets/images/chatapp.jpg'
import netflix from '../../assets/images/netflix.jpg'
import discord from '../../assets/images/Discord.jpeg'
import twitter from '../../assets/images/Twitter.jpeg'

const ProjectContainer = () => {

    return (
       <Element className="projectContainer" id="projects">
            <h1>Projects</h1>
            <div className="projectContainer__chatapp">
                <h3 className="projectContainer__desc1">Chat application using React JS</h3>
                <img src={chatapp} className="projectContainer__chatImg" alt="" />
            </div>

            <div className="projectContainer__netflix">
                <img src={netflix} className="projectContainer__netflixImg" alt="" />
                <h3 className="projectContainer__desc2">Netflix application using React js</h3>  
            </div>

            <div className="projectContainer__twitter">
                <h3 className="projectContainer__desc3">Twitter application using React JS</h3>
                <img src={twitter} className="projectContainer__twitterImg" alt="" />
            </div>

            <div className="projectContainer__discord">
                <img src={discord} className="projectContainer__discordImg" alt="" />
                <h3 className="projectContainer__desc4">Discord application using React JS</h3> 
            </div>


       </Element>
    )
}


export default ProjectContainer
    