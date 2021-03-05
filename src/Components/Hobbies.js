import React from 'react'
import './Hobbies.css'

function Hobbies(){
    return (
        <div className="container">
            <div className="heading-hob">Hobbies</div>
            <div className="all-hob">
            <div className="hobb">
                <div><img className="img-hob" src="images/travelling.jpg" /></div>
                <div className="title">Travelling</div>
                <div className="des">Quisque feugiat malesuada molestie.</div>
            </div>
            <div className="hobb">
                <div><img className="img-hob" src="images/gaming.jpg" /></div>
                <div className="title">Gaming</div>
                <div className="des">Quisque feugiat malesuada molestie.</div>
            </div>
            <div className="hobb">
                <div><img className="img-hob" src="images/cycling.jpg" /></div>
                <div className="title">Cycling</div>
                <div className="des">Quisque feugiat malesuada molestie.</div>
            </div>
            </div>
        </div>
    );
}

export default Hobbies;