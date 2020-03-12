import React, { Component } from "react";
import { Dropdown } from "./Dropdown";
import { NavigationBar } from "./NavigationBar";
import { Footer } from "./Footer";


export class Role extends Component {
  render() {
    return (
      <div>
          <NavigationBar/>
          <Dropdown/>
          <div className="main-container">
            <p> Hi there!</p>
          </div>
          <Footer/>
          
      </div>
    );
  }
}
