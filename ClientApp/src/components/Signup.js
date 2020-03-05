import React, { Component } from "react";

export class Signup extends Component {
    render() {
        return (
            <div>
                <link rel="stylesheet" href={require("./signup.css")}/>
                <div className="header-container">
                    <img id="header-logo" src={require("./Resources/logo.png")} />
                </div>

                <div className="super">
                    <div className="input-text">
                    <a href="/"><img alt="Back" id="back-arrow" src={require("./Resources/Arrow.png")}/></a>
                        <ul>
                            <input type="text" placeholder="First Name " />
                            <span className="mandatory-icon">*</span>
                            
                        </ul>
                        <ul>
                            <input type="text" placeholder="Surname" />
                            <span className="mandatory-icon">*</span>
                        </ul>
                        <ul>
                            <input type="text" placeholder="Email" />
                            <span className="mandatory-icon">*</span>
                        </ul>
                        <ul>

                            <input type="password" placeholder="Password" />
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
                            <div className="foot-button">
                                <b> SIGN UP NOW</b>
                            </div>

                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}