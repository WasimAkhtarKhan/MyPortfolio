import React , {Component} from 'react'
import './PersonalDetails.css'


class PersonalDetails extends Component{
    render(){
      const imgstyle = {
        width: "271.86px",
        height: "266.14px"
      }
        return <div className='details'>  
                  <div className="img-container">
                  <img src="images/myImage.jpg" alt="my_image" style={imgstyle}/>
                  </div>
                  <div className="container-details">
                    
                  </div>
        </div>
    }
}

export default PersonalDetails;