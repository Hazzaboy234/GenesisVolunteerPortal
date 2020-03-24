import React, { Component } from "react";
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

export class newHelp extends Component {

    componentDidMount() {
        document.title = "newHelp";
    }

    render() {
        return (
            <div>
                <link rel="stylesheet" href={require("./main.css")} />
                <link rel="stylesheet" href={require("./help.css")} />

                <NavigationBar />


                <div class="row">
                    <div class="column"></div>
                    <div class="column"></div>
                </div>

                <Footer />
            </div>
        )
    }
}




