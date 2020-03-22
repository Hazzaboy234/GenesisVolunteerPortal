import React, { Component } from "react";
import { Dropdown } from "./Dropdown";
import { Footer } from "./Footer";
import { NavigationBar } from "./NavigationBar";


export class Roles extends Component {
  render() {
    return (
      <div>
        <link rel="stylesheet" href={require("./Roles.css")} />
        <NavigationBar active={1}/>
        <div className="big-ol-container">
          <div className="filter-container">
            <div className="dates-container, filter-holder">
              <form action="/action_page.php">
                <label for="date-choice">Choose Date: </label>
                <input type="date" id="date-choice" name="date-choice" />
              </form>
            </div>

            {/* Distance Filter */}
            <div className="filter-holder">
              <div className="dropdown">
                <button
                  onclick="dropIt('distance-choice')"
                  id="distance-butt"
                  className="dropbtn"
                >
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
            <div classNameName="filter-holder">
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
            <div className="potential-roles">
              <div className="roles-holder">
                <button type="button" className="collapsible">
                  <b>Role Title:</b> short role description
                </button>
                <div className="content">
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
                  <b>Role Title:</b> short role description
                </button>
                <div className="content">
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
              </div>
            </div>
          </div>
          <Footer/>
          
      </div>
      </div>
    );
  }
}
