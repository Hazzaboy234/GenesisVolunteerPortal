import React, { Component } from "react";
import { NavigationBar } from "./NavigationBar";
import { Footer } from "./Footer";
export class ProjectsMain extends Component {
    render() {
        return (<div>
            <link rel="stylesheet" href={require("./projects-main-page.css")} />
            
            <link rel="stylesheet" href={require("./NavigationBar.css")} />
            <NavigationBar />
            
            <div class = "content-container">
                <div class = "text-containter">
                    <div class = "text-content" >
                    Via various interlinking projects we meet the needs of hungry, homeless and vulnerable people in Bath and the
                    surrounding areas. Offering immediate practical help with food, clothing and furniture, as well as long-term
                    opportunities, training and work experience, we support people on their journey from crisis to independence.

                    Click on an individual project below to find out more, or read about our Pathways Programme.
                    </div>
                </div>
                
                <div class = "project-box-containter">
                    <ul class = "projects">
                        <li class = "project">
                            <div class = "project-box">
                                    <div class = "content">
                                        lifeline centre
                                    </div>
                                <div class = "photo">
                                    <img id="header-logo" src={require("./Resources/client_stories.jpg")}/>
                                </div>
                                
                            </div>
                        </li>
                        <li class = "project">
                            <div class = "project-box">
                                <div class = "content">
                                    family matters
                                </div>
                                <div class = "photo">
                                    <img id="header-logo" src={require("./Resources/family-matters.jpg")}/>
                                </div>
                            </div>
                        </li>
                        <li class = "project">
                            <div class = "project-box">
                                <div class = "content">
                                    street pastors
                                </div>
                                <div class = "photo">
                                    <img id="header-logo" src={require("./Resources/street-pastors.jpg")}/>
                                </div>
                            </div>
                        </li>
                        <li class = "project">
                            <div class = "project-box">
                                <div class = "content">
                                    home for good
                                </div>
                                <div class = "photo">
                                    <img id="header-logo" src={require("./Resources/home-for-good.jpg")}/>
                                </div>
                            </div>
                        </li>
                        <li class = "project">
                            <div class = "project-box">
                                <div class = "content">
                                    foodbank
                                </div>
                                <div class = "photo">
                                    <img id="header-logo" src={require("./Resources/food-bank.jpg")}/>
                                </div>
                            </div>
                        </li>
                        <li class = "project">
                            <div class = "project-box">
                                <div class = "content">
                                    lunch box
                                </div>
                                <div class = "photo">
                                    <img id="header-logo" src={require("./Resources/lunch-box.jpg")}/>
                                </div>
                            </div>
                        </li>
                        <li class = "project">
                            <div class = "project-box">
                                <div class = "content">
                                    soup run
                                </div>
                                <div class = "photo">
                                    <img id="header-logo" src={require("./Resources/soup-run.jpg")}/>
                                </div>
                            </div>
                        </li>
                        <li class = "project">
                            <div class = "project-box">
                                <div class = "content">
                                    furniture project
                                </div>
                                <div class = "photo">
                                    <img id="header-logo" src={require("./Resources/furniture-projects.jpg")}/>
                                </div>
                            </div>
                        </li>
                        <li class = "project">
                            <div class = "project-box">
                                <div class = "content">
                                    life skills
                                </div>
                                <div class = "photo">
                                    <img id="header-logo" src={require("./Resources/life-skills.jpg")}/>
                                </div>
                            </div>
                        </li>
                        
                        
                        
                
                
                    </ul>
                </div>
                
            </div>
            <div class = "space">
            </div>




            
            <Footer/>
            


            </div>);
    }
}
