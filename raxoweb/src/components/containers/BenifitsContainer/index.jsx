import React from 'react'
import { Row, Col } from 'antd';
const benifits = [1, 2, 3, 4, 5, 6]


const BenifitsContainer = () => {
    return (
        <div className="benifits-main-container">
            <Row gutter={[10, 20]}>
                {
                    benifits.map(benifit =>
                        <Col key={benifit} xs={24} sm={24} md={12} lg={12} xl={12} xxl={8}>
                            <div className="benifit-container">
                                <div className="box" style={{ width: 250, height: 50, background: 'gray' }}>
                                    dsfghjk
                            </div>
                            </div>
                        </Col>
                    )
                }
            </Row>
        </div>
    )
}

export default BenifitsContainer
