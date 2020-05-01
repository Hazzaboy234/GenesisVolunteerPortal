import React, { Component } from "react";
import { DropDownMenu } from "./DropDownMenu";
import { Footer } from "./Footer";
import { NavigationBar } from "./NavigationBar";

class Role extends Component {
  render() {
    console.log(this.props.content)
    return (
      <li className="role-container">
        <div className="role-header">
          <span>{this.props.title}</span>
          <span>{this.props.startdate}</span>
        </div>
        <p className="role-body">
          {this.props.desc}
        </p>


        <div className="role-button-container">
          <button className="role-expand">Learn more</button>
          <button className="role-expand">Apply</button>
        </div>

      </li>
    )
  }
}
export class Roles extends Component {
  constructor(props) {
    super(props);
    var date1 = new Date();
    date1.setMonth(7);
    var date2 = new Date();
    date2.setMonth(5)
    var date3 = new Date();
    date3.setMonth(0)
    this.state = {
      values: [
        { title: "Videographer", desc: "Join the team as a videographer", startdate: new Date() },
        { title: "Chauffeur", desc: "Drive people to and from locations", startdate: date1 },
        { title: "Server/Waiter", desc: "Wait for a variety of people", startdate: date2 },
        { title: "Guide", desc: "Guide groups of people to help locations", startdate: date3 }
      ]
    }
  }
  componentDidMount() {
    document.title = "Genesis Trust: Roles";
    //Load roles from db...
  }

  dropIt(choice) {
    document.getElementById(choice).classList.toggle("show");
  }

  showRole(role) {
    document.getElementById(role).classList.toggle("show-role");
  }


  // Does not work yet
  chooseOption(butt, val) {
    document.getElementById(butt).value = val;
  }

  //sorts this.state.values by one of its fields
  sort(field) {
    console.log(field);
    var func = (a, b) => {
      if (a[field] < b[field]) return -1
      else if (a[field === b[field]]) return 0
      else return 1
    }
    this.setState({ values: [...this.state.values].sort(func) })
  }
  render() {
    var filters = Object.keys(this.state.values[0]); //Automatically get filters from object keys
    return (
      <div>
        <link rel="stylesheet" href={require("./Roles.css")} />
        <NavigationBar active={1} />
        <DropDownMenu filters={filters} sort={this.sort.bind(this)} />

        <ul style={{ display: "flex", flexDirection: "column" }}>
          {this.state.values.map((value) => <Role title={value.title} desc={value.desc} startdate={value.startdate.toDateString()} />)}
        </ul>
        <Footer />
      </div>
    );
  }
}
