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



                <div class="row">
                    <div class="column1">
                        

                            <br></br><br></br><br></br>
                            <img className="profile-image" src={require("./Resources/ProfilePicture.jpg")} />

                            
                            <img id="image-preview"className="profile-image"  alt="Change Image" />
                            
                            <input id="image-picker" type="file" accept="image/*" />
                      

                        <div className="details-container">
                            <ul className="details-ul">
                                <br></br><br></br>
                                <li className="details-label">First Name</li>
                                <li className="details-element">Clive</li>
                                <li className="details-label">Surname</li>
                                <li className="details-element">Alive</li>
                                <li className="details-label">Email</li>
                                <li className="details-element">clive.alive@gmail.com</li>
                                <li className="details-label">DOB</li>
                                <li className="details-element">6/9/1950</li>
                                
                            </ul>
                        </div>
                    </div>
                
                    
                    <div class="column2">

                    </div>
                       


                    <div class="column1">
                   
                    <li className="details-label">Current Roles</li>
                        <li className="roles">Standard Volunteer</li>
                        <li className="roles">Gardener</li>
                        <li className="roles">Basic Skills Teacher</li>
                        <li className="roles">Furniture Shop Assistant</li>
                        <li className="roles">Food Bank Host</li>
                        <li className="roles">Soup Run Leader</li>
                        <li className="roles">Donations Manager</li>
                       

                    </div>
                    <div class="column2">

</div>
                    <div class="column1">
        
                        <li className="details-label">Applications</li>
                        <li className="details-element">Soup Runner</li>
                    
                    </div>


                </div>
</div>


                <Footer />
            </div>
        )
    }
}