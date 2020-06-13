import React from 'react';
import { Row, Col } from 'antd';
import { withRouter } from "react-router";
const Courses = (props) => {
    const gotoPage = link => {
        props.history.push(link);
      };
    return (
        <div className="what-we-do">
            <Row>

                <Col xl={6} lg={6} md={12} sm={12} xs={24}>
                    <div className="card-container container1 courses" onClick={() => gotoPage("python-course")}>
                        <div className="top-section">
                            <img src={require('../../../media/images/py1.png')}>

                            </img>
                        </div>
                        <div className="buttom-section">
                            <div className="title-section">
                                <p className="title">Python</p>
                                <div className="action-btn">Learn more</div>
                            </div>
                        </div>
                    </div>

                </Col>
                <Col xl={6} lg={6} md={12} sm={12} xs={24}>
                    <div className="card-container container3">
                        <div className="top-section">
                            <img src={require('../../../media/images/web.jpg')} />
                        </div>
                        <div className="buttom-section">
                            <div className="title-section">
                                <p className="title">Web Development</p>
                                <div className="action-btn">Coming soon...</div>
                            </div>
                        </div>
                    </div>

                </Col>
                <Col xl={6} lg={6} md={12} sm={12} xs={24}>
                    <div className="card-container container4">
                        <div className="top-section">
                            <img src={require('../../../media/images/js.jpg')} />
                        </div>
                        <div className="buttom-section">
                            <div className="title-section">
                                <p className="title">Javascript</p>
                                <div className="action-btn">Coming soon...</div>
                            </div>
                        </div>
                    </div>

                </Col>
                <Col xl={6} lg={6} md={12} sm={12} xs={24}>
                    <div className="card-container container1">
                        <div className="top-section">
                            <img src={require('../../../media/images/react.jpg')}>

                            </img>
                        </div>
                        <div className="buttom-section">
                            <div className="title-section">
                                <p className="title">ReactJs</p>
                                <div className="action-btn">Coming soon...</div>
                            </div>
                        </div>
                    </div>

                </Col>

            </Row>

        </div>
    )
}
export default withRouter(Courses);