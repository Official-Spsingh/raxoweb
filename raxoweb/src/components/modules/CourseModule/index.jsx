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
    content: [" windows", "linux", "Ananconda"]
},
{
    heading: "python object and data structure basics",
    content: [" Introduction to python Data Types ", " Variable assignment ", " introduction to string ", " Indexing and slicing with strings ", " string properties and methods ", " print formatting with string ", " print formatting ", " list data structure ", " Dictionary data structure ", " Tuple data structure ", " set data structure ", " boolean"]
},
{
    heading: "python comparison operators",
    content: [" comparison operators ", " logical operators"]
},
{
    heading: "python statements",
    content: [" if elif and else statement ", " for loop ", " while loop ", " useful operators ", " list comprehension"]
}
    ,
{
    heading: "methods and functon",
    content: [" function overview ", " function return boolean ", " function args ", " function kwargs ", " Lambda expression , Map and Filter ", " Nested statements and scope"]
}
    ,
{
    heading: "Milestone project - 1",
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
    content: [" try,catch and finally ", " exception logging"]
},
{
    heading: "Running tests with the Unittest Library",
    content: [" testing programs"]
},
{
    heading: "Project - 2",
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
    content: [" Collections Module ", " counter ", " Collections Module ", " defaultdict ", " Collections Module ", " OrderedDict ", " Collections Module ", " namedtuple Datetime"]
},
{
    heading: "Datetime",
    content: [" date ", " time"]
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
    content: ["re"]
},
{
    heading: "StringIO",
    content: ["file handling"]
},
{
    heading: "Advanced Python Objects and Data Structures",
    content: [" Advanced Numbers ", " Advanced Strings ", " Advanced Sets ", " Advanced Dictionaries ", " Advanced Lists"]
},
{
    heading: "Advance Final project complete Backend APi:",
    content: [" Login ", " Logout ", " database operation ", " Request and response ", " Jwt token concept ", " sql alchemy"]
}]

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
                    <Collapse accordion>
                            {
                                arr.map((element,index)=>{
                                    return(
                                        <Panel style={{color:"#505763",fontWeight:"700"}} header={element.heading.charAt(0).toUpperCase() + element.heading.slice(1)} key={index+1} className="site-collapse-custom-panel">
                                        <div>
                                            <ol>
                                                {element.content.map((item,index)=>{
                                                    return <li style={{margin:"3px 0px",fontWeight:"500"}}>{item}</li>
                                                })}
                                            </ol>
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
