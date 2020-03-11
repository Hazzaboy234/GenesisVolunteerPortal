import React,{Component} from "react";

/**Useful Notes!
 * All tags must have an ending tag
    e.g. change <link> tags to <link/> or <img> to <img/>
 * Link style sheets at the top of our container div:
    <link rel="stylesheet" href={require("./stylesheet.css")}/>
    change all src="" attributes to src={require("./Resources/image.png")}
* Change all instances of "class" to "className"
* Change all style="" to style={{}}
    for each of your attributes, add a pair to the style {{}} object like this:
        attr1:"val1"
        (separated by commas)
    e.g. style="text-align:center,font-size:1em" to style={{textAlign:"center","fontSize:1em"}}
    (Notice change from hyphens to camelcase)
 */

export class Boilerplate extends Component{    
    constructor(props){
        super(props);
        this.state={active:false}
        this.flip = this.flip.bind(this);
    }

    componentDidMount(){
        document.title="Boilerplate";
    }

    //Flips the state variable active between true and false
    flip(){
        this.setState({active:this.state.active===false?true:false});
        /*
        this is the same as:
        if(this.state.active===true){
            this.setState({active:false});
        }else{
            this.setState({active:true});
        }
        It's just in one line. this is called the ternary operator:
        condition ? valueIfTrue : valueIfFlase
        */
    }

    render(){
        return(
            <div className="boilerplate-container">
                <link rel="stylesheet" href={require("./boilerplate.css")}/>

                <button className="paragraph" onMouseUp={this.flip}>Click me</button>
                <span>The button is {this.state.active===true?"active!":"inactive!"}</span>
            </div>
        )
    }
}

