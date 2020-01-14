import React, { Component } from "react";
import { Button, Modal } from "antd";
import ContactUsForm from "./components/contactUsForm";

export default class ContactUs extends Component {
  state = {
    visible: false
  };
  openModal = () => {
    this.setState({
      visible: true
    });
  };
  closeModal = () => {
    this.setState({
      visible: false
    });
  };
  render() {
    return (
      <div className="contact-us-main-container">
        <p>
          Send us an email, give us a call, or submit the form on clicking the Contact us button below to get a
          hold of us! If you’d like to inquire about our services, please fill free to reach us at raxoweb@gmail.com
        </p>
        <Button
          type="primary"
          shape={"round"}
          onClick={this.openModal}
          style={{ background: "#0A3D62", border: "none" }}
        >
          Contact Us
        </Button>
        <Modal
          visible={this.state.visible}
          onCancel={this.closeModal}
          centered={true}
          closable={false}
          destroyOnClose={true}
          footer={null}
          wrapClassName="contact-us-modal-main-container"
        >
          <div className="contact-us-container">
            <div className="contact-box">
              <ContactUsForm closeModal={this.closeModal} />
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
