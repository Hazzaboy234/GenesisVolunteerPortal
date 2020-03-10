import React,{Component} from "react";

/**Useful Notes!
 * All tags must have an ending tag
    e.g. change <link> tags to <link/> or <img> to <img/>
 * Link style sheets at the top of our container div:
    <link rel="stylesheet" href={require("./stylesheet.css")}/>
    change all src="" attributes to src={require("./Resources/image.png")}
* Change all instances of "class" to "className"
* Change all style="" to style={{}}
    for each of your attributes, add a pair to the style {{}} object like this:
        attr1:"val1"
        (separated by commas)
    e.g. style="text-align:center,font-size:1em" to style={{textAlign:"center","fontSize:1em"}}
    (Notice change from hyphens to camelcase)
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

