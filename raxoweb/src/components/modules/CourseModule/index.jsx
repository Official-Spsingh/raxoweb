import React from "react";
import { Button } from "antd";
import { withRouter } from "react-router";
import { Collapse } from 'antd';
import { PlayCircleTwoTone, StarFilled } from '@ant-design/icons';
import HomePageContentContainer from "@containers/HomePageContentContainer";
import BenifitComponent from "@modules/BenifitComponent";

const { Panel } = Collapse;
const arr = [{
    heading: "Python setup",
    content: [" Windows", "Linux", "Ananconda"]
},
{
    heading: "Python Object and Data structure basics",
    content: [" Introduction to Python data types ", " Variable assignment ", " Introduction to String ", "Indexing and Slicing with Strings ", "String properties and methods ", " Print formatting with String ", " Print formatting ", " List data structure ", " Dictionary data structure ", " Tuple data structure ", " Set data structure ", " Boolean"]
},
{
    heading: "Python comparison operators",
    content: [" Comparison operators ", " Logical operators"]
},
{
    heading: "Python statements",
    content: [" If elif and else statement ", " For loop ", " While loop ", " Useful operators ", " List comprehension"]
}
    ,
{
    heading: "Methods and Function",
    content: [" Function Overview ", " Function return boolean ", " Function args ", " Function kwargs ", " Lambda expression , Map and Filter ", " Nested statements and scope"]
}
    ,
{
    heading: "Milestone Project - 1",
    content: [" project overview ", " solution overview ", " Advance solution"]
},
{
    heading: "Object Oriented Programming",
    content: [" Introduction ", " Attributes and Class Keyword ", " Class Object Attributes and Methods ", " Inheritance and Polymorphism ", " Special (Magic/Dunder) Methods"]
},
{
    heading: "Modules and Packages",
    content: ["Pip Install and PyPi ", " __name__ and __main__"]
},
{
    heading: "Errors and Exceptions Handling",
    content: [" Try, catch and finally ", " Exception logging"]
},
{
    heading: "Running tests with the Unittest Library",
    content: [" Testing programs"]
},
{
    heading: "Milestone Project - 2",
    content: [" Card and Deck classes ", " Hand and Chip Classes ", " Functions for Game Play ", " Final Gameplay Script"]
},
{
    heading: "Python Decorators",
    content: [" Decorators with Python Overview"]
},
{
    heading: "Python Generators",
    content: [" Generators with Python"]
},
{
    heading: "Final Capstone Python Project",
    content: ["Final Capstone Project"]
},
{
    heading: "Advanced Python Modules",
    content: [" Collections Module ", " Counter ", " Collections Module ", " Defaultdict ", " Collections Module ", " OrderedDict ", " Collections Module ", " Namedtuple Datetime"]
},
{
    heading: "Datetime",
    content: [" Date ", " Time"]
},
{
    heading: "Python Debugger",
    content: ["pdb"]
},
{
    heading: "Timing your code",
    content: ["timeit"]
},
{
    heading: "Regular Expressions",
    content: ["Understanding Regular Expressions", "Explanation on Regular Expressions"]
},
{
    heading: "StringIO",
    content: ["File handling"]
},
{
    heading: "Advanced Python Objects and Data Structures",
    content: [" Advanced Numbers ", " Advanced Strings ", " Advanced Sets ", " Advanced Dictionaries ", " Advanced Lists"]
},
{
    heading: "Advance Final project complete Backend API",
    content: [" Login ", " Logout ", " Database operation ", " Request and response ", " Jwt token concept ", " Sql alchemy"]
}]

const CourseModule = props => {
    return (
        <div className="course-module">

            <div className="heading-container">


                <div className="heading-section">
                    <div className="title">
                        Complete Python Bootcamp : The journey from beginner to expert in Python 3
         </div>
                    <div className="sub-title">
                        Learn Python like a Professional! Start from the basics and go all the way to creating your own applications and games!
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


                            <BenifitComponent count={1} title="Learn to use Python professionally" />
                            <BenifitComponent count={2} title="Understand complex topics, like decorators" />
                        </div>
                        <div className="binder">
                            <BenifitComponent count={3} title="Understand how to use both the Jupyter Notebook and create .py files" />
                            <BenifitComponent count={4} title="Using databases using Python" />
                        </div>
                        <div className="binder">
                            <BenifitComponent count={5} title="Understand how to use both the Jupyter Notebook and create .py files" />
                            <BenifitComponent count={6} title="Develop projects like Guessing Game, Password Generator, Hangman, and many more" />
                        </div>

                    </div>
                </HomePageContentContainer>

                <HomePageContentContainer title="Course content">
                    <div className="courseContent">
                        <Collapse accordion defaultActiveKey={['0']} expandIconPosition="right">
                            {
                                arr.map((element, index) => {
                                    return (
                                        <Panel style={{ color: "#505763", fontWeight: "700" }} header={element.heading.charAt(0).toUpperCase() + element.heading.slice(1)} key={index} className="site-collapse-custom-panel">
                                            <div>
                                                <ul>
                                                    {element.content.map((item, index) => {
                                                        return <li style={{
                                                            margin: "3px 0px", 
                                                            fontWeight: "500",
                                                            padding: "6px",
                                                        }}>{item}</li>
                                                    })}
                                                </ul>
                                            </div>
                                        </Panel>
                                    )
                                })
                            }



                        </Collapse>
                    </div>

                </HomePageContentContainer>
                <HomePageContentContainer title="Course Packages">
                    <div className="coursePackage">
                        <div className="packlist">
                            <div className="heading">
                                <h2>
                                    Basic
                                </h2>
                            </div>
                            <div className="price-box">
                                <h1>&#8377; 2999</h1>
                                <h4><span>&#8377; 5000</span> <span>40% off</span></h4>
                            </div>
                            <div className="description">
                                <h4>
                                    <b>2</b> Projects
                                </h4>
                                <h4>
                                    <b>Duration :</b> 40 days
                                </h4>
                                <h4>
                                    Python Basic Concepts
                                </h4>
                            </div>
                            <div className="btn-container">
                                <a href="https://forms.gle/R7bBRiWD9fjuepwx5" target="_blank">
                                    <Button type="primary" shape="round">
                                        Register Now
                                </Button>
                                </a>
                            </div>
                        </div>

                        <div className="packlist">
                            <div className="heading" style={{ background: "#c300ee" }}>
                                <h2>
                                    Advanced
                                </h2>
                            </div>
                            <div className="price-box">
                                <h1>&#8377; 4999</h1>
                                <h4><span>&#8377; 8000</span> <span>38% off</span></h4>
                            </div>
                            <div className="description">
                                <h4>
                                    <b>4</b> Projects
                                </h4>
                                <h4>
                                    <b>Duration :</b> 60 days
                                </h4>
                                <h4>
                                    Python Advanced Concepts
                                </h4>
                            </div>
                            <div className="btn-container">
                                <a href="https://forms.gle/R7bBRiWD9fjuepwx5" target="_blank">
                                    <Button type="primary" shape="round">
                                        Register Now
                                </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </HomePageContentContainer>

            </div>
        </div>
    );
};
export default withRouter(CourseModule);
