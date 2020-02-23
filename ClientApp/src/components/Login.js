import React, { Component } from "react";
//import "./login.css"
//How do i deal with conflicting stylesheets in react?
//Maybe we use inline style objects instead var style={...}
export class Login extends Component {
    constructor(props){
        super(props);
        this.validate = this.validate.bind(this);
    }
    isInDatabase(email,password){
        //Do ajax request to back-end to find out if the email and password exist in the database
        alert("doing ajax request...");
        return false;
    }
    
    validate(){
        var email = document.getElementById("email").value;
        var pass = document.getElementById("password").value;
    
        /*
        Front-end validation
        ensure email and password match the sign-up criteria now
        because if they don't they definately can't be a valid entry in the database
        so there is no need to go and check
        */
        var isEmailValid=RegExp("(\\w+@\\w+[.]\\w+)").test(email);
        var isPasswordValid=RegExp("^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).*").test(pass);
    
        
        if(((isEmailValid===true && isPasswordValid===true))&&(this.isInDatabase(email,pass)===true)){
            //insert information into cookie
            alert("Information valid!");
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
                        <li id="sign-up-tag"><a>SIGN UP</a></li>
                        <li id="forgot-password-tag"><a>Forgot Password?</a></li>
                    </ul>
                </div>
            </div>

        )
    }
}