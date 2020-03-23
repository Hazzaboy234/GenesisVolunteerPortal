import React,{Component} from "react";

/**Useful Notes!
 * All tags must have an ending tag
    e.g. change <link> tags to <link/> or <img> to <img/>
 * Link style sheets at the top of our container div:
    <link rel="stylesheet" href={require("./stylesheet.css")}/>
    change all src="" attributes to src={require("./Resources/image.png")}
* Change all instances of "class" to "className"
 */

export class Boilerplate extends Component{    

    componentDidMount(){
        document.title="Boilerplate";
    }

    render(){
        return(
            <div>
                <link rel="stylesheet" href={require("./boilerplate.css")}/>
                <p className="paragraph">
                    Content Here
                </p>
            </div>
        )
    }
}

