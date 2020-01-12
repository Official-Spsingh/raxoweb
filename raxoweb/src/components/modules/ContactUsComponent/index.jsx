import React, { Component } from 'react'
import { Button, Modal } from 'antd'
import ContactUsForm from './components/contactUsForm'

export default class ContactUs extends Component {
    state = {
        visible: false
    }
    openModal = () => {
        this.setState({
            visible: true
        })
    }
    closeModal = () => {
        this.setState({
            visible: false
        })
    }
    render() {
        return (
            <div className='contact-us-main-container'>
                <Button type="primary" size="large" onClick={this.openModal}>Contact Us</Button>
                <Modal
                    visible={this.state.visible}
                    onCancel={this.closeModal}
                    centered={true}
                    closable={false}
                    destroyOnClose={true}
                    footer={null}
                    wrapClassName='contact-us-modal-main-container'
                    
                >
                    <div className="contact-us-container">
                        <div className="contact-box">
                            <ContactUsForm/>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

