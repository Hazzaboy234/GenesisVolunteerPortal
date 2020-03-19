import React, { Component } from 'react';
/*
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import {NavigationBar} from "./NavigationBar";
//import "./NavigationBar.css";

import { Footer } from './Footer';*/
import {Toast} from "./Toast";
export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    //this.props.children.map((child)=>child.props.toastHandler=()=>console.log("hello"))
    return (
      <div>
          {this.props.children}
        
      </div>
    );
  }
}
