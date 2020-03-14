import React,{Component} from "react";

/**Useful Notes!
 * All tags must have an ending tag
    e.g. change <link> tags to <link/> or <img> to <img/>
 * Link style sheets at the top of our container div:
    <link rel="stylesheet" href={require("./stylesheet.css")}/>
    change all src="" attributes to src={require("./Resources/image.png")}
* Change all instances of "class" to "className"
 */

class Notice extends Component{
    render(){
        return(
            <div className="notice-container">
                <div className="notice-header">
                    <span className="title">{this.props.title}</span>
                    <span className="date">{this.props.date}</span>
                </div>
                <div className="notice-body">
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}   
export class Noticeboard extends Component{    
    constructor(props){
        super(props);
        this.state={
            mode:1

        }
    }
    componentDidMount(){
        document.title="Noticeboard";

    }

    render(){
        return(
            <div className="noticeboard">
                <link rel="stylesheet" href={require("./Noticeboard.css")}/>
                <Notice title="This is the title of the notice" date="12/03/2020" description="Welcome Guys"/>
                <Notice title="Welcome to GT" date="12/03/2020" description="Welcome Guys"/>
            </div>
        )
    }
}