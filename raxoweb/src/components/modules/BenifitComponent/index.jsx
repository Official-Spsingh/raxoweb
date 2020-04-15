import React from 'react'
import { Avatar } from 'antd';

const BenifitComponent = (props) => {
    return (
        <div className="benifit-Component-main-container">
            <div className="benifit-content-container">
                <div className="benifit-container-left">
                    <Avatar size={42}>{props.count}</Avatar>
                </div>
                <div className="benifit-container-right">
                    <h3>{props.title}</h3>
                </div>
            </div>
        </div>
    )
}

export default BenifitComponent
