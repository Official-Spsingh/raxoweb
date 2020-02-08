import React from 'react'
import GridComponent from './components/GridComponent'
import { Row, Col } from 'antd'
const gridItems =
    [
        {
            image: "young-student-man.jpg",
            title: "Career changer",
            subTitle: "Student",
            description: "“I wouldn’t have been able to grow as a developer, if I had gone to another bootcamp.”"
        },
        {
            image: "iStock-Asian.jpg",
            title: "Learn with fun",
            subTitle: "Student",
            description: "“This has been best three months ever. Everyday at bootcamp was as exciting as first day.”"
        },
        {
            image: "AdobeStock_257074046.jpeg",       
            title: "Witness change",
            subTitle: "Student",
            description: "“By the first month, you start to realize I can already build stuff.I didn’t get that in college.”"
        }
    ]
function BootCampThirdComponent(props) {
    return (
        <div className="bootcamp-third-component-container">
            <div className="grid-container">
                <div className="header-sec-container">
                <div className="bootcamp-sec-header"> 
                    Words From The Best
                </div>
                <div className="green-strip"></div>
                </div>
               
                <Row className="grid-container-row">
                    {
                        gridItems.map((item, index) => <Col  xxl={8} xl={8} lg={8} md={8} sm={12} xs={24}><GridComponent key={index} gridItem={item} /></Col>)
                    }
                </Row>
            </div>
        </div>
    )
}

export default BootCampThirdComponent
