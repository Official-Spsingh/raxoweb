import React, { Component } from "react";
import { Button, Modal, Tabs, Result, Icon } from "antd";
import ContactUsForm from "./components/contactUsForm";
const { TabPane } = Tabs;
export default class ContactUs extends Component {
  state = {
    visible: false,
    activeTab: "1",
    loading: false,
    status: "success",
    message: "",
    subMessage: ""
  };
  openModal = () => {
    this.setState({
      visible: true
    });
  };
  closeModal = () => {
    this.setState({
      visible: false,
      activeTab: "1"
    });
  };
  dataSent = (data, status) => {
    console.log(data, status);
    if (data) {
      this.setState({
        loading: true
      });
    } else {
      if (status == "success") {
        this.setState({
          loading: false,
          activeTab: "2",
          status: "success",
          message: "Your message has been successfully sent !",
          subMessage: "Our team will contact you soon..."
        });
      }
      if (status == "error") {
        this.setState({
          loading: false,
          activeTab: "2",
          status: "warning",
          message: "There are some problems with your operation !",
          subMessage: "We will fix it soon"
        });
      }
    }
  };
  goToContactUs = () => {
    this.setState({
      activeTab: "1"
    });
  };
  render() {
    return (
      <div className="contact-us-main-container">
        <div className="contact-us-wrapper">


          <div className="contact-us-image">
           <img src={require('../../../media/images/character-contact.png')}/>
          </div>
          <div className="contact-us-content-container">
            <div className="contact-us-content">


              <p>
                Send us an email, give us a call, or submit the form on clicking the
                Contact us button below to get a hold of us! If you’d like to inquire
                about our services, please fill free to reach us at raxoweb@gmail.com
        </p>
              <Button
                type="primary"
                shape={"round"}
                onClick={this.openModal}
                style={{ background: "#0A3D62", border: "none" }}
              >
                Contact Us
        </Button>
            </div>
          </div>
        </div>
        <Modal
          visible={this.state.visible}
          centered={true}
          closable={false}
          destroyOnClose={true}
          footer={null}
          wrapClassName="contact-us-modal-main-container"
        >
          <Tabs activeKey={this.state.activeTab}>
            <TabPane tab="Tab 1" key="1">
              <div className="contact-us-container">
                <div className="contact-box">
                  <ContactUsForm
                    closeModal={this.closeModal}
                    dataSent={this.dataSent}
                    loading={this.state.loading}
                  />
                </div>
              </div>
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              <div className="successMsg">
                <Result
                  status={this.state.status}
                  title={this.state.message}
                  subTitle={this.state.subMessage}
                  extra={[
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center"
                      }}
                    >
                      <Button key="cancelContact" onClick={this.closeModal}>
                        Cancel
                      </Button>
                      <Button
                        key="goToContactUs"
                        style={{ background: "#0a3d62", color: "#fafafa" }}
                        onClick={this.goToContactUs}
                      >
                        Submit Again
                      </Button>
                    </div>
                  ]}
                />
              </div>
            </TabPane>
          </Tabs>
        </Modal>
      </div>
    );
  }
}
