import React , {Component} from 'react'
import './Blog.css'

class Blog extends Component{
    render(){
        return <div className="container">
            <div className="type">Blog</div>
            <div className="heading">How to organise your CSS</div>
            <img className="blogimg-container" src="./images/blog.jpg" />
            <div className="blog-description">In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi.<br /><br />Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</div>
            <div className="link">dev.io</div>
        </div>
    }
}

export default Blog;