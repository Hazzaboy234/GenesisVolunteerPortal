import React, { Component } from "react";
import * as $ from "jquery";

class InputElement extends Component {
    render() {
        var id = "X-input".replace("X", this.props.id);
        var type = this.props.type != undefined ? this.props.type : "text";
        var mandatory = null;
        if (this.props.mandatory != undefined) {
            mandatory = <span className="mandatory-icon">*</span>
        }

        return (
            <li>
                <input id={id} type={type} placeholder={this.props.placeholder} />
                {mandatory}
            </li>
        )
    }
}

export class Signup extends Component {
    constructor(props) {
        super(props);
        this.toast = this.toast.bind(this);
        this.state = { reveal: false }

    }
    validate() {
        var data = {}
        data["FirstName"] = document.getElementById("first-name-input").value;
        data["LastName"] = document.getElementById("second-name-input").value;
        data["Email"] = document.getElementById("email-input").value;
        data["Password"] = document.getElementById("password-input").value;
        data["RegistrationCode"] = document.getElementById("rc-input").value;

        var regex = {
            "FirstName": "\\w+",
            "LastName": "\\w+",
            "Email": ".+",
            "Password": "^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).*",
            "RegistrationCode": ".*"
        }

        //Check if each field matches the regex
        for (var field in regex) if (RegExp(regex[field]).test(data[field]) === false) return field
        if (data["Password"] != document.getElementById("cpassword-input").value) return "passwords-no-match"
        return true;
    }
    toast(message) {
        var m = "The information you supplied in the 'X' field isn't valid."
        this.props.openToast(m.replace("X", message), "negative");
    }
    post() {
        var val = this.validate()
        if (val !== true) { this.toast(val); return; }
        var data = {}
        data["FirstName"] = document.getElementById("first-name-input").value;
        data["LastName"] = document.getElementById("second-name-input").value;
        data["Email"] = document.getElementById("email-input").value;
        data["Password"] = document.getElementById("password-input").value;
        data["RegistrationCode"] = document.getElementById("rc-input").value;

        $.ajax({
            url: '/register',
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            success: function (res) { //If the credentials can be added
                window.location.replace("/dashboard");
                return true;
            },
            error: function (xhr, testStatus, errorThrown) { //Otherwise
                alert("Signup unsuccessful.");
                return false;
            }
        });

    }
    render() {
        var passwordInputType = (this.state.reveal === false ? "password" : "text")
        return (
            <div>
                <link rel="stylesheet" href={require("./signup.css")} />
                <div className="header-container">
                    <img alt="Genesis Trust" id="header-logo" src={require("./Resources/logo.png")} />
                </div>

                <div className="super">

                    <ul className="input-text">
                        <a href="/"><img alt="Back" id="back-arrow" src={require("./Resources/Arrow.png")} /></a>
                        <InputElement id="first-name" type="text" placeholder="First Name" mandatory />
                        <InputElement id="second-name" type="text" placeholder="Second Name" mandatory />
                        <InputElement id="email" type="text" placeholder="Email" mandatory />
                        <div className="password-container">
                            <InputElement id="password" type={passwordInputType} placeholder="Password" mandatory />                            
                            <img
                                className="reveal-button"
                                src={require("./Resources/eye-icon.jpg")}
                                alt={this.state.reveal === false ? "show" : "hide"}
                                onClick={() => this.setState({ reveal: this.state.reveal === false ? true : false })}
                            />
                        </div>
                        <InputElement id="cpassword" type={passwordInputType} placeholder="Confirm Password" mandatory />
                        <InputElement id="rc" type={passwordInputType} placeholder="Registration Code"/>
              
                        <li className="info">
                            <span>
                                Fields marked with <span className="mandatory-icon">*</span> are mandatory.
                                </span>
                        </li>
                        <li className="button">
                            <div className="foot-button" onClick={this.post.bind(this)}>
                                <b>SIGN UP</b>
                            </div>

                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}