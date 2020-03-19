import React, { Component } from "react";
import { Footer } from "./Footer";
import { NavigationBar } from "./NavigationBar";


export class Settings extends Component {
    render() {
        return (<div>
            <link rel="stylesheet" href={require("./Settings-page.css")} />
            <link rel="stylesheet" href={require("./main.css")} />

            <NavigationBar />

           


            <div class="content-container">

                <div className="title-container">
                    <center><br/><h1>Contacts</h1></center>
                </div>
              
                    
                    <div class="radiot">
                        Display Mode: <nbsp></nbsp><nbsp></nbsp><nbsp></nbsp><nbsp></nbsp>
                        </div>
                      <div class="display">  
                    <div class="radiob">
                        <input type="radio" id="light" name="display" value="light" />
                        <label for="Light">Light</label><br/>
                    </div>
                    <div class="radiob">
                        <input type="radio" id="dark" name="display" value="drak" />
                        <label for="Dark">Dark</label><br />
                    </div>
                </div>
                <br/>
               


                    <div class="radiot">
                        Volunteer Status:
                        </div>
                         <div class="status">
                    <div class="radiob">
                        <input type="radio" id="active" name="status" value="active" />
                        <label for="active">Active</label><br />
                    </div>
                    <div class="radiob">
                        <input type="radio" id="inactive" name="status" value="inactive" />
                        <label for="inactive">Inactive</label><br />
                    </div>
                </div>



                <div class="settings">
                    <br/>
                    <center><div class="radiot">
                        Account Options
                        </div></center>


                    <div class="button"><a href="./change_pass">Change Password</a>
                       
                            </div>
                            <br/>
                            

                            
                    <div class="button"><a href="./delete_acc">Delete Account</a>
                        
                         </div>
                         <br/>
                    <div class="button"><a href="./delete_acc">Log-out</a>
                     
                        </div><br></br>
                </div>
            </div>









            <Footer />

        </div>);
    }
}
