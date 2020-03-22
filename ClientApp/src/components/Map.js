import React, { Component } from "react";

//Globals!
var markers;
var markerObjects = [];
var map;
var infowindow;
var contentString = "<div class='infowindow-container'><span class='infowindow-title'>event_title</span><p class='infowindow-body'>event_description</p><ul class='infowindow-socials'><li><a>View</a></li></ul></div>";
var center = { lat: 59.310, lng: 18.067 }
var google = window.google
export class Map extends Component {
    constructor(props){
        super(props);
        this.search = this.search.bind(this);
    }
    createMarker(marker) {
        var m = new google.maps.Marker(marker);
        m.addListener("click", () => this.openWindow(m))
        this.openWindow(m);
        markerObjects.push(m);
    }
    /**
     * Returns a random float in a range
     * @param {*} range an array with an upper and lower bound for the values
     */
    random(range) {
        return (Math.random() * (range[1] - range[0])) + range[0];
    }


    /**
     * Returns a pair of random coordinates within a range
     * @param {*} range an object with lat and lng attributes containing an array [lowerBound,upperBound]
     * e.g. {
        lat:[0-2],lang:[3-4]
        }
     */
    randomCoords(range) {
        return {
            lat: this.random(range.lat),
            lng: this.random(range.lng)
        }
    }

    addMarker(marker) {
        marker.map = map;
        if (marker.position === undefined) {
            marker.position = this.randomCoords({ lat: [59.3, 59.4], lng: [18, 18.1] });
        }
        this.createMarker(marker);
    }

    openWindow(marker) {
        var content = contentString.replace("event_title", marker.title);
        content = content.replace("event_description", this.compileDescription(marker.description));
        infowindow.setContent(content);
        infowindow.open(map, marker);
    }
    compileDescription(description) {
        var desc = "desc_body<br><br>desc_roles";
        desc = desc.replace("desc_body", description.body);
        var roles;
        if ((description.roles != undefined) && (description.roles.length >= 0)) {
            roles = "Available Roles<br>" + description.roles.toString()
        } else {
            roles = "No available roles";

        }
        desc = desc.replace("desc_roles", roles)
        return desc;
    }

    search() {
        var content = document.getElementById("search-input").value;
        var output = document.getElementById("results-tag");
        var outputString = "X Results Z found";
        var results = 0;
        if (content === "") {
            this.changeMap(map);
        } else {

            markerObjects.forEach((marker) => {
                if (marker.title.toLowerCase() != content.toLowerCase()) {
                    marker.setMap(null);
                } else {
                    if (marker.map === null) marker.setMap(map);
                    results++;
                }
            })
            var quantifier = results===0 || results >1 ? "were":"was";
            output.innerText = outputString.replace("X", results.toString()).replace("Z",quantifier);
            
            if (results > 0)
                output.className = "positive"
            else {
                output.className = "negative"
            }
        }


    }

    changeMap(map) {
        markerObjects.forEach((marker) => marker.setMap(map));
        if (map === null) {
            markerObjects = []
        }
    }

    componentDidMount() {
        var google = window.google;

        if (document.getElementById("map") === null) return;

        map = new google.maps.Map(document.getElementById('map'), {
            center: center,
            zoom: 11
        });

        infowindow = new google.maps.InfoWindow({
            content: "<div class='infowindow-container'><span class='infowindow-title'>event_title</span><p class='infowindow-body'>event_description</p><ul class='infowindow-socials'><li><a>View</a></li></ul></div>"
        });

        this.addMarker({
            title: "hello",
            description: { body: "come on" },
            animation: google.maps.Animation.DROP
        })
    }
    render() {
        return (
            <div className="map-container">
                <link rel="styleheet" href={require("./map.css")} />
                <div id="map">
                </div>
                <nav id="main-map-nav">
                    <ul id="main-ul">
                        <li>
                            <input id="search-input" type="text" placeholder="Search by event name, role type etc..." />
                            <button id="search-button" onMouseUp={this.search}>Search</button>
                            <button id="show-button" onMouseUp={this.changeMap(map)}>Show All</button>
                            <button id="reset-button" onMouseUp={this.changeMap(null)}>Remove Markers</button>
                        </li>
                        <li><span class="hidden" id="results-tag">Results</span></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

