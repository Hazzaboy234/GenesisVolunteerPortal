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
//import { Boilerplate } from './components/Boilerplate';
import {Boilerplate} from "./components/Boilerplate"
import { Settings } from './components/Settings';
import { Policy } from './components/Policy';
import { Help } from './components/Help';
import { ProjectsMain } from './components/Projects-main';
import { Contacts } from './components/Contacts';
import { Calendar } from './components/Calendar';
import { Toast } from './components/Toast';
import { Profile } from './components/Profile';
import {Roles} from "./components/Roles"
import {Logout} from "./components/Logout"


export default class App extends Component {
  static displayName = App.name;

  constructor(props) {
    super(props);
    this.state = { toast: <Toast /> }    
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

  render() {
    return (
      <Layout>
        {this.state.toast}
        <Route exact path='/' render={(props) => <Login openToast={this.openToast.bind(this)} />} hideToast={this.hideToast.bind(this)}/>
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
        <Route path='/logout' component={Logout} />
      </Layout>
    );
  }
}
