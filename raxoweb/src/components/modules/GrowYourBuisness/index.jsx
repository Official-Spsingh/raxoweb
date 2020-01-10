import React from 'react';

const image = require('https://raxowebapi.herokuapp.com/landing-page-images/growBuisness.jpg')
const icon1 = require('https://raxowebapi.herokuapp.com/landing-page-images/growthicon.png')
const icon2 = require('https://raxowebapi.herokuapp.com/landing-page-images/manageicon.png')
const icon3 = require('https://raxowebapi.herokuapp.com/landing-page-images/experience.png')

const GrowYourBuisness = (props) => {
    return (
        <div className="grow-your-buisness">
            <div className="left-section">
                <div className="outer-section">
                    <div className="middle-section">
                        <div className="image-container">
                            <img src={image} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-section">
                <div className="right-section-container">


                    <div className="growth-list-section">
                        <div className="header-section">
                            <div className="header-left-section">
                                <img src={icon1}></img>
                            </div>
                            <div className="header-right-secion">
                                Growth
        </div>

                        </div>
                        <div className="content-section">
                            A paragraph is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences.
        </div>
                    </div>

                    <div className="growth-list-section">
                        <div className="header-section">
                            <div className="header-left-section">
                                <img src={icon2}></img>
                            </div>
                            <div className="header-right-secion">
                                Management
        </div>

                        </div>
                        <div className="content-section">
                            A paragraph is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences.
        </div>
                    </div>

                    <div className="growth-list-section">
                        <div className="header-section">
                            <div className="header-left-section">
                                <img src={icon3}></img>
                            </div>
                            <div className="header-right-secion">
                                Experience
        </div>

                        </div>
                        <div className="content-section">
                            A paragraph is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences.
        </div>
                    </div>

                </div> </div>
        </div>
    )
}
export default GrowYourBuisness;
