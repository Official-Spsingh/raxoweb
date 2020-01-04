import React from 'react';
import { Row, Col } from 'antd';
const WhatWeDo = (props) => {
    return (
        <div className="what-we-do">
            <Row>

                <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                    <div className="card-container container1">
                        <div className="top-section">

                        </div>
                        <div className="buttom-section">
                            <div className="title-section">
                                BI Solutions
                            </div>
                        </div>
                    </div>

                </Col>
                <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                    <div className="card-container container2">
                        <div className="top-section">

                        </div>
                        <div className="buttom-section">
                            <div className="title-section">
                                BootCamp
                            </div>
                        </div>
                    </div>

                </Col>
                <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                    <div className="card-container container3">
                        <div className="top-section">

                        </div>
                        <div className="buttom-section">
                            <div className="title-section">
                                Mobile App
                            </div>
                        </div>
                    </div>

                </Col>


            </Row>

        </div>
    )
}
export default WhatWeDo;