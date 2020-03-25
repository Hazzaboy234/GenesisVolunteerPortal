import React, { Component } from "react";
import { NavigationBar } from "./NavigationBar";
import { Footer } from "./Footer";
export class ProjectsMain extends Component {
    render() {
        return (<div>
            <link rel="stylesheet" href={require("./main.css")} />
            <link rel="stylesheet" href={require("./projects-main-page.css")} />
            <link rel="stylesheet" href={require("./NavigationBar.css")} />
            <NavigationBar active={2}/>

            <div class="content-container">
                <div class="text-containter">
                    <div class="text-content" >
                        Via various interlinking projects we meet the needs of hungry, homeless and vulnerable people in Bath and the
                        surrounding areas. Offering immediate practical help with food, clothing and furniture, as well as long-term
                        opportunities, training and work experience, we support people on their journey from crisis to independence.

                        Click on an individual project below to find out more, or read about our Pathways Programme.
                    </div>
                </div>
<br></br>
                <div class="project-box-containter">
                    <ul class="projects">
                      
                                
                                <div class="photo">
                                    <img className="content-logo" src={require("./Resources/client_stories.jpg")} /><div class="text">Lifeline centre</div>
                                </div>

                            
                              
                                <div class="photo">
                                    <img className="content-logo" src={require("./Resources/family-matters.jpg")} /><div class="text">Family Matters</div>
                                </div>
                            
                                
                                <div class="photo">
                                    <img className="content-logo" src={require("./Resources/street-pastors.jpg")} /><div class="text">Street Pastors</div>
                                </div>
                          
                              
                                <div class="photo">
                                    <img className="content-logo" src={require("./Resources/home-for-good.jpg")} /><div class="text">Home For Good</div>
                                </div>
                     
                             
                                <div class="photo">
                                    <img className="content-logo" src={require("./Resources/food-bank.jpg")} /><div class="text">Foodbank</div>
                                </div>
                          
                                
                                <div class="photo">
                                    <img className="content-logo" src={require("./Resources/lunch-box.jpg")} /><div class="text">Lunch Box</div>
                                </div>
                        
                              
                                <div class="photo">
                                    <img className="content-logo" src={require("./Resources/soup-run.jpg")} /><div class="text">Soup Run</div>
                                </div>
                            
                             
                                <div class="photo">
                                    <img className="content-logo" src={require("./Resources/furniture-projects.jpg")} /><div class="text">Furnature Project</div>
                                </div>
                            
                        
                             
                                <div class="photo">
                                    <img className="content-logo" src={require("./Resources/life-skills.jpg")} /><div class="text">Life Skills</div>
                                </div>
                            





                    </ul>
                </div>

            </div>
            <div class="space">
            </div>





            <Footer />



        </div>);
    }
}
