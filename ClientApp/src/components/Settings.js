import React, { Component } from "react";

export class Settings extends Component {
    render() {
        return (<div>
            <link rel="stylesheet" href={require("./Settings-page.css")} />
            <div class="header-container">
                <div class="header">
                    <img id="header-logo" alt="Genesis Trust" src={require("./Resources/logo.png")} />
                    <nav id="profile-nav">
                        <ul class = "head-list">                    
                            <li>
                                <img src={require("./placeholder-icon.png")} width="30px" />
            
                            </li>                    
                            <li><a>Profile</a></li>                
                            <li class = "active"><a>Settings</a></li>
                            <li><a>Help</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </nav>
                </div>
                <nav id="main-nav">
                    <ul class = "main-list">
                        <li class="main-nav-item"><a href="/">Home</a></li>
                        <li class="main-nav-item"><a>Roles</a></li>
                        <li class="main-nav-item"><a>Projects</a></li>
                        <li class="main-nav-item"><a>Policies</a></li>
                    </ul>
                </nav>
            </div>
            <div class = "content-container">
                <div class = "options">

                    <ul class = "settings">
                        <li class = "radiob">
                            Display Mode:
                        </li>
                        <li class = "radiob">
                            <input type="radio" id="light" name="display" value="light"/>
                            <label for="Light">Light</label><br/>
                        </li>
                        <li class = "radiob">
                            <input type="radio" id="dark" name="display" value="drak"/>
                            <label for="Dark">Dark</label><br/>
                        </li>
                    </ul>

                    <ul class = "settings">
                        <li class = "radiob">
                            Volunteer Status:
                        </li>
                        <li class = "radiob">
                            <input type="radio" id="active" name="status" value="active"/>
                            <label for="active">Active</label><br/>
                        </li>
                        <li class = "radiob">
                            <input type="radio" id="inactive" name="status" value="inactive"/>
                            <label for="inactive">Inactive</label><br/>
                        </li>
                        </ul>
                </div>
                <div class = "buttons">
                    <ul class = "settings">
                        <li class = "button">
                            Change Password
                        </li> 
                        <li class = "button">
                            Delete Account
                        </li> 
                        <li class = "button">
                            Log-out
                        </li>          
                    </ul>
                </div>
                    
            </div>




    
    <div class="footer-container"> 
        <ul class = "foot-list">
            <li><a>Contact</a></li>            
            <li><a>Stuff</a></li>
            <li><a>Main Site</a></li>
            <li><a>Site Map</a></li>
        </ul>
        <span><a>Copyright XYZ</a></span>
    </div>
            </div>);
    }
}
