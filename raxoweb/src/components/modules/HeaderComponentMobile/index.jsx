import React, { Component } from 'react';
import { withRouter } from "react-router";
import { Icon, Drawer } from 'antd'

const logo = require('../../../media/logo.png')
class HeaderComponentMobile extends Component {

    state = { visible: false };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    render() {


        return (
            <div className="header-mobile">
                <div className="header-mobile-wrapper">
                    <div className="left-section">
                        <div className="logo-container">
                            <img src={logo} />
                        </div>
                    </div>
                    <div className="right-section">
                        <div className="icon-container" onClick={this.showDrawer}>
                            <Icon type="menu" />

                        </div>
                        <Drawer
                            title="Raxoweb"
                            placement="right"
                            closable={true}
                            onClose={this.onClose}
                            visible={this.state.visible}
                        >
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                        </Drawer>
                    </div>
                </div>
            </div>
        )

    }
}
export default withRouter(HeaderComponentMobile);