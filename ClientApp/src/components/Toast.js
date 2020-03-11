import React,{Component} from "react";

export class Toast extends Component{
    constructor(props){
        super(props);
        this.state={
            visible:true
        }
    }
    
    render(){
        var className = "toast_ " + this.props.type + " "+ (this.state.visible===false ? "hidden": "show");
        //alert(className);
        return(            
            <div className={className} onClick={()=>this.setState({visible:false})}>
                <link rel="stylesheet" href={require("./toast.css")}/>
                <span>{this.props.message}</span>
            </div>
        )
    }
}