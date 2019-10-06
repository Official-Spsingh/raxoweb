import React, { Component } from 'react';
import { Row, Col, Card,Icon } from 'antd';
export default class OurServices extends Component {
    render() {
        return (
            <div className="our-services">
                <Row>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <Card style={{ width: 300 }}>
                        <Icon type="github" />
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <Card style={{ width: 300 }}>
                        <Icon type="html5" />
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <Card style={{ width: 300 }}>
                        <Icon type="amazon" />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}