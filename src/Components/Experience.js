import { render } from "@testing-library/react";
import React from "react";
import './Experience.css'

function Experience() {
    return(
            <div className="exp-container">
                <div className="heading-hob">Experience</div>
                <div className="expcon">
                    <div className="exps">
                        <div><img className="img-exp" src="images/myimage.jpg" /></div>
                        <div className="title-exp">Modelling</div>
                        <div className="exp-des">Part-Time Model at Ford Mustang</div>
                    </div>
                    <div className="exps">
                        <div><img className="img-exp" src="images/Jaguar.jpg" /></div>
                        <div className="title-exp">Web Developer</div>
                        <div className="exp-des">Software Developer Engineer at Jaguar</div>
                    </div>
                </div>
            </div>
    );
}
export default Experience;