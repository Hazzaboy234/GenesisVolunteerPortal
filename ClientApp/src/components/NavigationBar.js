import React, { Component } from 'react';
export class NavigationBar extends Component {
    render() {
        return (
            <header className="header-container">
                <div className="header">
                    <img id="header-logo" alt="Genesis Trust" src={require("./Resources/logo.png")} />
                    <nav id="profile-nav">
                        <ProfileNavList profile={{img:require("./placeholder-icon.png")}}/>
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

//src={require("./placeholder-icon.png")}
class ProfileNavList extends Component {
    render() {
        if (this.props.profile!=undefined) {
            return (
                <ul>
                    <li>
                        <img
                            alt="profile"
                            src={this.props.profile.img}
                            width="30px"
                        />
                    </li>
                    <li><a>Profile</a></li>
                    <li><a>Settings</a></li>
                    <li><a>Help</a></li>
                    <li><a>Logout</a></li>
                </ul>
            )
        } else {
            return (
                <ul>
                    <li><a>Login</a></li>
                </ul>
            )
        }

    }
}