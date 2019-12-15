import React from 'react';
import HeaderComponent from '../HeaderComponent';
import TitleBoxComponent from '../TitleBoxComponent';
const LandingPageContainer = (props) => {
    return (
        <div className="landing-page-container">
            <HeaderComponent />
            <TitleBoxComponent />
        </div>
    )
}
export default LandingPageContainer