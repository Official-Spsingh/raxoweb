import React, { Component } from 'react';
import {Row,Col} from 'antd';
export default class OurTeam extends Component {
    render() {
        return (
            <div className="our-team">
                <h1 className="section-heading">Our Team</h1>
                <Row>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <div className="team-member">

                        </div>
                        <h3>Name</h3>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <div className="team-member">

                        </div>
                        <h3>Name</h3>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <div className="team-member">

                        </div>
                        <h3>Name</h3>
                    </Col>
                </Row>
            </div>
        )
    }
}