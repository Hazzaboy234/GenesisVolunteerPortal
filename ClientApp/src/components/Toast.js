import React,{Component} from "react";

export class Toast extends Component{
    constructor(props){
        super(props);
        this.state={
            visible:false
        }
    }
    
    render(){
        return(            
            <div className={"toast_ "+this.props.type}>
                <link rel="stylesheet" href={require("./toast.css")}/>
                <span>{this.props.message}</span>
            </div>
        )
    }
}