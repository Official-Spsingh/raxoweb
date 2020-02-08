import React from 'react';
import BootCampFirstComponent from '@modules/BootCampFirstComponent';
import BootCampSecondComponent from '@modules/BootCampSecondComponent';
import BootCampThirdComponent from '@modules/BootCampThirdComponent';
import BootCampFourthComponent from '@modules/BootCampFourthComponent';
import BootCampFifthContainer from '../../modules/BootCampFifthComponent';
const BootCampContainer = (props) => {
    return (
        <div className="bootcamp-container">
            <BootCampFirstComponent />
             <BootCampFourthComponent/>
             <BootCampSecondComponent/>            
             <BootCampThirdComponent/>
             {/* <BootCampFifthContainer/> */}
        </div>
    )
}
export default BootCampContainer
