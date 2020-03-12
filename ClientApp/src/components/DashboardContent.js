import React, {Component} from "react";
import { Map } from "./Map";
import { Noticeboard } from "./Noticeboard";
export class DashboardContent extends Component {
    render() {
        return (
            <div className="main-container">
                <div className="map-container">
                    <nav id="map-nav">
                        <ul>
                            <li className="map-nav-item active"><a href="./">Map</a></li>
                            <li className="map-nav-item"><a href="./">Calendar</a></li>
                            <li className="map-nav-item new-content-alert"><a href="./">Noticeboard</a></li>
                        </ul>
                    </nav>
                    <div className="map">
                        
                        <Noticeboard/>
                    </div>
                </div>
            </div>

            <div className="secondary-container">
                <div className="noti-container">
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