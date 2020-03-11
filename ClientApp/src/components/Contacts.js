import React,{Component} from "react";
import { Footer } from "./Footer";
import { NavigationBar } from "./NavigationBar";

/**Useful Notes!
 * All tags must have an ending tag
    e.g. change <link> tags to <link/> or <img> to <img/>
 * Link style sheets at the top of our container div:
    <link rel="stylesheet" href={require("./stylesheet.css")}/>
    change all src="" attributes to src={require("./Resources/image.png")}
* Change all instances of "class" to "className"
 */

export class Contacts extends Component{    

    componentDidMount(){
        document.title="Contacts";
    }

    render(){
        return(
            <div>
                
                <link rel="stylesheet" href={require("./main.css")}/>
                <link rel="stylesheet" href={require("./contacts.css")}/>

                <NavigationBar/>
                <div className="contacts-container">
            

                <div className="title-container">
                    <center><h1>Contacts</h1></center>
                </div>
                

                <div className="column-container">
                    <div className="phone-container">
                        <center>
                        <img alt="Genesis Trust" src={require("./Resources/icons8-online-support-100 (2).png")}width="100px" />
               
                        </center>

                            <h2><br/><br/>Contact us by phone</h2>
                            <h4>General Enquiries Telephone:
                                <a href="tel:01225 463549">01225 463549</a>
                            </h4>

                            <h4>Furnature Donations Telephone:
                                <a href="tel:01225 421111">01225 421111</a>
                            </h4>
                    </div>

                    <div className="email-container">
                        <center>
                        <img alt="Genesis Trust" src={require("./Resources/icons8-email-150 (1).png")}width="100px" />
             
                        
                        </center>

                        <h2><br/><br/>Contact us by email</h2>
                        
                        <h4>General Enquiries Email:
                            <a href="mailto:office@genesistrust.org.uk">office@genesistrust.org.uk</a>
                        </h4>
                        <h4>Furnature Donations Email:
                            <a href="mailto:furniture@genesistrust.org.uk">furniture@genesistrust.org.uk</a>
                        </h4>
                    </div>

                    <div className="address-container">
                        <center>
                        <img alt="Genesis Trust" src={require("./Resources/icons8-location-100 (1).png")}width="100px" />
             
                           </center>
                        <h2><br/><br/>Address</h2>
                        <h3>The Old School House,<br/>
                            St John's Court,<br/>
                            South Parade,<br/>
                            Bath BA2 4AF</h3>
                                
                            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2490.2687347372707!2d-2.3558101500000004!3d51.3797388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sThe%20Old%20School%20House%2C%20St%20John%E2%80%99s%20Court%2C%20South%20Parade%2C%20Bath%20BA2%204AF!5e0!3m2!1sen!2suk!4v1582993124167!5m2!1sen!2suk" 
                            width="300px" 
                            height="200px"  
                            frameborder="0px" 
                            style={{border:'0px'}}
                           
                            allowfullscreen=""></iframe>
                    </div>
                </div>
               
              
        </div> 
        <Footer/>
            </div>
        )
    }
}

