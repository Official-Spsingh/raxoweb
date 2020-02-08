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
<<<<<<< HEAD
            <BootCampFourthComponent />
            <BootCampSecondComponent />
            <BootCampThirdComponent />
=======
             <BootCampFourthComponent/>
             <BootCampSecondComponent/>            
             <BootCampThirdComponent/>
             {/* <BootCampFifthContainer/> */}
>>>>>>> 3fac79e00539ac844bf1032ac9d674a2a09c9f0a
        </div>
    )
}
export default BootCampContainer
