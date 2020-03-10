import React,{Component} from "react";

export class Boilerplate extends Component{
    render(){
        return(
            <div>
                <link rel="stylesheet" href={require("./boilerplate.css")}/>
                Content here
            </div>
        )
    }
}