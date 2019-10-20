import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import MainComponent from './components/MainComponent';
import BlogsContainer from './components/BlogsComponent/BlogsContainer';
import NavbarComponent from './components/NavbarComponent';

import { BrowserRouter as Router, Route } from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
     <Router>
       <NavbarComponent/>
 <Route exact path="/" component={MainComponent} />
 <Route exact path="/blogs" component={BlogsContainer} />

     </Router>
     

      
    )
  }

}

