import React from 'react'
import './Projects.css'

function Projects(){
    return(
        <div className="projects-con">
            <div className="title-pro">Projects(3)</div>
            <div id="myBtnContainer">
  <button class="btn active" onclick="filterSelection('all')"> Show all</button>
  <button class="btn" onclick="filterSelection('HTML')"> HTML</button>
  <button class="btn" onclick="filterSelection('CSS')"> CSS</button>
  <button class="btn" onclick="filterSelection('Js')"> Js</button>
</div>
                <div className="allproj">
                <div class="row">
                <div class="col-sm">
                    <div class="filterDiv HTML">
                    <div className="myProj">
                            <img src="./images/proj.jpg" className="proj-img" />
                            <div className="tags">#HTML</div>
                            <div className="heading-pro">Recipe Blog</div>
                            <div className="des-pro">In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io</div>
                            <div className="btn-pro">
                                <button type="button" class="btn btn-primary">Demo</button>
                                <button type="button" class="btn btn-link">Link</button>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-sm">
                    <div class="filterDiv CSS">
                    <div className="myProj">
                            <img src="./images/proj.jpg" className="proj-img" />
                            <div className="tags">#CSS</div>
                            <div className="heading-pro">Recipe Blog</div>
                            <div className="des-pro">In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io</div>
                            <div className="btn-pro">
                                <button type="button" class="btn btn-primary">Demo</button>
                                <button type="button" class="btn btn-link">Link</button>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-sm">
                    <div class="filterDiv Js">
                    <div className="myProj">
                            <img src="./images/proj.jpg" className="proj-img" />
                            <div className="tags">#JS</div>
                            <div className="heading-pro">Recipe Blog</div>
                            <div className="des-pro">In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io</div>
                            <div className="btn-pro">
                                <button type="button" class="btn btn-primary">Demo</button>
                                <button type="button" class="btn btn-link">Link</button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );
}
export default Projects;