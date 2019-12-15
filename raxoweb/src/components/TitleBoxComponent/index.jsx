import React from 'react';

const image = require('../../media/image.jpg')
const TitleBoxComponent = (props) => {
    return (
        <div className="title-box-component-main-container">
            <div className="title-box-left-content-container">
                <div className="image-holder">
                    <img src={image} alt="Loading ..." />
                </div>
            </div>
            <div className="title-box-right-content-container">
                <div className="title-container">
                    <h3 className="sub-sub-heading">
                        The one solution for data related platform
                    </h3>
                    <h1 className="main-heading">
                        Analyse Expertise On Billions Of Data
                    </h1>
                    <h2 className="sub-heading">
                        To give premium customer experience
                    </h2>
                    <div className="learn-more-button">
                        <h2>Learn More</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TitleBoxComponent;