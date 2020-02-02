import React from 'react';
const image = require('@media/images/image.jpg')
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
                        Enhance your success with us
                    </h3>
                    <h1 className="main-heading">
                        Insights for the connected world
                    </h1>
                    <h2 className="sub-heading">
                        Passionate people | Creative solutions
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
