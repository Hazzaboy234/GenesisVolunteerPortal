import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
//import { Home } from './components/Home';
/*
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
*/
import './custom.css'
import { Dashboard } from './components/Dashboard';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { Settings } from './components/Settings';
import { Policy } from './components/Policy';
import { Help } from './components/Help';
import { ProjectsMain } from './components/Projects-main';
import { Contacts } from './components/Contacts';
import { Calendar } from './components/Calendar';
import { Toast } from './components/Toast';
import { Profile } from './components/Profile';
import {Roles} from "./components/Roles"
import "./components/anims.css"
import { Redirecter } from './components/Redirecter';

export default class App extends Component {
  static displayName = App.name;

  constructor(props) {
    super(props);
    this.state = { 
      toast: <Toast /> ,
      cookie:null
    }
    this.updateCookie = this.updateCookie.bind(this);
    this.getCookie = this.getCookie.bind(this);
  }

  openToast(message, type) {
    //if (message == undefined || message == null) this.setState({ toast: null })
    if (type !== undefined) {
      this.setState({ toast: <Toast message={message} type={type} /> });
    } else {
      this.setState({ toast: <Toast message={message} /> });
    }
  }

  hideToast(){
    this.setState({toast:<Toast/>})
  }

  getCookie(field){
    if(field===undefined) return this.state.cookie
    else return this.state.cookie[field];
  }

  updateCookie(data){
    var suffix = "userdata=";
    var newCookie = this.state.cookie

    if(this.state.cookie===null) newCookie = {}
    Object.keys(data).forEach((key)=>newCookie[key]=data[key]);
    //newCookie["expires"] = "-1"
    document.cookie = (suffix+JSON.stringify(newCookie));    
    this.setState({cookie:newCookie});
  }

  componentDidMount(){
    document.cookie = "userdata="+JSON.stringify({firstName:"Sam",secondName:"Sogs",email:"juwonsogbesan@gmail.com"})+";"
    var suffix = "userdata=";
    var userdata = document.cookie.match("(X{.*?}){1}".replace("X",suffix))
    console.log(userdata)
    if(userdata!=null){// there is no valid cookie
    
      userdata = userdata[0]      
      console.log(userdata);
      userdata = JSON.parse(userdata.substring(suffix.length)) //turn it into a JSON object...  
    }
  
    this.setState({cookie:userdata});
  }

  render() {
    return (
      <Layout>
        {this.state.toast}        
        <Route exact path='/' render={(props) =>  <Login openToast={this.openToast.bind(this)} hideToast={this.hideToast.bind(this)} getCookie={this.getCookie} updateCookie={this.updateCookie}/>}/>
        <Route exact path='/login' render={(props) => <Redirecter interval={500} steps={[{action:()=>window.location.replace("/"),message:"Redirecting to login..."}]}/>}/>
        <Route path='/dashboard' render={(props) => <Dashboard openToast={this.openToast.bind(this)} hideToast={this.hideToast.bind(this)}/>}/>
        <Route path='/signup' render={(props)=> <Signup openToast={this.openToast.bind(this)} hideToast={this.hideToast.bind(this)}/>}/>
        <Route path='/settings' component={Settings} />
        <Route path='/policies' component={Policy} />
        <Route path='/help' component={Help} />
        <Route path='/projects' component={ProjectsMain} />
        <Route path='/contacts' component={Contacts} />
        <Route path='/calendar' component={Calendar} />
        <Route path='/profile' component={Profile} />
        <Route path='/ourroles' component={Roles} />
        <Route path='/logout' render={(props)=>
          <Redirecter interval={500} steps={[
          {action:()=>document.cookie = "userdata=expires"+new Date().toUTCString(),message:"Clearing cookies"},
          {action:()=>window.location.replace("/"),message:"Redirecting to login..."},        
        ]}/>} />
      </Layout>
    );
  }
}
