import React, { Component } from "react";

/**
 * Takes a bunch of functions (steps) and executes them all in series
 * Primary use: Clear up cookies & other user data before routing to another page
 */
export class Redirecter extends Component {
    constructor(props){
        super(props);
        this.state = {message:""}
    }
    componentDidMount(){
        var steps = this.props.steps;
        var i = 0;
        var interval = setInterval(function(){                    
            this.setState({message:steps[i].message})
            steps[i].action()        
            i++;
            if(i >= steps.length) clearInterval(interval)
        }.bind(this),this.props.interval)

    }
    render(){
        return(
            <span className="logout-container">
                <link rel="stylesheet" href={require("./Logout.css")}/>
                {this.state.message}
            </span>
        )
    }
    
}
