import React, { Component } from "react";
import { Dropdown } from "./Dropdown";
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
        { title: "Videographer", desc: "Join the team as a ...", startdate: new Date() },
        { title: "Chauffeur", desc: "Skrrr", startdate: date1 },
        { title: "Server/Waiter", desc: "Wait on me", startdate: date2 },
        { title: "Guide", desc: "Guide the people dem", startdate: date3 }
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
      else if (a[field == b[field]]) return 0
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
        <div className="big-ol-container">
          <div className="filter-container">
            <div className="dates-container, filter-holder">
              <form action="/action_page.php">
                <label for="date-choice">Choose Date: </label>
                <input type="date" id="date-choice" name="date-choice" />
              </form>
            </div>

            {/* Distance Filter */}
            <div class="hold">
              <div className="filter-holder">
                <div className="dropdown">
                  <button onclick="dropit('distance-choice')" id="distance-butt" className="dropbtn">
                    Distance
                </button>

                  <div id="distance-choice" className="dropdown-content">
                    <a href="#" onclick="chooseOption('distance-butt', '0-2')">
                      0-2 Miles
                  </a>
                    <a href="#" onclick="chooseOption('distance-butt', '3-5')">
                      3-5 Miles
                  </a>
                    <a href="#" onclick="chooseOption('distance-butt', '6-10')">
                      6-10 Miles
                  </a>
                    <a href="#" onclick="chooseOption('distance-butt', '11+')">
                      11+ Miles
                  </a>
                  </div>
                </div>
              </div>

              {/* Time Filter */}
              <div className="filter-holder">
                <div className="dropdown">
                  <button
                    onclick="dropIt('Time')"
                    id="time-butt"
                    className="dropbtn"
                  >
                    Time
                </button>
                  <div id="Time" className="dropdown-content">
                    <a href="#" onclick="chooseOption('time-butt', 'Morning')">
                      Morning
                  </a>
                    <a href="#" onclick="chooseOption('time-butt', 'Afternoon')">
                      Afternoon
                  </a>
                    <a href="#" onclick="chooseOption('time-butt', 'Evening')">
                      Evening
                  </a>
                  </div>
                </div>
              </div>

              {/* Duration Filter */}
              <div className="filter-holder">
                <div className="dropdown">
                  <button
                    onclick="dropIt('Duration')"
                    id="duration-butt"
                    className="dropbtn"
                  >
                    Duration
                </button>
                  <div id="Duration" className="dropdown-content">
                    <a href="#" onclick="chooseOption('duration-butt', '1-4')">
                      1-4 Hours
                  </a>
                    <a href="#" onclick="chooseOption('duration-butt', '1 Day')">
                      1 Day
                  </a>
                    <a href="#" onclick="chooseOption('duration-butt', '1 Week')">
                      1 Week
                  </a>
                    <a
                      href="#"
                      onclick="chooseOption('duration-butt', 'Ongoing')"
                    >
                      Ongoing
                  </a>
                  </div>
                </div>
              </div>

              <div className="filter-holder">
                <div className="dropdown">
                  <button
                    onclick="dropIt('Projects')"
                    id="projects-butt"
                    className="dropbtn"
                  >
                    Projects
                </button>
                  <div id="Projects" className="dropdown-content">
                    <a
                      href="#"
                      onclick="chooseOption('projects-butt', 'Furniture Project')"
                    >
                      Furniture project
                  </a>
                    <a
                      href="#"
                      onclick="chooseOption('projects-butt', 'Family matters')"
                    >
                      Family matters
                  </a>
                    <a
                      href="#"
                      onclick="chooseOption('projects-butt', 'Life Skills')"
                    >
                      Life skills
                  </a>
                    <a
                      href="#"
                      onclick="chooseOption('projects-butt', 'Home for Good')"
                    >
                      Home for Good
                  </a>
                  </div>
                </div>
              </div>

              <div className="filter-holder">
                <div className="dropdown">
                  <button
                    onclick="dropIt('Availability')"
                    id="availability-butt"
                    className="dropbtn"
                  >
                    Duration
                </button>
                  <div id="Availability" className="dropdown-content">
                    <a
                      href="#"
                      onclick="chooseOption('availability-butt', 'Monday')"
                    >
                      Monday
                  </a>
                    <a
                      href="#"
                      onclick="chooseOption('availability-butt', 'Tuesday')"
                    >
                      Tuesday
                  </a>
                    <a
                      href="#"
                      onclick="chooseOption('availability-butt', 'Wednesday')"
                    >
                      Wednesday
                  </a>
                    <a
                      href="#"
                      onclick="chooseOption('availability-butt', 'Thursday')"
                    >
                      Thursday
                  </a>
                    <a
                      href="#"
                      onclick="chooseOption('availability-butt', 'Friday')"
                    >
                      Friday
                  </a>
                    <a
                      href="#"
                      onclick="chooseOption('availability-butt', 'Saturday')"
                    >
                      Saturday
                  </a>
                    <a
                      href="#"
                      onclick="chooseOption('availability-butt', 'Sunday')"
                    >
                      Sunday
                  </a>
                  </div>
                </div>
              </div>

            </div>
            <div className="potential-roles">
              <div className="roles-holder">
                <button type="button" className="collapsible" onclick="showRole('jazz')">
                  <b>Role Title:</b> Bee movie enthusiast
                </button>
                <div className="content" id="jazz">
                  <p>
                    According to all known laws of aviation,
                    <br />
                    there is no way a bee should be able to fly.
                    <br />
                    Its wings are too small to get its fat little body off the
                    ground.
                    <br />
                    The bee, of course, flies anyway
                    <br />
                    because bees don't care what humans think is impossible.
                  </p>
                  <button className="apply-button">Apply</button>
                </div>
                
                <button type="button" className="collapsible">
                  <b>Role Title:</b> Shrek Narrator
                </button>
                <div className="content">
                  <p>
                    People used to call me a monster
                    <br />
                    and for a long time I believed them
                    <br />
                    But after a while you learn to ignore the names people call you
                    <br />
                   and just trust who you are


                  </p>
                  <button className="apply-button">Apply</button>
                </div>
                <button type="button" className="collapsible">
                  <b>Role Title:</b> Home Alone Fanatic
                </button>
                <div className="content">
                  <p>
                    I took a shower washing every body part with actual soap,
                    <br />
                    including all my major crevices…
                    <br />
                    including in between my toes and in my belly button,
                    <br />
                    which I never did before but sort of enjoyed.”


                  </p>
                  <button className="apply-button">Apply</button>
                </div>


              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
