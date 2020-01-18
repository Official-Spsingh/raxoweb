import React from 'react';
growBuisness = require('../../media/images/growBuisness.jpg')
growthicon = require('../../media/images/growthicon.png')
manageicon = require('../../media/images/manageicon.png')
experience = require('../../media/images/experience.png')
const GrowYourBuisness = (props) => {
    return (
        <div className="grow-your-buisness">
            <div className="left-section">
                <div className="outer-section">
                    <div className="middle-section">
                        <div className="image-container">
                            <img src={growBuisness.jpg} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-section">
                <div className="right-section-container">


                    <div className="growth-list-section">
                        <div className="header-section">
                            <div className="header-left-section">
                                <img src={growthicon}></img>
                            </div>
                            <div className="header-right-secion">
                                Growth
        </div>

                        </div>
                        <div className="content-section">
                            Grow your organization by making proper and effective use of data you already have.
                            Future predictions and decision making made easy. 
                             </div>
                    </div>

                    <div className="growth-list-section">
                        <div className="header-section">
                            <div className="header-left-section">
                                <img src={manageicon.png}></img>
                            </div>
                            <div className="header-right-secion">
                                Management
        </div>

                        </div>
                        <div className="content-section">
                            Managing your customers,employees no more a headache. Raxoweb provides you tool for handling all
                            the request through a single platform. Bring in more visibility and transparency with our tools.
                        
                         </div>
                    </div>

                    <div className="growth-list-section">
                        <div className="header-section">
                            <div className="header-left-section">
                                <img src={experience}></img>
                            </div>
                            <div className="header-right-secion">
                                Experience
        </div>

                        </div>
                        <div className="content-section">
                            We focus on providing our customers a premium and an unforgettable experience with all our products.
                            
                             

                             </div>
                    </div>

                </div> </div>
        </div>
    )
}
export default GrowYourBuisness;
