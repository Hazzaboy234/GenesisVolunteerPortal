import React, { Component } from "react";

export class Logout extends Component {
    constructor(props){
        super(props);
        this.state = {message:""}
    }

    clearCookies(){
        document.cookie = null;
    }
    redirect(){
        window.location.replace("/");
    }
    componentDidMount(){
        var steps = [
            {
                action:this.clearCookies,
                message:"Clearing cookies..."
            },
            {
                action:this.redirect,
                message:"Redirecting page..."
            }
        ]
        var i = 0;
        var interval = setInterval(function(){                    
            this.setState({message:steps[i].message})
            steps[i].action()        
            i++;
            if(i >= steps.length) clearInterval(interval)
        }.bind(this),1000)

    }
    render(){
        return(
            <div>
                {this.state.message}
            </div>
        )
    }
    
}
