import React, { Component } from "react";

//import { MapNavigationComponent } from "./MapNavigationComponent";
//import { Tooltip, Container } from "reactstrap";
import { NavigationBar } from "./NavigationBar";
import { Footer } from "./Footer";
import { DashboardContent } from "./DashboardContent";
import { Toast } from "./Toast";
export class Dashboard extends Component {

    render() {
        return (
            <div>
                <link rel="stylesheet" href={require("./NavigationBar.css")}/>
                <link rel="stylesheet" href={require("./dashboard.css")}/>
            
                <NavigationBar />
                <DashboardContent/>
                <Footer />
            </div>
        )
    }
}