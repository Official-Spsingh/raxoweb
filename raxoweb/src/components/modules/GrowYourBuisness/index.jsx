import React from 'react';
import { Row, Col } from 'antd';
const growBuisness = require('@media/svg/growyourbusiness.svg')
const growthicon = require('@media/svg/b2.svg')
const manageicon = require('@media/svg/b3.svg')
const experience = require('@media/svg/b1.svg')
const GrowYourBuisness = (props) => {
    return (
        <div className="grow-your-buisness">
            <div className="left-section">
                <div className="outer-section">
                    <div className="middle-section">
                        <div className="image-container">
                            <img src={growBuisness} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-section">
                <div className="right-section-container">
                    <div className="growth-list-section">
                        <div className="header-section">
                            <Row className="grow-row">
                                <Col xl={4} lg={4} md={4} sm={24} xs={24} className="grow-col1">
                                    <div className="header-left-section">
                                        <img src={growthicon}></img>
                                    </div>
                                </Col>
                                <Col xl={20} lg={20} md={20} sm={24} xs={24} className="grow-col">
                                    <div className="header-right-secion">
                                        Growth
                                 </div>
                                    <div className="content-section">
                                        Grow your organization by making proper and effective use of data you already have.
                                        Future predictions and decision making made easy.
                                    </div>
                                </Col>

                            </Row>

                        </div>

                    </div>
                    <div className="growth-list-section">
                        <div className="header-section">
                            <Row className="grow-row">
                                <Col xl={4} lg={4} md={4} sm={24} xs={24} className="grow-col1">
                                    <div className="header-left-section">
                                        <img src={manageicon}></img>
                                    </div>
                                </Col>
                                <Col xl={20} lg={20} md={20} sm={24} xs={24} className="grow-col">
                                    <div className="header-right-secion">
                                        Management
                                    </div>
                                    <div className="content-section">
                                        Managing your customers,employees no more a headache. Raxoweb provides you tool for handling all
                                        the request through a single platform. Bring in more visibility and transparency with our tools.
                                     </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="growth-list-section">
                            <div className="header-section">
                                <Row className="grow-row">
                                    <Col xl={4} lg={4} md={4} sm={24} xs={24} className="grow-col1">
                                        <div className="header-left-section">
                                            <img src={experience}></img>
                                        </div>
                                    </Col>
                                    <Col xl={20} lg={20} md={20} sm={24} xs={24} className="grow-col">
                                        <div className="header-right-secion">
                                            Experience
                                         </div>
                                        <div className="content-section">
                                            We focus on providing our customers a premium and an unforgettable experience with all our products.
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                )
            }
            export default GrowYourBuisness;
   