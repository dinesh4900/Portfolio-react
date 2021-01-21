import React from 'react';
import { Element } from 'react-scroll';
import skilling from '../../assets/images/skill.jpeg'
import './SkillContainer.css'
import LinearProgress from '@material-ui/core/LinearProgress'

const SkillContainer = () => {
    return (
        <Element className="skillContainer" id="skills">
            <div className="skillContainer__image">
                <img src={skilling} alt="img"></img>
            </div>
            <div className="skillContainer__text">
                <h2>skillsets</h2>

                <div className="skillContainer__skillset">
                    <h4>React</h4>
                    <div className="skillContainer__slider skillContainer__slider1">
                        <LinearProgress variant="determinate" value={90} />
                    </div>
                </div>

                <div className="skillContainer__skillset">
                    <h4>Node js</h4>
                    <div className="skillContainer__slider skillContainer__slider2">
                        <LinearProgress variant="determinate" value={75} />
                    </div>

                </div><div className="skillContainer__skillset">
                    <h4>Docker</h4>
                    <div className="skillContainer__slider skillContainer__slider3">
                        <LinearProgress variant="determinate" value={80} />
                    </div>
                </div>

                <div className="skillContainer__skillset">
                    <h4>MONGO DB</h4>
                    <div className="skillContainer__slider skillContainer__slider4">
                        <LinearProgress variant="determinate" value={85} />
                    </div>
                </div>

                <div className="skillContainer__skillset">
                    <h4>GraphQL</h4>
                    <div className="skillContainer__slider skillContainer__slider5">
                        <LinearProgress variant="determinate" value={50} />
                    </div>
                </div>



            </div>
        </Element>
    )
}

export default SkillContainer
