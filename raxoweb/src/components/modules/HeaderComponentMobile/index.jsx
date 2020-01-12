import React, { Component } from 'react';
import { withRouter } from "react-router";
import { Icon, Drawer } from 'antd'

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
        const links = [
            {
                name: 'Home',
                icon: 'home',
                route: 'home'
            },
            {
                name: 'Bootcamp',
                icon: 'schedule',
                route: 'home'
            },
            {
                name: 'Blogs',
                icon: 'block',
                route: 'home'
            },
            {
                name: 'Login',
                icon: 'login',
                route: 'home'
            }
        ]
        return (
            <div className="header-mobile">
                <div className="header-mobile-wrapper">
                    <div className="left-section">
                        <div className="logo-container">
                        <img style={{ height: "40px", width: "130px" }} src={require('../../../assets/raxologo8888.png')} alt="Raxoweb" />
                        </div>
                    </div>
                    <div className="right-section">
                        <div className="icon-container" onClick={this.showDrawer}>
                            <Icon type="menu" />

                        </div>
                        <Drawer
                            placement="right"
                            closable={false}
                            onClose={this.onClose}
                            visible={this.state.visible}
                            className='mobile-header-drawer-container'
                            style={{zIndex:999999999}}
                        >
                            <div className="drawer-content-main-container">
                                <div className="title-container">
                                    <h2>RAXOWEB</h2>
                                    <h4>Enhance Your Success With Us</h4>
                                </div>
                              

                                <div className="links-container">
                                    {
                                        links.map((linkItem, index) =>
                                            <div key={index} className="link-item">
                                                <Icon type={linkItem.icon} />
                                                <h3>{linkItem.name}</h3>
                                            </div>
                                        )
                                    }
                                </div>

                            </div>
                        </Drawer>
                    </div>
                </div>
            </div>
        )

    }
}
export default withRouter(HeaderComponentMobile);
