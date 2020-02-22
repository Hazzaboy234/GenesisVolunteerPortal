import React, { Component } from 'react';
export class NavigationBar extends Component {
    render() {
        return (
            <header className="header-container">
                <div className="header">
                    <img id="header-logo" alt="Genesis Trust" src={require("./Resources/logo.png")}/>
                <nav id="profile-nav">
                        <ul>
                            <li>
                                <img
                                    alt="profile"
                                    src={require("./placeholder-icon.png")}
                                    width="30px"
                                />
                            </li>
                            <li><a>Profile</a></li>
                            <li><a>Settings</a></li>
                            <li><a>Help</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </nav>
                </div>
                <nav id="main-nav">
                    <ul>
                        <li className="main-nav-item active"><a href="/">Home</a></li>
                        <li className="main-nav-item"><a href="/">Roles</a></li>
                        <li className="main-nav-item"><a href="/">Projects</a></li>
                        <li className="main-nav-item"><a href="/">Policies</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}