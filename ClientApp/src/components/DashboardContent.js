import React, { Component } from "react";
import { Map } from "./Map";
import { Noticeboard } from "./Noticeboard";
import { Calendar } from "react-calendar";
export class DashboardContent extends Component {
    constructor(props){
        super(props);


        this.state = {
            date:new Date(),
            events:{}
        }
        this.getEvent = this.getEvent.bind(this);
        
    }
    
    componentDidMount(){
        var e = {}
        //Loads dates in...
        e[new Date().getDate()] = "Pub Crawl";        
        this.setState({events:e})
    }
    getEvent(date){        
        var e = this.state.events[date.getDate()]
        return e!==undefined? e: ""
    }
    
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
            },
            {
                key:2,
                title:"Calendar",
                component:
                <div className="calendar-container">
                    <Calendar 
                    tileContent={(date,view)=> "\n\n"+this.getEvent(date.date)} 
                    value={this.state.date} 
                    onChange={()=>this.setState({date:new Date()})}
                    onClickDay={(day)=>this.getEvent(day)}
                    />
                </div>
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
        var className = "map-nav-item" + (this.props.active !== undefined ? " active" : "");
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
                <nav id="content-nav">
                    <ul>
                        {menuItems}
                    </ul>
                </nav>

                <div className="content-container">
                    {this.props.content[this.state.active].component}
                </div>
            </div>
        )
    }
}