import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

import './custom.css'
import { MapContainer } from './components/MapContainer';
import { Login } from './components/Login';
import { Signup } from './components/Signup';

export default class App extends Component {
  static displayName = App.name;
  
  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/dashboard' component={MapContainer} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
      </Layout>
    );
  }
}
