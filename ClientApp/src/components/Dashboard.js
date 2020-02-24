import React, { Component } from "react";

import { MapNavigationComponent } from "./MapNavigationComponent";
import { Tooltip, Container } from "reactstrap";
import { NavigationBar } from "./NavigationBar";
import { Footer } from "./Footer";
import { MapContainer } from "./MapContainer";
export class Dashboard extends Component {

    render() {
        return (
            <div>
                <link rel="stylesheet" href={require("./NavigationBar.css")}/>
                <NavigationBar />
                <MapContainer/>
                <Footer />
            </div>
        )
    }
}