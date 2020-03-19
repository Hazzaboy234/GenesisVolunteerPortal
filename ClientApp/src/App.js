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
import { Boilerplate } from './components/Boilerplate';
import { Settings } from './components/Settings';
import { Policy } from './components/Policy';
import { Help } from './components/Help';
import { ProjectsMain } from './components/Projects-main';
import { Contacts } from './components/Contacts';
import { Calendar } from './components/Calendar';
import { Profile } from './components/Profile';




export default class App extends Component {
  static displayName = App.name;
  
  render () {
    return (
      <Layout>
        <Route exact path='/' component={Login} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/dogs' component={Boilerplate} />
        <Route path='/settings' component={Settings} />
        <Route path='/policies' component={Policy} />
        <Route path='/help' component={Help} />
        <Route path='/projects-main' component={ProjectsMain} />
        <Route path='/contacts' component={Contacts} />
        <Route path='/calendar' component={Calendar} />
        <Route path='/profile' component={Profile} />
      </Layout>
    );
  }
}
