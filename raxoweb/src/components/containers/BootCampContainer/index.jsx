import React from 'react';
import BootCampFirstComponent from '@modules/BootCampFirstComponent';
import BootCampSecondComponent from '@modules/BootCampSecondComponent';
import BootCampThirdComponent from '@modules/BootCampThirdComponent';
import HomePageContentContainer from '@containers/HomePageContentContainer';
import BootCampFourthComponent from '@modules/BootCampFourthComponent';
const BootCampContainer = (props) => {
    return (
        <div className="bootcamp-container">
            <BootCampSecondComponent />
            <BootCampFirstComponent />
            <BootCampThirdComponent />
            <HomePageContentContainer title="How are we creating the difference">
                <BootCampFourthComponent />
            </HomePageContentContainer>
        </div>
    )
}
export default BootCampContainer
