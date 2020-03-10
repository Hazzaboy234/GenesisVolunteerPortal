import React,{Component} from "react";

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

