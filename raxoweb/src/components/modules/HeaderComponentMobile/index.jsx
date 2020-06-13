import React, { Component } from 'react';
import { withRouter } from "react-router";
import { Icon, Drawer, Button } from 'antd'
import { isUserAuthenticated, logoutUser } from '@utils/auth'

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
    gotoPage = (link) => {
        if (link != 'login/signUp') {
            this.props.history.push(link)
        }
        else {
            this.props.setModalVisible(true)
            this.props.setActiveTab('login')
        }
        this.onClose()
    }
    render() {
        let links = [
            {
                name: 'Home',
                icon: 'home',
                route: ''
            },
            {
                name: 'Who We Are',
                icon: 'schedule',
                route: 'bootcamp'
            },
            {
                name: 'What We Do',
                icon: 'block',
                route: 'blogs'
            },
            {
                name: 'Blogs',
                icon: 'block',
                route: 'blogs'
            },
            {
                name: 'Learning',
                icon: 'block',
                route: 'blogs'
            },
            {
                name: 'Contact',
                icon: 'block',
                route: 'blogs'
            },
            // {
            //     name: 'Webinar',
            //     icon: 'play-circle',
            //     route: 'webinar'
            // }
        ]
        // if (isUserAuthenticated()) {
        //     links = [...links, { name: 'Write Blog', icon: 'edit', route: 'writeBlog' }]
        // }
        return (
            <div className="header-mobile">
                <div className="header-mobile-wrapper">
                    <div className="left-section">
                        <div className="logo-container" onClick={() => this.gotoPage('/')}>
                            <img style={{ height: "45px", width: "45px" }} src={require('../../../assets/logo.png')} alt="Raxoweb" />
                        </div>
                    </div>
                    <div className="right-section">
                        {/* {
                            !isUserAuthenticated() ?
                                <div className="login-btn">
                                    <Button onClick={() => this.gotoPage('login/signUp')}>Login</Button>
                                </div>
                                : null
                        } */}
                        <div className="icon-container" onClick={this.showDrawer}>
                            <Icon type="menu" />

                        </div>
                        <Drawer
                            placement="right"
                            closable={false}
                            onClose={this.onClose}
                            visible={this.state.visible}
                            className='mobile-header-drawer-container'
                            style={{ zIndex: 999999999 }}
                        >
                            <div className="drawer-content-main-container">
                                <div className="title-container">
                                    <h2>RAXOWEB</h2>
                                    <h4>Enhance Your Success With Us</h4>
                                </div>


                                <div className="links-container">
                                    {
                                        links.map((linkItem, index) =>
                                            <div key={index} className="link-item" onClick={() => this.gotoPage(linkItem.route)}>
                                                <Icon type={linkItem.icon} />
                                                <h3>{linkItem.name}</h3>
                                            </div>
                                        )
                                    }
                                    {/* {
                                        isUserAuthenticated()
                                            ?
                                            <div key="logout" className="link-item" onClick={() => logoutUser()}>
                                                <Icon type={'logout'} />
                                                <h3>{'Logout'}</h3>
                                            </div>
                                            : null
                                    } */}
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
