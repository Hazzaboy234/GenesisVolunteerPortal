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
                <link rel="stylesheet" href={require("./calendar.css")} />
              
                <NavigationBar />
                <div class="map-container">
            <nav id="map-nav">
                <ul>
                    <li className="map-nav-item "><a href="./map">Map</a></li>
                    <li className="map-nav-item active"><a href="./calendar">Calendar</a></li>
                    <li className="map-nav-item new-content-alert"><a href="./">Noticeboard</a></li>
                </ul>
            </nav>            
            <div class="map">
                    
            </div>
        </div>
        <br/><br/><br/><br/>
        <h2><center>
            Whats On?
        </center>
            
        </h2>
        <iframe src="https://calendar.google.com/calendar/embed?=600&amp;wkst=2&amp;color=%2344b749&amp;bgcolor=%2344b749&amp;ctz=Europe%2FLondon&amp;src=OG5jcm5iaW01NTVwaGx0dXRyODdhMHJnc2dAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;mode=WEEK&amp;showTitle=0&amp;showPrint=0&amp;showTz=0&amp;showNav=1&amp;showDate=1&amp;showCalendars=1&amp;showTabs=0" 
        style={{border:0}}
        width="100%"
        height="600" 
        frameborder="0" 
        scrolling="no">
            
        </iframe>
               <Footer />
            </div>
        )
    }
}




