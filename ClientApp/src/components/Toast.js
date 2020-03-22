import React,{Component} from "react";

export class Toast extends Component{
    constructor(props){
        super(props);        
        this.state={
            visible:true
        }
    }
    
    render(){        
        var type = this.props.type!==undefined ? (" "+this.props.type) : "";
        var visiblity = (this.state.visible == false || this.props.message==undefined?" hidden":"");
        var className = "toast_" +visiblity +type;
        return(
            <div className={className} onMouseUp={()=>this.setState({visible:false})}>
                <link rel="stylesheet" href={require("./toast.css")}/>
                <span>{this.props.message}</span>
            </div>
        )
    }
}