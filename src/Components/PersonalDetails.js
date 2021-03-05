import React , {Component} from 'react'
import './PersonalDetails.css'


class PersonalDetails extends Component{
    render(){
      const imgstyle = {
        width: "271.86px",
        height: "266.14px",
        borderRadius: "12px",
        border: "1px solid black"
      }
        return <div className='details'>  
                  <div className="img-container">
                  <img src="images/myImageicon.jpg" alt="my_image" style={imgstyle}/>
                  </div>
                  <div className="container-details">
                    <div className="heading1">Wasim Akhtar Khan<div className="work">Full Stack Developer</div></div>
                    <div className="contact">wasimkhan03150@gmail.com<br />www.linkedin.com/in/wasim-akhtar-khan/</div>
                    <div className="about">Self-motivated developer, who is willing to learn and create outstanding UI applications.<br /><br /> Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</div>
                  </div>
                  
        </div>
    }
}

export default PersonalDetails;