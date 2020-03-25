import React, { Component } from "react";

class DropDownElement extends Component {
    render() {
        return (
            <li className="drop-element" onClick={()=>this.props.onClick(this.props.title)}>{this.props.title}<span className="drop-icon">></span></li>
        )
    }
}

export class DropDownMenu extends Component {
    render() {
        var elements = [
            {
                title: "title",
            },
            {
                title: "date"
            },
            {
                title: "distance"
            },
            {
                title: "duration"
            }
        ]
        var els = elements.map((element) => <DropDownElement onClick={this.props.sort} title={element.title} />)

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