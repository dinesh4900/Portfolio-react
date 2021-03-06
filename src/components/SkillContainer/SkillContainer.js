import React from 'react';
import { Element } from 'react-scroll';
//import skilling from '../../assets/images/skill.jpeg'
import './SkillContainer.css';
import LinearProgress from '@material-ui/core/LinearProgress';

const SkillContainer = () => {
    return (
        <Element className="skillContainer" id="skills">
            {/* <div className="skillContainer__image">
                <img src={skilling} alt="img"></img>
            </div> */}
            <div className="skillContainer__text">
                <h2>Skillsets</h2>

                <div className="skillContainer__skillset">
                    <h4>React JS</h4>
                    <div className="skillContainer__slider skillContainer__slider1">
                        <LinearProgress variant="determinate" value={60} />
                    </div>
                </div>

                <div className="skillContainer__skillset">
                    <h4>JAVASCRIPT</h4>
                    <div className="skillContainer__slider skillContainer__slider2">
                        <LinearProgress variant="determinate" value={70} />
                    </div>
                </div>
                
                <div className="skillContainer__skillset">
                    <h4>FIREBASE</h4>
                    <div className="skillContainer__slider skillContainer__slider3">
                        <LinearProgress variant="determinate" value={65} />
                    </div>
                </div>

                <div className="skillContainer__skillset">
                    <h4>MATERIAL UI</h4>
                    <div className="skillContainer__slider skillContainer__slider4">
                        <LinearProgress variant="determinate" value={80} />
                    </div>
                </div>

                <div className="skillContainer__skillset">
                    <h4>HTML5 & CSS3</h4>
                    <div className="skillContainer__slider skillContainer__slider5">
                        <LinearProgress variant="determinate" value={85} />
                    </div>
                </div>

                {/* <div className="skill__container">
                    <div className="skillContainer__image">
                        <img src={skilling} alt="img"></img>
                    </div>
                </div>

                <div className="skill__container">
                    <div className="skillContainer__image">
                        <img src={skilling} alt="img"></img>
                    </div>
                </div>
                
                <div className="skill__container">
                    <div className="skillContainer__image">
                        <img src={skilling} alt="img"></img>
                    </div>
                </div> */}



            </div>



        </Element>
    )
}

export default SkillContainer
