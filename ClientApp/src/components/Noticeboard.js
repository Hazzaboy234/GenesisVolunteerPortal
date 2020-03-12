import React,{Component} from "react";

/**Useful Notes!
 * All tags must have an ending tag
    e.g. change <link> tags to <link/> or <img> to <img/>
 * Link style sheets at the top of our container div:
    <link rel="stylesheet" href={require("./stylesheet.css")}/>
    change all src="" attributes to src={require("./Resources/image.png")}
* Change all instances of "class" to "className"
 */

export class Noticeboard extends Component{    

    componentDidMount(){
        document.title="Noticeboard";
    }

    render(){
        return(
            <div>
                <link rel="stylesheet" href={require("./Noticeboard.css")}/>

            </div>
        )
    }
}