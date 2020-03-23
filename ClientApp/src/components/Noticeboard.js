import React,{Component} from "react";

/**Useful Notes!
 * All tags must have an ending tag
    e.g. change <link> tags to <link/> or <img> to <img/>
 * Link style sheets at the top of our container div:
    <link rel="stylesheet" href={require("./stylesheet.css")}/>
    change all src="" attributes to src={require("./Resources/image.png")}
* Change all instances of "class" to "className"
 */

class Notice extends Component{
    render(){
        return(
            <div className="notice-container">
                <div className="notice-header">
                    <span className="title">{this.props.title}</span>
                    <span className="date">{this.props.date}</span>
                </div>
                <div className="notice-body">
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}   
export class Noticeboard extends Component{    
    constructor(props){
        super(props);
        this.state={
            mode:1

        }
    }

    render(){
        return(
            <div className="noticeboard">
                <link rel="stylesheet" href={require("./Noticeboard.css")}/>
                <Notice title="Welcome to GT" date="12/03/2020" description="Welcome to our platform :    Here at Genesis Trust we help bring the community together to offer immediate practical help to people who are hungry, homeless and vulnerable and provide long-term opportunities for them to rebuild their lives. We work individually with people on their journey from despair to hope, from crisis to independence."/>
                <Notice title="Policies Update" date="16/03/2020" description="As a charity it is in our best interest to keep you as volunteers safe. That is why we find it so important to keep our policies up to date and ready to access at any time. If you want to have a look at our updated policies, simply click on the 'Policies' tab at the top of this page"/>
                <Notice title="Coronavirus & Our events" date="19/03/2020" description="It has come to our attention that coronavirus... is taking over the country. I know it can be scary for you, but can you imagine living on the streets during these times of crisis. Please spare a thought for those less fortunate than yourselves and do what you can to help!"/>
            </div>
        )
    }
}