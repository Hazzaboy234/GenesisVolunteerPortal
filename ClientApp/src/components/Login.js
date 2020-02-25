import React, { Component } from "react";
export class Login extends Component {
    constructor(props){
        super(props);
        this.validate = this.validate.bind(this); //Passes the object so it can be referenced as "this" in the method
    }
    isInDatabase(email,password){
        //Do ajax request to back-end to find out if the email and password exist in the database
        var areCredentialsValid = false;
        //areCredentialsValid = therequest
        alert("doing ajax request...");
        return areCredentialsValid;
    }
    
    validate(){
        var email = document.getElementById("email").value;
        var pass = document.getElementById("password").value;

        var isEmailValid=RegExp("(\\w+@\\w+[.]\\w+)").test(email);
        var isPasswordValid=RegExp("^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).*").test(pass);
    
        
        if(((isEmailValid===true && isPasswordValid===true))&&(this.isInDatabase(email,pass)===true)){
            //insert information into cookie
            alert("Information valid!");
            window.location.replace("/dashboard");
            //redirect to next window
        }else{
            alert("Invalid info \nEmail:"+email+"\npass:"+pass);
        }    
    }

    render() {
        return (
            <div class="main-container">
                <link rel="stylesheet" href={require("./login.css")}/>
                <div class="logo-container">
                    <img id="header-logo" alt="Genesis Trust" src={require("./Resources/logo.png")} />
                </div>
                <div class="login-container">
                    <ul>
                        <li id="login-tag">Member Login</li>
                        <li><input type="email" id="email" placeholder="Enter Email" size="45" /></li>
                        <li><input type="password" id="password" placeholder="Enter Password" size="45" /></li>
                        <li><button type="submit" id="login-button" onClick={this.validate}>LOGIN</button></li>
                        <li id="sign-up-tag">SIGN UP</li>
                        <li id="forgot-password-tag">Forgot Password?</li>
                    </ul>
                </div>
            </div>

        )
    }
}