import React, { Component } from "react";
import { Footer } from "./Footer";
import { NavigationBar } from "./NavigationBar";

export class Profile extends Component {

    componentDidMount() {
        document.title = "Genesis Trust: Profile";
    }

  
    readURL(input) {
        if (input.files && input.files[0]) {
          var reader = new FileReader();
      
          reader.onload = function(e) {
            ('#image-preview').attr('src', e.target.result);
          }
      
          reader.readAsDataURL(input.files[0]);
        }
      }
      




    render() {
        return (
            <div>
                <link rel="stylesheet" href={require("./main.css")} />
                <link rel="stylesheet" href={require("./profile.css")} />
               

                <NavigationBar />
                <div className="main-container">

                    <div className="profile-container">

                        <div className="image-container">

                            <br></br><br></br><br></br>
                            <img className="profile-image" src={require("./Resources/ProfilePicture.jpg")} />

                            <label for="image-picker">
                                <img id="image-preview"className="profile-image"  alt="Change Image" />
                            </label>
                            <input id="image-picker" type="file" accept="image/*" />

                           
                        </div>


                        <div className="details-container">
                            <ul className="details-ul">
                                <br></br><br></br>
                                <li className="details-label">Name</li>
                                <li className="details-element">Clive Alive</li>
                                <li className="details-label">Email</li>
                                <li className="details-element">clive.alive@gmail.com</li>
                                <li className="details-label">Current Roles</li>
                                <li className="details-element">Gardener</li>
                                <li className="details-element">Furniture Shop Assistant</li>
                                <li className="details-label">Applications</li>
                                <li className="details-element">Soup Runner</li>
                            </ul>
                        </div>
                    </div>

                    <div className="calendar-container">
                        <br></br><br></br>
                        <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%2344b749&amp;ctz=Europe%2FLondon&amp;src=OG5jcm5iaW01NTVwaGx0dXRyODdhMHJnc2dAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23EF6C00&amp;mode=MONTH&amp;showPrint=0&amp;showTabs=1&amp;showTz=0&amp;showCalendars=0&amp;showNav=1&amp;showTitle=0&amp;showDate=1"
                            style={{ borderWidth: 0 }}
                            width="800" height="600" frameborder="0"
                            scrolling="no"></iframe>

                    </div>


                </div>



                <Footer />
            </div>
        )
    }
}