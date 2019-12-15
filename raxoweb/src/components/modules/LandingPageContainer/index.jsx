import React from 'react';
import HeaderComponent from '../HeaderComponent';
import TitleBoxComponent from '../TitleBoxComponent';
import HomePageContentContainer from '../HomePageContentContainer';
const LandingPageContainer = (props) => {
    return (
        <div className="landing-page-container">
            <HeaderComponent />
            <TitleBoxComponent />
            <HomePageContentContainer title="Delivering Digital Experience" subTitle="Manage Handle Grow Your Business With Us">
                <h1>Hello content</h1>
            </HomePageContentContainer>
        </div>
    )
}
export default LandingPageContainer