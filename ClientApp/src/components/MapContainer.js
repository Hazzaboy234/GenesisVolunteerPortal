import React,{Component} from "react";
import {Map} from "./Map";

export class MapContainer extends Component{
    render(){
        return(
            <div class="main-container">
            <div class="map-container">
                <nav id="map-nav">
                    <ul>
                        <li class="map-nav-item active"><a>Map</a></li>
                        <li class="map-nav-item"><a>Calendar</a></li>
                        <li class="map-nav-item new-content-alert"><a>Noticeboard</a></li>
                    </ul>
                </nav>            
                <div class="map">
                    <Map/>
                </div>
            </div>
    
            <div class="secondary-container">
                <div class="noti-container">
                    <span>Notifications</span>
                    <div>
                        <ul>
                            <li>Confirm Email Address</li>
                            <li>Complete Application</li>
                            <li>LMAO</li>
                        </ul>
    
                    </div>
                </div>
            </div>
        </div>            
        )
    }
}