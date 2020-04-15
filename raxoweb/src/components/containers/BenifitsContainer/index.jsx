import React from 'react'
import { Row, Col } from 'antd';
import BenifitComponent from '@modules/BenifitComponent'
const benifits = [
    {
        count: 1,
        title: 'Free of cost webinar only for you'
    },
    {
        count: 2,
        title: 'Quality learning from industry experts'
    },
    {
        count: 3,
        title: 'Practical exposure of the technology'
    },
    {
        count: 4,
        title: 'Future scope & possibilities with the technology'
    },
    {
        count: 5,
        title: 'Live Question & Answer session'
    },
    {
        count: 6,
        title: 'Certificate after completion'
    }
]


const BenifitsContainer = () => {
    return (
        <div className="benifits-main-container">
            <Row gutter={[10, 20]}>
                {
                    benifits.map(benifit =>
                        <Col key={benifit} xs={24} sm={24} md={12} lg={12} xl={12} xxl={8}>
                            <div className="benifit-container">
                                <BenifitComponent count={benifit.count} title={benifit.title} />
                            </div>
                        </Col>
                    )
                }
            </Row>
        </div>
    )
}

export default BenifitsContainer
