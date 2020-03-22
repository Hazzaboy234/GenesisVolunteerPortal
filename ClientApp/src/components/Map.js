import React, { Component } from "react";

//Globals!
var markers;
var markerObjects = [];
var map;
var infowindow;
var contentString = "<div class='infowindow-container'><span class='infowindow-title'>event_title</span><p class='infowindow-body'>event_description</p><ul class='infowindow-socials'><li><a>View</a></li></ul></div>";
var center = { lat: 59.310, lng: 18.067 }
center = { lat: 51.379593, lng: -2.355752 }
center = { lat: 51.38, lng: -2.35 }
center = { lat: 51.379402, lng: -2.357393 }
var google = window.google
export class Map extends Component {
    constructor(props) {
        super(props);
        this.state={showResults:0}
        this.search = this.search.bind(this);
        this.reset = this.reset.bind(this);
        
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
            marker.position = this.randomCoords({ lat: [center.lat - 0.1, center.lat + 0.1], lng: [center.lng - 0.1, center.lng + 0.1] });
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
            this.reset();
        } else {
            var reg = RegExp(content,"i")
            markerObjects.forEach((marker) => {
                if (marker.fixed === true) {return;}

                var test = reg.test(marker.title);
                console.log(test);
                if (test===false) {                    
                    marker.setMap(null);
                } else {
                    if (marker.map === null) marker.setMap(map);
                    results++;
                }
            })
            var quantifier = results === 0 || results > 1 ? "were" : "was";
            output.innerText = outputString.replace("X", results.toString()).replace("Z", quantifier);

            if (results > 0)
                //output.className = "positive"
                this.setState({showResults:1})
            else {
                //output.className = "negative"
                this.setState({showResults:2})
            }
        }


    }
    reset(){
        document.getElementById("search-input").value=""
        document.getElementById("results-tag").innerText="All Events"
        this.setState({showResults:0})
        this.changeMap(map);
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

        //Add marker to mark the main officies..


        //Add some example markrers
        var examples = [
            {
                title:"Pub Crawl for All",
                description:{body:"Join us at the SU for a pint!",roles:["Driver"]}
            },{
                title:"Theme Park Trip!",
                description:{body:"An opportunity to embrace your fear of heights!",roles:["Events Manager","Social Media Ambassador"]}
            }
        ]
        examples.forEach((example)=>{example["animation"]=google.maps.Animation.DROP;this.addMarker(example)})        
        this.addMarker({
            title: "Genesis Trust Offices",
            description: { body: "Our main offices" },
            position: center,
            fixed: true,
            animation: google.maps.Animation.DROP,
            icon:require("./Resources/home-icon.png")
        })
    }
    render() {
        var className=(this.state.showResults>0?"":"default")
        if(this.state.showResults > 0){
            className+= " " + (this.state.showResults===1 ? "positive":"negative");
        }
        
        return (
            <div className="map-container">
                <link rel="styleheet" href={require("./map.css")} />
                <div id="map">
                </div>
                <nav id="main-map-nav">
                    <ul id="main-ul">
                        <li>
                            <input id="search-input"
                                type="text"
                                placeholder="Search by event name, role type etc..."
                                onChange={this.search}
                            />
                            <button className="clear-button" onClick={this.reset}>X</button>
                        </li>
                        <li className="results-container">
                            <span className={className} id="results-tag">Events</span>
                            <ul className="results-list">
                                {markerObjects.map((marker)=>marker.map!=null?<Result onClick={this.openWindow.bind(this)} marker={marker}/>:null)}
                            </ul>
                            </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

class Result extends React.Component{

    render(){
        return(
            <li onClick={()=>this.props.onClick(this.props.marker)} className="result">{this.props.marker.title}</li>
        )
    }
}
