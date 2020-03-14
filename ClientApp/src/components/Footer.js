import React, { Component } from 'react';
//import "./NavigationBar.css";
export class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <link rel="stylesheet" href={require("./NavigationBar.css")}/>
                <ul>
                    <li><a href="./contacts">Contact</a></li>
                    <li><a href="https://www.genesistrust.org.uk">Main Site</a></li>
                    <li><a href="./">Site Map</a></li>
                </ul>
                <span><a href="./">Copyright XYZ</a></span>
            </div>
        )
    }
}