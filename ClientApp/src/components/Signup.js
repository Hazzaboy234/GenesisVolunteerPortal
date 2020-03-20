import React, { Component } from "react";
import * as $ from "jquery";
export class Signup extends Component {
    post(){
        var data = {}
        data["name"] = document.getElementById("first-name-input").value + " " + document.getElementById("second-name-input").value;
        data["email"] = document.getElementById("email-input").value;
        data["password"] = document.getElementById("password-input").value;

        $.ajax({
            url: '/register',
            type: 'POST',
            data:JSON.stringify(data),
            contentType:'application/json',            
            success: function(res) { //If the credentials can be found..
                alert("Signup sucessful");
                window.location.replace("/dashboard");
                return true;
            },
            error: function(xhr, testStatus, errorThrown){ //Otherwise
                alert("Signup unsuccessful.");
                return false;
            }
        });

    }
    render() {
        return (
            <div>
                <link rel="stylesheet" href={require("./signup.css")}/>
                <div className="header-container">
                    <img alt="Genesis Trust" id="header-logo" src={require("./Resources/logo.png")} />
                </div>

                <div className="super">
                    <div className="input-text">
                    <a href="/"><img alt="Back" id="back-arrow" src={require("./Resources/Arrow.png")}/></a>
                        <ul>
                            <input id="first-name-input" type="text" placeholder="First Name " />
                            <span className="mandatory-icon">*</span>
                            
                        </ul>
                        <ul>
                            <input id="second-name-input" type="text" placeholder="Surname" />
                            <span className="mandatory-icon">*</span>
                        </ul>
                        <ul>
                            <input id="email-input" type="text" placeholder="Email" />
                            <span className="mandatory-icon">*</span>
                        </ul>
                        <ul>

                            <input id="password-input" type="password" placeholder="Password" />
                            <span className="mandatory-icon">*</span>
                        </ul>
                        <ul>

                            <input type="password" placeholder="Confirm Password" />
                            <span className="mandatory-icon">*</span>
                        </ul>
                        <ul>
                            <input type="text" placeholder="Registration Code" />
                            <span>*</span>
                        </ul>
                        <ul className="info">
                            <li>
                                Fields marked with <span className="mandatory-icon">*</span> are mandatory.
                    </li>
                        </ul>
                        <ul className="button">
                            <div className="foot-button" onClick={this.post.bind(this)}>
                                <b> SIGN UP NOW</b>
                            </div>

                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}