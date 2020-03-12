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
import { Policy } from './components/Policy';
import { Help } from './components/Help';
import { Contacts } from './components/Contacts';
import { Calendar } from './components/Calendar';




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
        <Route path='/policies' component={Policy} />
        <Route path='/help' component={Help} />
        <Route path='/contacts' component={Contacts} />
        <Route path='/calendar' component={Calendar} />
      </Layout>
    );
  }
}
