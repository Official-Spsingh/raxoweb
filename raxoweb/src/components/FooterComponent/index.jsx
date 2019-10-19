import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
export default class FooterComponent extends Component {
    render() {
        return (
            <div className="footer-component">
                <Row>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>

                        <div className="footer-content">Developed By RaxoWeb Team</div>
                        <div className="footer-content">All Right Reserved &copy; 2019-20</div>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <div className="contact-icons">
                            <Icon type="facebook"></Icon>


                            <Icon type="linkedin"></Icon>


                            <Icon type="instagram"></Icon>

                            <Icon type="google-plus"></Icon>
                        </div>
                    </Col>

                </Row>

            </div>
        )
    }
}