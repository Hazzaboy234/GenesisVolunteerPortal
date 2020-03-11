import React, { Component } from "react";
import { Footer } from "./Footer";
import { NavigationBar } from "./NavigationBar";

export class Calendar extends Component {

    componentDidMount() {
        document.title = "Calendar";
    }

    render() {
        return (
            <div>
                <link rel="stylesheet" href={require("./main.css")} />
              
                <NavigationBar />
                <div class="map-container">
            <nav id="map-nav">
                <ul>
                    <li class="map-nav-item"><a>Map</a></li>
                    <li class="map-nav-item active"><a>Calendar</a></li>
                    <li class="map-nav-item new-content-alert"><a>Noticeboard</a></li>
                </ul>
            </nav>            
            <div class="map">
                    
            </div>
        </div>
                <br/><iframe src="https://calendar.google.com/calendar/embed?src=8ncrnbim555phltutr87a0rgsg%40group.calendar.google.com&ctz=Europe%2FLondon"
                    style={{ border: 0 }}
                    width="100%"
                    height="600"
                    frameborder="0"
                    scrolling="no"></iframe>
                <Footer />
            </div>
        )
    }
}




