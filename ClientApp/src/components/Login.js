import React, { Component } from "react";
import "./login.css"
export class Login extends Component {
    render() {
        return (
            <div class="main-container">
                <div class="logo-container">
                    <img id="header-logo" alt="Genesis Trust" src="/Resources/Images/logo-2.png" />
                </div>
                <div class="login-container">
                    <ul>
                        <li id="login-tag">Member Login</li>
                        <li><input type="email" id="email" placeholder="Enter Email" size="45" /></li>
                        <li><input type="password" id="password" placeholder="Enter Password" size="45" /></li>
                        <li><button type="submit" id="login-button">LOGIN</button></li>
                        <li id="sign-up-tag"><a>SIGN UP</a></li>
                        <li id="forgot-password-tag"><a>Forgot Password?</a></li>
                    </ul>
                </div>
            </div>

        )
    }
}