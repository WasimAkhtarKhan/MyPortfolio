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
                        <div className="title-exp">Heading</div>
                        <div className="exp-des">Description</div>
                    </div>
                    <div className="exps">
                        <div><img className="img-exp" src="images/myimage.jpg" /></div>
                        <div className="title-exp">Heading</div>
                        <div className="exp-des">Description</div>
                    </div>
                </div>
            </div>
    );
}
export default Experience;