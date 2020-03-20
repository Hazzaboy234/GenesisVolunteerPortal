import React, { Component } from "react";
import { Dropdown } from "./Dropdown";
import { NavigationBar } from "./NavigationBar";
import { Footer } from "./Footer";


export class Roles extends Component {
  render() {
    return (
      <div>
          <NavigationBar active={1}/>
          <Dropdown/>
          <div className="main-container">
            <p> Hi there!</p>
          </div>
          <Footer/>
          
      </div>
    );
  }
}
