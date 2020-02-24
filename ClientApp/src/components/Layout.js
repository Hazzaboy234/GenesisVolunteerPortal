import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import {NavigationBar} from "./NavigationBar";
//import "./NavigationBar.css";
import { Footer } from './Footer';
export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        
          {this.props.children}
        
      </div>
    );
  }
}
