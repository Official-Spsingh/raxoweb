import React from "react";
import TitleBoxComponent from "../TitleBoxComponent";
import HomePageContentContainer from "../HomePageContentContainer";
import GrowYourBuisness from "../GrowYourBuisness";
import WhatWeDo from "../WhatWeDo";
import BootCamp from "../BootCamp";
import ContactUs from "../ContactUsComponent";
const LandingPageContainer = props => {
  return (
    <div className="landing-page-container">
      <TitleBoxComponent />
      <HomePageContentContainer title="Delivering Digital Experience">
        <p>
          We help you to present yourself ravishing digitally. Manage your
          people, work efficiently in a manner never done. Data handling and
          analysys made easy, fast and in a creative manner.
        </p>
      </HomePageContentContainer>
      <HomePageContentContainer title="Manage Handle Grow Your Business With Us">
        <GrowYourBuisness />
      </HomePageContentContainer>
      <HomePageContentContainer title="What We Do">
        <WhatWeDo />
      </HomePageContentContainer>
      <HomePageContentContainer
        title="BootCamp"
        subTitle="Spending Hours In Coaching Still Feel less Confident !"
      >
        <BootCamp />
      </HomePageContentContainer>
      <HomePageContentContainer
        title="Contact Us"
        subTitle="Schedule a meeting with us !"
      >
        <ContactUs />
      </HomePageContentContainer>
    </div>
  );
};
export default LandingPageContainer;
