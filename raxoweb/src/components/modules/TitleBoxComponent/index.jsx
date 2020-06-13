import React from 'react';
const image = require('@media/svg/frontpage.svg')
const TitleBoxComponent = (props) => {
    return (
        <div className="title-box-component-main-container">
            {/* <div className="title-box-left-content-container">
                <div className="image-holder">
                    <img src={image} alt="Loading ..." />
                </div>
            </div> */}
            <div className="title-box-right-content-container">
                <div className="title-container">
                    <h3 className="sub-sub-heading">
                        Enhance your success with us
                    </h3>
                    <h1 className="main-heading">
                        Solutions for the connected world
                    </h1>
                    <h2 className="sub-heading">
                        Web Design | Mobile Apps | Business solutions
                    </h2>
                    <div className="learn-more-button">
                        <h2>CALL US NOW</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TitleBoxComponent;
