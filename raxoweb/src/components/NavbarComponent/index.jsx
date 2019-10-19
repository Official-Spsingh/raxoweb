import React, { Component } from 'react';
import { Icon, Drawer, List } from 'antd';
export default class NavbarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }
    openMenu = () => {
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
            <div className="navbar-component">
                <div className="logo">Logo</div>
                <Drawer
                    title="RaxoWeb"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    maskClosable={true}
                    getContainer={document.getElementById("navbar")}
                >
                    <List>
                        <List.Item>Home</List.Item>

                        <List.Item>Our Services</List.Item>
                        <List.Item>About Us</List.Item>
                        <List.Item>Blogs</List.Item>
                        <List.Item>Our Team</List.Item>
                        <List.Item>Contact Us</List.Item>
                    </List>
                </Drawer>

                <div className="navbar" id="navbar" onClick={this.openMenu}><Icon type="home" ></Icon>

                </div>

            </div>
        )
    }
}