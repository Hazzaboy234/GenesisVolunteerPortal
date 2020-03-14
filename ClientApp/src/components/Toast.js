import React,{Component} from "react";

export class Toast extends Component{
    constructor(props){
        super(props);
        this.state={
            visible:true
        }
    }
    
    render(){
        var type = this.props.type!=undefined ? (" "+this.props.type) : ""
        var className = "toast_" + (this.state.visible===false?" hidden":"") + type
        
        return(            
            <div className={className} onMouseDown={()=>this.setState({visible:false})}>
                <link rel="stylesheet" href={require("./toast.css")}/>
                <span>{this.props.message}</span>
            </div>
        )
    }
}