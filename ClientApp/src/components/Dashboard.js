import React, { Component } from "react";

//import { MapNavigationComponent } from "./MapNavigationComponent";
//import { Tooltip, Container } from "reactstrap";
import { NavigationBar } from "./NavigationBar";
import { DashboardContent } from "./DashboardContent";
export class Dashboard extends Component {
    componentDidMount(){
        document.cookie = JSON.stringify({hello:"dickhead",okay:"then"})
        //console.log(document.cookie);
    }
    render() {
        
        return (
            <div>
                <link rel="stylesheet" href={require("./NavigationBar.css")}/>
                <link rel="stylesheet" href={require("./dashboard.css")}/>                                
                <NavigationBar active={0}/>
                <DashboardContent/>
            </div>
        )
    }
}