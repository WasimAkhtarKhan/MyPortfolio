import React , {Component} from 'react'
import './Skills.css'

class Skills extends Component{
    render(){
        return <div>
            <div className="skills-container">
                <div className="skills-heading">Skills</div>
                <div className="skills-box">

                <div className="skill-text">HTML
                <div className="skills-bar html"></div>     
                </div>

                <div className="skill-text">CSS
                <div className="skills-bar css"></div>
                </div>

                <div className="skill-text">Javascript
                <div className="skills-bar js"></div>
                </div>
                
                <div className="skill-text">PHP
                <div className="skills-bar php"></div>
                </div>
                
                
                </div>
            </div>
        </div>
    }
}
export default Skills;