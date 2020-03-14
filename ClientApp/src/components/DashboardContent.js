import React, { Component } from "react";
import { Map } from "./Map";
import { Noticeboard } from "./Noticeboard";
export class DashboardContent extends Component {
    render() {
        var content = [
            {
                key:0,
                title:"Map",
                component:<Map/>
            },
            {
                key:1,
                title:"Noticeboard",
                component:<Noticeboard/>
            }            
        ]
        return (
            <div className="main-container">
                <ContentMenu content={content}/>
            </div>

        )
    }
}


class NavItem extends Component {
    render() {
        var className = "map-nav-item" + (this.props.active != undefined ? " active" : "");
        return (
            <li onClick={()=>this.props.onClick(this.props.id)} className={className}><a>{this.props.title}</a></li>
        )
    }
}

class ContentMenu extends Component {
    constructor(props){
        super(props);
        this.state = {active:0}
    }

    clickHandler(clickedItemKey){        
        this.setState({active:clickedItemKey})
    }

    render() {
        var menuItems = []
        this.props.content.map((item) => menuItems.push(<NavItem key={item.key} id={item.key} onClick={this.clickHandler.bind(this)} title={item.title}/>))
        return (
            <div className="map-container">
                <nav id="map-nav">
                    <ul>
                        {menuItems}
                    </ul>
                </nav>

                <div className="map">
                    {this.props.content[this.state.active].component}
                </div>
            </div>
        )
    }
}