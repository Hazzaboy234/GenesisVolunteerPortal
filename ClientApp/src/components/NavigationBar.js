import React, { Component } from 'react';
class NavItem extends Component {
    render() {
        var className = "main-nav-item" + (this.props.active !== undefined ? " active" : "");
        return (
            <li className={className}><a href={this.props.redirect}>{this.props.title}</a></li>
        )
    }
}
export class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = { visible: true }
        this.toggle = this.toggle.bind(this);
    }
    toggle(variable) {
        return variable === true ? false : true
    }
    render() {
        var options = [
            {
                key: 0,
                title: "Home",
                redirect: "./dashboard",
            },
            {
                key: 1,
                title: "Roles",
                redirect: "./ourroles"
            },
            {
                key: 2,
                title: "Projects",
                redirect: "./projects"
            },
            {
                key: 3,
                title: "Policies",
                redirect: "./policies"
            }
        ]

        var index = this.props.active !== undefined ? this.props.active : 0;
        options[index].active = true;

        var navItems = options.map((option) => { return option.active !== undefined ? <NavItem key={option.key} title={option.title} redirect={option.redirect} active /> : <NavItem key={option.key} title={option.title} redirect={option.redirect} /> })
        
        return (
            <header className={"header-container"}>
                <input
                    type="button"
                    //src={require("./Resources/fullscreen.png")}
                    className="visibility-toggle"
                    onClick={()=>this.setState({visible:this.toggle(this.state.visible)})}
                    placeholder={(this.state.visible === false ? "Show Navigation" : "Fullscreen")}
                >
                
                </input>
                <div className={(this.state.visible === false ? " hide" : "")}>
                    <div className="header">
                        <img id="header-logo" alt="Genesis Trust" src={require("./Resources/logo.png")} />
                        <nav id="profile-nav">
                            <ProfileNavList profile={{ img: require("./placeholder-icon.png") }} />
                        </nav>
                    </div>
                    <nav id="main-nav">
                        <ul>
                            {navItems}
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

//src={require("./placeholder-icon.png")}
class ProfileNavList extends Component {
    render() {
        if (this.props.profile !== undefined) {
            return (
                <ul>
                    <li>
                        <a href="./profile">
                        <img
                            alt="profile"
                            src={this.props.profile.img}
                            width="30px"
                        />
                        </a>
                    </li>
                    <li><a href="./settings">Settings</a></li>
                    <li><a href="./help">Help</a></li>
                    <li><a href="./logout">Logout</a></li>
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