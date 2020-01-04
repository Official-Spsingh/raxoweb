import React from 'react';
import { withRouter } from "react-router";

const logo = require('../../../media/logo.jpeg')
const HeaderComponent = (props) => {
    const gotoPage = (link) => {
        props.history.push(link)
    }
    return (
        <div className="header-main-container">
            <div className="header-content-container">
                <div className="header-content-left">
                    <div className="header-content" onClick={() => gotoPage('')}>
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
                    <img src={logo} alt="logo" />
                </div>
                <div className="header-content-right">
                    <div className="header-content">
                        <span>Bootcamp</span>
                    </div>
                    <div className="header-content" onClick={() => gotoPage('blogs')}>
                        <span>Blogs</span>
                    </div>
                    <div className="header-content">
                        <span>Login</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(HeaderComponent);