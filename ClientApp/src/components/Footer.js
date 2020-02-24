import React, { Component } from 'react';
//import "./NavigationBar.css";
export class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <link rel="stylesheet" href={require("./NavigationBar.css")}/>
                <ul>
                    <li><a>Contact</a></li>
                    <li><a>Stuff</a></li>
                    <li><a>Main Site</a></li>
                    <li><a>Site Map</a></li>
                </ul>
                <span><a>Copyright XYZ</a></span>
            </div>
        )
    }
}