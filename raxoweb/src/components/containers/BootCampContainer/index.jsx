import React from 'react';
import BootCampFirstComponent from '@modules/BootCampFirstComponent';
import BootCampSecondComponent from '@modules/BootCampSecondComponent';
import BootCampThirdComponent from '@modules/BootCampThirdComponent';
import BootCampFourthComponent from '@modules/BootCampFourthComponent';
import BootCampFifthContainer from '../../modules/BootCampFifthComponent';
import HomePageContentContainer from "@containers/HomePageContentContainer";
import Courses from "@modules/Courses";
const BootCampContainer = (props) => {
    return (
        <div className="bootcamp-container">
            <BootCampFirstComponent />
            <BootCampFourthComponent />
            <BootCampSecondComponent />
            <HomePageContentContainer title="Our Courses">
            <Courses/>
            </HomePageContentContainer>
            <BootCampThirdComponent />
            {/* <BootCampFifthContainer/> */}
        </div>
    )
}
export default BootCampContainer
