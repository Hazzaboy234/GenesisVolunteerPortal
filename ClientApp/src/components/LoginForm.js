import React, { Component } from "react";

export class LoginForm extends Component {
    render() {
        //console.log(this.props.validate);
        return (            
            <div className="login-container">
                <link rel="stylesheet" href={require("./LoginForm.css")}/>
                <ul>
                    <li id="login-tag">Member Login</li>
                    <li><input type="email" id="email" placeholder="Enter Email" size="45" /></li>
                    <li><input type="password" id="password" placeholder="Enter Password" size="45" /></li>
                    <li><button type="submit" id="login-button" onClick={this.props.submit}>LOGIN</button></li>
                    <li id="sign-up-tag"><a href="/signup">SIGN UP</a></li>
                    <li id="forgot-password-tag"><span onClick={this.props.helper}>Forgot Password?</span></li>
                </ul>
            </div>
        )
    }
}