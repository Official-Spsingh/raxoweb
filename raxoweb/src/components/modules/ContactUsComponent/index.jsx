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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, doloremque quaerat ab, quae facere laborum minus, reprehenderit molestias harum delectus inventore eos illo iure facilis doloribus expedita rem quibusdam neque.</p>
                <Button type="primary" shape={'round'} onClick={this.openModal} style={{background:'#0A3D62',border:'none'}}>Contact Us</Button>
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
                            <ContactUsForm closeModal={this.closeModal}/>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

