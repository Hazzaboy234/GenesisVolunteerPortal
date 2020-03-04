import React, { Component } from "react";
import { ForgotPassword } from "./ForgotPassword";
import { LoginForm } from "./LoginForm";

export class Login extends Component {
    constructor(props){
        super(props);
        this.validate = this.validate.bind(this); //Passes the object so it can be referenced as "this" in the method

        this.state = {mode:0}
    }
    componentDidMount(){
        document.title="Genesis Trust Portal: Login";
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

    onClickHelper(){
        //flips this.state.mode to a 0 or 1
        this.setState({mode:this.state.mode == 0 ? 1 : 0})
    }

    render() {
        var container;
        if(this.state.mode == 0){
            container = <LoginForm helper={this.onClickHelper}/>
        }else{
            container = <ForgotPassword helper={this.onClickHelper}/>
        }


        return (
            <div class="main-container">
                <link rel="stylesheet" href={require("./login.css")}/>
                <div class="logo-container">
                    <img id="header-logo" alt="Genesis Trust" src={require("./Resources/logo.png")} />
                </div>
                {container}
            </div>

        )
    }
}