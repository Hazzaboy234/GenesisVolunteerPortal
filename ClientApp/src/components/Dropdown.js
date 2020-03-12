import React, { Component } from "react";

export class Dropdown extends Component {
  render() {
    return (
      <div src="dropdown">
        <link rel="stylesheet" href="./Dropdown.css"/>
        <button onclick="myFunction()" className="dropbtn">
          Option1
        </button>
        <div id="myDropdown" className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 1</a>
        </div>
      </div>
    );
  }
}
