import React from 'react';
import { Row, Col } from 'antd';
const WhatWeDo = (props) => {
    return (
        <div className="what-we-do">
            <Row>

                <Col xl={8} lg={8} md={12} sm={24} xs={24}>
                    <div className="card-container container1">
                        <div className="top-section">
                            <img src={require('../../../media/images/whatwedo1.jpg')}>

                            </img>
                        </div>
                        <div className="buttom-section">
                            <div className="title-section">
                                <p className="title">BI Solutions</p>
                                <div className="sub-title"> Data anaysis </div>
                            </div>
                        </div>
                    </div>

                </Col>
                <Col xl={8} lg={8} md={12} sm={24} xs={24}>
                    <div className="card-container container2">
                        <div className="top-section">
                            <img src={require('../../../media/images/whatwedo6.png')} />
                        </div>
                        <div className="buttom-section">
                            <div className="title-section">
                                <p className="title">Bootcamp</p>
                                <div className="sub-title"> where you can learn</div>
                            </div>
                        </div>
                    </div>

                </Col>
                <Col xl={8} lg={8} md={12} sm={24} xs={24}>
                    <div className="card-container container3">
                        <div className="top-section">
                            <img src={require('../../../media/images/whatwedo3.jpg')} />
                        </div>
                        <div className="buttom-section">
                            <div className="title-section">
                                <p className="title">Web Solutions</p>
                                <div className="sub-title"> web and mobile compatible</div>
                            </div>
                        </div>
                    </div>

                </Col>
                {/* <Col xl={6} lg={6} md={12} sm={24} xs={24}>
                    <div className="card-container container4">
                        <div className="top-section">
                        <img src={require('../../../media/images/whatwedo4.jpg')}/>
                        </div>
                        <div className="buttom-section">
                            <div className="title-section">
                                Mobile App
                            </div>
                        </div>
                    </div>

                </Col> */}


            </Row>

        </div>
    )
}
export default WhatWeDo;