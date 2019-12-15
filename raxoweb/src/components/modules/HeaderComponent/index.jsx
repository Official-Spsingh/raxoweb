import React from 'react';
const logo = require('../../../media/logo.jpeg')
const HeaderComponent = (props) => {
    return (
        <div className="header-main-container">
            <div className="header-content-container">
                <div className="header-content-left">
                    <div className="header-content">
                        <span>Home</span>
                    </div>
                    <div className="header-content">
                        <span>About</span>
                    </div>
                    <div className="header-content">
                        <span>Services</span>
                    </div>
                </div>
                <div className="header-logo-container">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="header-content-right">
                    <div className="header-content">
                        <span>Work</span>
                    </div>
                    <div className="header-content">
                        <span>Contact</span>
                    </div>
                    <div className="header-content">
                        <span>View</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeaderComponent;