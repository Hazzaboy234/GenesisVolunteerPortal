import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';

export class MapContainer extends Component {
  //AIzaSyCkz4BpuGT57kXKhLA39NUDAeCN1zss8q8
  constructor(props) {
    super(props);
    this.markerClicked = this.markerClicked.bind(this);
    this.state = {
      initPos: { lat: 47.444, lng: -122.176 },
      markers: [<Marker
        key={4}
        position={{lat:47.5,lng: -122.176}} 
        onClick={this.markerClicked}
      />],            
      selectedMarker:null
    }

 
  }

  markerClicked(marker, event) {
    var string = "Name: n\n\nPosition: {lat:l1,lng:l2}\n"
    string = string.replace("n", marker.name);
    string = string.replace("l1", marker.position.lat);
    string = string.replace("l2", marker.position.lng);
    alert(string);
    
    this.setState({
      selectedMarker: marker
    });
    
  }

  componentDidMount() {
    this.setState({selectedMarker:this.state.markers[0]});
    /*
    var positions = [
      { lat: 47.444, lng: -122.176 },
      { lat: 47.434, lng: -122.176 }
    ]

    var markers = [];

    if ((positions !== undefined) || (positions.length > 0)) {
      positions.forEach((position) => markers.push(
        <Marker
          key={position.lat + position.lng}
          position={position}
          onClick={this.markerClicked}
        />
      ));
    }
    console.log(markers);
    this.setState({ markers: markers })
    */
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={style}
        initialCenter={this.state.initPos}
      >
        {this.state.markers}

        <InfoWindow
          marker={this.state.selectedMarker===null?this.state.markers[0]:this.state.selectedMarker}
          visible={true}>
          <div>
            <h1>GSDALO</h1>
          </div>
        </InfoWindow>
      </Map>
    )
  }
}

var style = {
  width: "100%",
  height: "100%"
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCkz4BpuGT57kXKhLA39NUDAeCN1zss8q8'
})(MapContainer);
