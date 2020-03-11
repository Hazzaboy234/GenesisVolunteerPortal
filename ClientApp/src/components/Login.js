import React, { Component } from "react";
import { ForgotPassword } from "./ForgotPasswordForm";
import { LoginForm } from "./LoginForm";
import * as $ from "jquery";



export class Login extends Component {
    constructor(props) {
        super(props);
        this.validate = this.validate.bind(this); //Passes the object so it can be referenced as "this" in the method
        this.flipMode = this.flipMode.bind(this);

        this.state = { mode: 0 }
    }

    //Stuff you want to run off the bat when the component loads
    componentDidMount() {
        document.title = "Genesis Trust Portal: Login";
        document.addEventListener("keyup",(key)=>{            
            if(key.keyCode===13) this.validate();
        })
    }

    isInDatabase(email, password) {
        //Do ajax request to back-end to find out if the email and password exist in the database
        //areCredentialsValid = therequest
        $.ajax({
            url: '/login/validate',
            type: 'POST',
            data: JSON.stringify({
                UserEmail: email,
                Password: password
            }),
            contentType: 'application/json',
            success: function (res) { //If the credentials can be found..
                return true;
            },
            error: function (xhr, testStatus, errorThrown) { //Otherwise
                return false;
            }
        });
    }

    validate() {
        var email = document.getElementById("email").value;
        var pass = document.getElementById("password").value;
        //name@domain.etc
        var isEmailValid = RegExp("(\\w+@\\w+[.]\\w+)").test(email);
        var isPasswordValid = RegExp("^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).*").test(pass);

        if (((isEmailValid === true && isPasswordValid === true)) && (this.isInDatabase(email, pass) === true)) {
            //insert information into cookie
            alert("Information valid!");
            window.location.replace("/dashboard");
            //redirect to next window
        } else {
            alert("The username and password you gave us were invalid.");
        }
    }

    flipMode() {
        //flips this.state.mode to a 0 or 1
        this.setState({ mode: this.state.mode === 0 ? 1 : 0 })
    }

    render() {
        var content;
        if (this.state.mode === 0) {
            content = <LoginForm submit={this.validate} helper={this.flipMode} />
        } else {
            content = <ForgotPassword helper={this.flipMode} />
        }

        return (
            <div className="main-container">
                <link rel="stylesheet" href={require("./login.css")} />
                <div className="logo-container">
                    <img id="header-logo" alt="Genesis Trust" src={require("./Resources/logo.png")} />
                </div>
                {content}
            </div>

        )
    }
}