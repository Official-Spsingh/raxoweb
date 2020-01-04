import React from 'react';
import HeaderComponent from '../HeaderComponent';
import TitleBoxComponent from '../TitleBoxComponent';
import HomePageContentContainer from '../HomePageContentContainer';
import GrowYourBuisness from '../GrowYourBuisness';
const LandingPageContainer = (props) => {
    return (
        <div className="landing-page-container">
            <HeaderComponent />
            <TitleBoxComponent />
            <HomePageContentContainer title="Delivering Digital Experience">
                <p> A paragraph is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences.A paragraph is a self-contained unit of a discourse in writing dealing with a particular point or idea.A paragraph is a self-contained unit of a discourse in writing dealing with a particular point or idea.A paragraph is a self-contained unit of a discourse in writing dealing with a particular point or idea.</p>
            </HomePageContentContainer>
            <HomePageContentContainer title="Manage Handle Grow Your Business With Us">
                <GrowYourBuisness />
            </HomePageContentContainer>
            <HomePageContentContainer title="Manage Handle Grow Your Business With Us">
                <h1>Hello content</h1>
                <h1>Hello content</h1>
                <h1>Hello content</h1>
            </HomePageContentContainer>

        </div>
    )
}
export default LandingPageContainer