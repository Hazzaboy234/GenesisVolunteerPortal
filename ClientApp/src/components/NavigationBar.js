import React, { Component } from 'react';
export class NavigationBar extends Component {
    render() {
        return (
            <header class="header-container">
                <div class="header">
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
                        <li class="main-nav-item active"><a href="/">Home</a></li>
                        <li class="main-nav-item"><a>Roles</a></li>
                        <li class="main-nav-item"><a>Projects</a></li>
                        <li class="main-nav-item"><a>Policies</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}