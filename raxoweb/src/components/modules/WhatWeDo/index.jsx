import React from 'react';
import { Row, Col } from 'antd';
const WhatWeDo = (props) => {
    return (
        <div className="what-we-do">
            <Row>

                <Col xl={6} lg={6} md={12} sm={12} xs={24}>
                    <div className="card-container container1">
                        <div className="top-section">
                            <img src={require('../../../media/images/whatwedo6.png')}>

                            </img>
                        </div>
                        <div className="buttom-section">
                            <div className="title-section">
                                <p className="title">Bootcamp</p>
                                <div className="sub-title">A place where you can learn with the help of experts</div>
                            </div>
                        </div>
                    </div>

                </Col>
                <Col xl={6} lg={6} md={12} sm={12} xs={24}>
                    <div className="card-container container3">
                        <div className="top-section">
                            <img src={require('../../../media/images/whatwedo3.jpg')} />
                        </div>
                        <div className="buttom-section">
                            <div className="title-section">
                                <p className="title">Web Solutions</p>
                                <div className="sub-title">We provide web solutions for software related problems</div>
                            </div>
                        </div>
                    </div>

                </Col>
                <Col xl={6} lg={6} md={12} sm={12} xs={24}>
                    <div className="card-container container4">
                        <div className="top-section">
                            <img src={require('../../../media/images/whatwedo4.jpg')} />
                        </div>
                        <div className="buttom-section">
                            <div className="title-section">
                                <p className="title">Mobile Apps</p>
                                <div className="sub-title">We also provide Mobile app to our clients </div>
                            </div>
                        </div>
                    </div>

                </Col>
                <Col xl={6} lg={6} md={12} sm={12} xs={24}>
                    <div className="card-container container1">
                        <div className="top-section">
                            <img src={require('../../../media/images/whatwedo1.jpg')}>

                            </img>
                        </div>
                        <div className="buttom-section">
                            <div className="title-section">
                                <p className="title">BI Solutions</p>
                                <div className="sub-title">We analyze data and provide buisness related solutions</div>
                            </div>
                        </div>
                    </div>

                </Col>

            </Row>

        </div>
    )
}
export default WhatWeDo;