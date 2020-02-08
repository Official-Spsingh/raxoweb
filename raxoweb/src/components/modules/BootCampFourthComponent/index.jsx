import React from 'react'
import { Row, Col } from 'antd'
import career from '@media/images/career.png'
import outcome from '@media/images/outcome1.png'
import network from '@media/images/network.png'
import implementation from '@media/images/implement-png.png'

const Items =
    [
        {
            image: career,
            title: "Kickstart Your Career",
            subtitle: "Whether you need to get a job in tech or launch your own business, raxoweb will help you achieve your goals"
        },
        {
            image: network,
            title: "Connect with passionate's",
            subtitle: "Join a global network of +5000 graduates and professionals across the world. Get a chance to connect and share with aspiring students."
        },
        {
            image: implementation,
            title: "Learn By Implenting",
            subtitle: "Learn by working on amazing projects using the tools and workflows you'll encounter in a real work environment."
        },
        {
            image: outcome,
            title: "Outcomes that motivates",
            subtitle: "Our students get hired before they complete their graduation. We make you confident enough to face any interview "
        },
    ]

function BootCampFourthComponent(props) {
    return (
        <div className="bootcamp-forth-component-container">
            <div className="bootcamp-sec-fourth-header">
                <div className="header-title">Why should you study at Raxoweb</div>
                <div className="green-strip"></div>
            </div>
            <div className="sections-holder">

                <Row className="main-row">
                    {
                        Items.map((item, index) => <Col className="main-col" xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                            <div className="section">
                                <Row className="sec-row">
                                    <Col xxl={6} xl={8} lg={8} md={24} sm={24} xs={24} className="sec-col">
                                        <div className="image-container">
                                            <img src={item.image} alt="bootcampImage"></img>
                                        </div>
                                    </Col>
                                    <Col xxl={18} xl={16} lg={16} md={24} sm={24} xs={24} className="sec-col">
                                        <div className="title">{item.title}</div>
                                        <div className="subtitle">{item.subtitle}</div>
                                    </Col>
                                </Row>

                            </div>
                        </Col>)
                    }
                </Row>

            </div>
        </div>
    )
}

export default BootCampFourthComponent
