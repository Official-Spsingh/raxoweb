import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import NavbarComponent from './components/NavbarComponent';
import LandingComponent from './components/LandingComponent';
import OurServices from './components/OurServices';
import OurTeam from './components/OurTeam';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import FooterComponent from './components/FooterComponent';
import BlogsComponent from './components/BlogsComponent';

export default class App extends Component {
  render() {
    return (
      <div className="RaxoWeb" id="RaxoWeb">
        <NavbarComponent />
        <LandingComponent />
        <OurServices />
        <hr></hr>
        <AboutUs />
        <hr></hr>
        <BlogsComponent/>
        <hr></hr>
        <OurTeam />
        <hr></hr>
        <ContactUs />
        <FooterComponent />

      </div>
    )
  }

}

