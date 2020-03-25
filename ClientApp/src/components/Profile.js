import React, { Component } from "react";
import { Footer } from "./Footer";
import { NavigationBar } from "./NavigationBar";

export class Profile extends Component {

    componentDidMount() {
        document.title = "Genesis Trust: Profile";
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
                      

                        <div className="details-container">
                            
                                <br></br><br></br>
                                <li className="details-big">First Name</li>
                                <li className="details-small">Clive</li>
                                <li className="details-big">Surname</li>
                                <li className="details-small">Alive</li>
                                <li className="details-big">Email</li>
                                <li className="details-small">clive.alive@gmail.com</li>
                                <li className="details-big">DOB</li>
                                <li className="details-small">6/9/1950</li>
                                
                            
                        </div>
                    </div>
                
                    
                    <div class="column2">

                    </div>
                       


                    <div class="column1">
                   
                    <li className="details-label">Current Roles</li>        
                        <li className="roles">Standard Volunteer</li>       <br></br> 
                        <li className="roles">Gardener</li>                 <br></br> 
                        <li className="roles">Basic Skills Teacher</li>     <br></br> 
                        <li className="roles">Furniture Shop Assistant</li> <br></br> 
                        <li className="roles">Food Bank Host</li>           <br></br> 
                        <li className="roles">Donations Manager</li>        <br></br> 
                       

                    </div>
                    <div class="column2">

</div>
                    <div class="column1">
        
                        <li className="details-label">Applications</li>                
                        <li className="applications">Young Carer</li>                   <div class="text">Progress</div>        <progress value = "168" max = "200"/>
                        <li className="applications">Health Care Advisor</li>           <div class="text">Progress</div>        <progress value = "130" max = "200"/>
                        <li className="applications">First Aider</li>                   <div class="text">Progress</div>        <progress value = "68" max = "200"/>
                        <li className="applications">Financial Support Worker</li>      <div class="text">Progress</div>        <progress value = "97" max = "200"/>
                        <li className="applications">Care Worker</li>                   <div class="text">Progress</div>        <progress value = "150" max = "200"/>
                        <li className="applications">Hair Dresser</li>                  <div class="text">Progress</div>        <progress value = "10" max = "200"/>
                    
                    </div>


                </div>
</div>


                <Footer />
            </div>
        )
    }
}