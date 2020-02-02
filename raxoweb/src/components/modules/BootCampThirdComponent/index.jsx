import React from 'react'
import GridComponent from './components/GridComponent'
import { Row, Col } from 'antd'
const gridItems =
    [
        {
            image: "@media/images/bootcamp.png"
        },
        {
            title: "Learn with Fun",
            subTitle: "Student",
            description: "This has been best three months ever"
        },
        {
            image: "@media/images/bootcamp.png"
        },
        {
            title: "Learn with Fun",
            subTitle: "Student",
            description: "This has been best three months ever"
        },
        {
            image: "@media/images/bootcamp.png"
        },
        {
            title: "Learn with Fun",
            subTitle: "Student",
            description: "This has been best three months ever"
        }
    ]
function BootCampThirdComponent(props) {
    return (
        <div className="bootcamp-third-component-container">
            <div className="grid-container">
                <Row>
                    {
                        gridItems.map((item, index) => <Col xxl={8} xl={8} lg={8} md={8} sm={12} xs={24}><GridComponent key={index} gridItem={item} /></Col>)
                    }
                </Row>
            </div>
        </div>
    )
}

export default BootCampThirdComponent
