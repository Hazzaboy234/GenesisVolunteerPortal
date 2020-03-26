import React, { Component } from "react";

class DropDownElement extends Component {
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick(){
        this.props.onClick(this.props.title)
        this.props.setActive(this.props.title)
    }
    render() {
        var className = "drop-title" + (this.props.active===true?" active":"")
        return (
            <li className="drop-element" onClick={this.onClick}>
                <span className={className}>{this.props.title}</span>
                <span className="drop-icon">></span>
            </li>
        )
    }
}

export class DropDownMenu extends Component {
    constructor(props){
        super(props);
        this.state = {active:this.props.filters[0]}        
    }
    setActive(filter){
        this.setState({active:filter})
    }
    render() {
        var elements = this.props.filters
        //elements[this.state.active].active=true        
        var els = elements.map((element) => <DropDownElement title={element} active={this.state.active===element} setActive={this.setActive.bind(this)} onClick={this.props.sort} />)

        return (
            <div className="drop-container">
                <link rel="stylesheet" href={require("./DropDownMenu.css")} />
                <ul className="drop-list">                    
                    {els}
                </ul>
            </div>
        )
    }
}