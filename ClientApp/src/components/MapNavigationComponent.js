import React, { Component } from "react";
import { Tooltip } from 'reactstrap';
export class MapNavigationComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { isTooltipOpen: false }

    }

    toggle = () => this.setState({ isTooltipOpen: !this.state.isTooltipOpen })

    render() {
        var id = "map-nav-" + this.props.text;
        console.log(this.state.isTooltipOpen);
        return (
            <li id={id} className="map-nav-item">
                <a>{this.props.text}</a>
                <Tooltip placement="top" isOpen={this.state.tooltipOpen} target={id} toggle={this.toggle}>
                    Hello world!
                </Tooltip>
                
            </li>
        )
    }
}