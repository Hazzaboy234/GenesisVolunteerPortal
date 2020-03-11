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
                        <li className="main-nav-item active"><a href="./dashboaord">Home</a></li>
                        <li className="main-nav-item"><a href="./roles">Roles</a></li>
                        <li className="main-nav-item"><a href="./projects">Projects</a></li>
                        <li className="main-nav-item"><a href="./policies">Policies</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

//src={require("./placeholder-icon.png")}
class ProfileNavList extends Component {
    render() {
        if (this.props.profile!==undefined) {
            return (
                <ul>
                    <li>
                        <img
                            alt="profile"
                            src={this.props.profile.img}
                            width="30px"
                        />
                    </li>
                    <li><a href="./">Profile</a></li>
                    <li><a href="./">Settings</a></li>
                    <li><a href="./">Help</a></li>
                    <li><a href="./">Logout</a></li>
                </ul>
            )
        } else {
            return (
                <ul>
                    <li><a href="./">Login</a></li>
                </ul>
            )
        }

    }
}