import React, { Component } from "react";

export class ForgotPassword extends Component {
    render() {
        return (
            <div className="forgot-password-container">
                <link rel="stylesheet" href={require("./ForgotPassword.css")}/>
                <img onClick={this.props.helper} alt="Back" id="back-arrow" src="/Resources/Images/Arrow.png" />
                <ul>
                    <li id="forgot-password-title">Forgot your password?</li>
                    <li id="sub-heading">Please enter your email address to reset you password.</li>
                    <li><input type="email" id="email" placeholder="Enter Email" size="45" /></li>
                    <li><button type="submit" id="reset-password-button">Reset password</button></li>
                </ul>
            </div>
        )
    }
}