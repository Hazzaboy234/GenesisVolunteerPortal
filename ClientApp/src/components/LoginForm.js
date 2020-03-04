import React,{Component} from "react";

export class LoginForm extends Component{
    render(){
        return(
            <div class="login-container">
            <ul>
                <li id="login-tag">Member Login</li>
                <li><input type="email" id="email" placeholder="Enter Email" size="45" /></li>
                <li><input type="password" id="password" placeholder="Enter Password" size="45" /></li>
                <li><button type="submit" id="login-button" onClick={this.validate}>LOGIN</button></li>
                <li id="sign-up-tag">SIGN UP</li>
                <li id="forgot-password-tag" onClick={this.props.helper}>Forgot Password?</li>
            </ul>
        </div>
        )
    }
}