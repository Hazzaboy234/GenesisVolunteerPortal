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

export class Help extends Component{    

    componentDidMount(){
        document.title="Help";
    }

    render() {
        return (
            <div>
                <link rel="stylesheet" href={require("./main.css")} />
                <link rel="stylesheet" href={require("./help.css")} />

                <NavigationBar />

                <div class="main-container">
                    <div class="header-container">


                        <h1>
                            FAQ's <br />
                        </h1>
                        <br />

                        <h3>
                            General Qs<br />
                        </h3>
                        <br />
                        <h4>
                            How can I help?
               </h4>
                        <h5>
                            There are many ways to help people in need, but finding a way that is convenient for you, and also helpful is a fine balance. Some ways you can help are:<br />
                   - Fundraising <br />
                   - Donating <br />
                   - Volunteering <br />
                   - Furnature Donation <br />
                        </h5>

                        <h4>
                            Is there anywhere that I can donate to the charity?<br />
                        </h4>
                        <h5>
                            Yes, please follow this link:
                    <a href="https://www.totalgiving.co.uk/donate/genesis-trust-bath">https://www.totalgiving.co.uk/donate/genesis-trust-bath</a> <br />
                        </h5>
                        <h4>
                            Where does my money go?<br />
                        </h4>
                        <h5>
                            All your money goes toards the running and maintaining of all our projects <br />
                        </h5>
                        <h4>
                            How old do I need to be to help?<br />
                        </h4>
                        <h5>
                            Anyone of any age can get involved at helping people, but we do ask for volunteers to be at least 18 years of age <br />
                        </h5>



                        <br /><br />
                        <h3>
                            Website Use<br />
                        </h3>
                        <br />
                        <h4>
                            How do I update my profile?<br />

                        </h4>
                        <h5>
                            Head over to the profile page (found at the top of this page) and click the 'Edit Profile' button </h5>
                        <h4>

                            How do I apply for a volunteering role?<br />

                        </h4>
                        <h5>
                            Navigate to the roles page via the navigation tab and browse the available roles. Give us a call and we are happy to talk to you about any role you wish to apply for.
                </h5>
                        <h4>
                            How can I change my settings?<br />
                        </h4>
                        <h5>
                            Head over to the 'settings' tab and choose which setting you wish to view
            </h5>
                        <h4>
                            How can I update my preferences?<br />
                        </h4>
                        <h5>
                            Your preferences can be found in the 'Settings' tab. Take a look and see what preferences you wish to update <br />
                        </h5>




                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

