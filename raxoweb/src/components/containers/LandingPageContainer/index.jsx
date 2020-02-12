import React from "react";
import TitleBoxComponent from "@modules/TitleBoxComponent";
import HomePageContentContainer from "@containers/HomePageContentContainer";
import GrowYourBuisness from "@modules/GrowYourBuisness";
import WhatWeDo from "@modules/WhatWeDo";
import BootCamp from "@modules/BootCamp";
import ContactUs from "@modules/ContactUsComponent";
import BlogsComponent from "@modules/BlogsComponent";
const LandingPageContainer = props => {
  return (
    <div className="landing-page-container">
      <TitleBoxComponent />
      <HomePageContentContainer title="Delivering Digital Experience">
        <p>
          Digitally adapt design thinking process to deep examine your customers need.
          Make your oragnization alligned to future operation model.
          Manage your people, work efficiently in a manner never done. Data handling and
          analysis made easy, fast and in a creative manner. Adapt agility in your data 
          to make it more clear and usefull.

          {/* We help you to present yourself ravishing digitally. Manage your
          people, work efficiently in a manner never done. Data handling and
          analysys made easy, fast and in a creative manner. */}
        </p>
      </HomePageContentContainer>
      <HomePageContentContainer title="Manage Handle Grow Your Business With Us">
        <GrowYourBuisness />
      </HomePageContentContainer>
     
      <HomePageContentContainer
        title="BootCamp"
        subTitle="Master Coding with the guidance of experts"
      >
        <BootCamp />
      </HomePageContentContainer>
      <HomePageContentContainer title="What We Do">
        <WhatWeDo />
      </HomePageContentContainer>
      <HomePageContentContainer
        title="Blogs"
        subTitle="Read and Write Amazing blogs"
      >
        <BlogsComponent/>
      </HomePageContentContainer>
    
        <ContactUs />
      
    </div>
  );
};
export default LandingPageContainer;
