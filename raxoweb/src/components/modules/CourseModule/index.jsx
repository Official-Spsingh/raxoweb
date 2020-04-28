import React from "react";
import { Button } from "antd";
import { withRouter } from "react-router";
import { Collapse } from 'antd';
import { PlayCircleTwoTone, StarFilled } from '@ant-design/icons';
import HomePageContentContainer from "@containers/HomePageContentContainer";
import BenifitComponent from "@modules/BenifitComponent";

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const CourseModule = props => {
    const gotoPage = link => {
        props.history.push(link);
    };
    return (
        <div className="course-module">

            <div className="heading-container">


                <div className="heading-section">
                    <div className="title">
                        Python Programming Masterclass For Complete Beginners
         </div>
                    <div className="sub-title">
                        Learn Python In This Course And Become a Computer Programmer.
                        Obtain valuable Python3 Skills And develop amazing projects.
         </div>
                    <div className="badgeContent">
                        <StarFilled /><StarFilled /><StarFilled /><StarFilled /><StarFilled />
                    </div>
                </div>
                <div className="registerForCourse">
                    <div className="box">
                        <div className="upper-section">
                            <img src={require('../../../media/images/python2.png')} />
                        </div>
                        <a href="https://forms.gle/R7bBRiWD9fjuepwx5" target="_blank">
                            <div className="btnSection">
                                Register Now !
         </div>
                        </a>

                    </div>
                </div>
            </div>
            <div className="content-container">
                <HomePageContentContainer title="What you'll learn">
                    <div className="whatWillYouearn">
                        <div className="binder">


                            <BenifitComponent count={1} title="Askh afkzj fkjbbankjfk" />
                            <BenifitComponent count={2} title="Askh afkzj fkjbbankjfk" />
                        </div>
                        <div className="binder">
                            <BenifitComponent count={3} title="Askh afkzj fkjbbankjfk" />
                            <BenifitComponent count={4} title="Askh afkzj fkjbbankjfk" />
                        </div>
                        <div className="binder">
                            <BenifitComponent count={5} title="Askh afkzj fkjbbankjfk" />
                            <BenifitComponent count={6} title="Askh afkzj fkjbbankjfk" />
                        </div>

                    </div>
                </HomePageContentContainer>

                <HomePageContentContainer title="Course content">
                    <div className="courseContent">
                        <Collapse
                            bordered={false}
                            defaultActiveKey={['1']}
                            expandIcon={({ isActive }) => <PlayCircleTwoTone style={{ fontSize: "20px" }} />}
                            className="site-collapse-custom-collapse"
                        >
                            <Panel header="This is panel header 1" key="1" className="site-collapse-custom-panel">
                                <p>{text}</p>
                            </Panel>
                            <Panel header="This is panel header 2" key="2" className="site-collapse-custom-panel">
                                <p>{text}</p>
                            </Panel>
                            <Panel header="This is panel header 3" key="3" className="site-collapse-custom-panel">
                                <p>{text}</p>
                            </Panel>
                        </Collapse>
                    </div>

                </HomePageContentContainer>
                <HomePageContentContainer title="Course Packages">
                    <div className="coursePackage">
                        <div className="packlist">
                            package 1
</div>
                        <div className="packlist">
                            package 2
</div>
                    </div>
                </HomePageContentContainer>

            </div>
        </div>
    );
};
export default withRouter(CourseModule);
