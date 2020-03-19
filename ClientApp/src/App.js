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
import { Toast } from './components/Toast';




export default class App extends Component {
  static displayName = App.name;

  constructor(props) {
    super(props);
    this.state = { toast: <Toast /> }    
  }

  toastHandler(message, type) {
    //if (message == undefined || message == null) this.setState({ toast: null })
    if (type != undefined) {
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
        <Route exact path='/' render={(props) => <Login toastHandler={this.toastHandler.bind(this)} />} hideToast={this.hideToast.bind(this)}/>
        <Route path='/dashboard' render={(props) => <Dashboard toastHandler={this.toastHandler.bind(this)} />} />
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
