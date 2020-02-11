import React from 'react';
import { Button, Row, Col } from 'antd';
import { withRouter } from "react-router";
const bootcamp = require('@media/images/bootcamp.png')
const bootcamppage =require('@media/images/c3.png')
const BootCamp = (props) => {
    const gotoPage = (link) => {
        props.history.push(link)
    }
    return (
        <div className="bootcamp-main-container">

            <Row>
                <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                    <img style={{height:"100%",width:"100%"}} src={bootcamppage}></img>
                </Col>
                <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                    <div className="content-container" style={{ textAlign: "center" }}>
                        <p>Why need to be experienced to have professionalism ?</p>
                        <p>Come Join us to make you battle ready. We provide you with perfect atmosphere to grow as a professional coder and someone what makes market demand from you. Come Join us to make you battle ready. We provide you with perfect atmosphere to grow as a professional coder and someone what makes market demand from you. Come Join us to make you battle ready. We provide you with perfect atmosphere to grow as a professional coder and someone what makes market demand from you.</p>
                        <div className="btn-container">
                            <Button type="primary" shape="round" onClick={() => gotoPage('bootcamp')}>Learn More</Button>
                        </div>
                    </div>
                </Col>

            </Row>

        </div>
    )
}
export default withRouter(BootCamp)
