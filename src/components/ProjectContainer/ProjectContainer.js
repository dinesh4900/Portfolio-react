import React from 'react';
import {Element} from 'react-scroll';
import Project from './Project/Project';
import './ProjectContainer.css'

const ProjectContainer = () => {
    const projects=[
        {
            img: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80.jpg",
            title: "facebook",
            desc:  "hello world",
            link: "www.google.com"
        },
        {
            img: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80.jpg",
            title: "facebook",
            desc:  "hello world",
            link: "www.google.com"
        },   
        {
            img: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80.jpg",
            title: "facebook",
            desc:  "hello world",
            link: "www.google.com"
        },
        {
            img: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80.jpg",
            title: "facebook",
            desc:  "hello world",
            link: "www.google.com"
        },
        {
            img: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80.jpg",
            title: "facebook",
            desc:  "hello world",
            link: "www.google.com"
        },
        {
            img: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80.jpg",
            title: "facebook",
            desc:  "hello world",
            link: "www.google.com"
        },                       
    ]
    return (
       <Element className="projectContainer" id="projects">
           <h1> projects</h1>
           <p> here are some projects</p>

           <div className="projectContainer__projects">
               {
                   projects.map((project,index)=>{
                        return(
                           <Project 
                                key={index} 
                                img={project.img} 
                                title={project.title} 
                                desc={project.desc} 
                                link={project.link} 
                            />
                        );
                   })
                   
               }
           </div>
       </Element>
    )
}

export default ProjectContainer
