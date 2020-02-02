import React from 'react';
import BootCampFirstComponent from '@modules/BootCampFirstComponent';
import BootCampSecondComponent from '@modules/BootCampSecondComponent';
import BootCampThirdComponent from '@modules/BootCampThirdComponent';
const BootCampContainer = (props) => {
    return (
        <div className="bootcamp-container">
            <BootCampSecondComponent/>
            <BootCampFirstComponent />
            <BootCampThirdComponent/>
        </div>
    )
}
export default BootCampContainer
