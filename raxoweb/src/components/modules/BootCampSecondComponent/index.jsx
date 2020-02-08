import React from 'react'
import Language from './components/language'

const contentList = ["UI/UX", "React Js", "Node Js", "Python","Data Science"]

function BootCampSecondComponent(props) {
    return (
        <div className="bootcamp-second-component-container">
            <div className="content-box-container">
                <h1>Courses that make you market ready</h1>
                <h3 style={{color:"#fff"}}>After having a survey on what technologies are needed currently, we offer following courses</h3>
            </div>
            <div className="programming-language-container">
                {
                    contentList.map(content => <Language key={content} content={content} />)
                }
            </div>
        </div>
    )
}

export default BootCampSecondComponent
