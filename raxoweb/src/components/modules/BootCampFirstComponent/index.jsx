import React from 'react'
import { Button } from 'antd'

function BootCampFirstComponent(props) {
    return (
        <div className="bootcamp-first-component-container">
            <div className="image-container">
                <img src={require('@media/svg/bootcamp1.svg')} alt="bootcamp"></img>
            </div>
            <div className="content-container">
                <h1>Master your Skills &amp; Prepare path to bright Future</h1>
                <h2>Want to be Industry ready, have confusions, lacking guidance. Come be a part of process to turn yourself a professional.</h2>
                <Button type="primary" className="button" size="large" shape="round">Course Details</Button>
            </div>
        </div>
    )
}

export default BootCampFirstComponent
