import React, { Component } from 'react';
import LandingComponent from '../LandingComponent';
import OurServices from '../OurServices';
import OurTeam from '../OurTeam';
import AboutUs from '../AboutUs';
import ContactUs from '../ContactUs';
import FooterComponent from '../FooterComponent';
import BlogsComponent from '../BlogsComponent/BlogsComponent';

export default class MainComponent extends Component {
  render() {
    return (
      <div className="RaxoWeb" id="RaxoWeb">
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

