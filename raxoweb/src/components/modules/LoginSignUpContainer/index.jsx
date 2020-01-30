import React, { useState } from "react"
import { Modal,Tabs } from "antd"
import LoginContainer from '../LoginContainer'
import SignUpContainer from '../SignUpContainer'
const { TabPane } = Tabs;

export default function LoginSignUpContainer({ visible, setModalVisible, activeTab, setActiveTab }) {
  return (
    <Modal
      visible={visible}
      onCancel={() => setModalVisible(false)}
      footer={null}
      centered={true}
      closable={true}
      getContainer={() => document.getElementById("RaxowebMain")}
      destroyOnClose={true}
      wrapClassName="login-signup-modal"
      maskClosable={false}
    >
      <div className="login-signup-container-wrapper">
        <div className="img-containers">
          <img src={require('../../../media/images/prototype3.png')} width="100%" height="100%" style={{padding: "8% 0% 2% 10%"}}/>
        </div>
     
      <div className="loginSignupContainer">
        <Tabs activeKey={activeTab}>
          <TabPane key='login' tab='Login'>
            <LoginContainer setModalVisible={setModalVisible} setActiveTab={setActiveTab} />
          </TabPane>
          <TabPane key="signup" tab='Sign Up'>
            <SignUpContainer setModalVisible={setModalVisible} setActiveTab={setActiveTab} />
          </TabPane>
        </Tabs>
      </div>
      </div>
    </Modal>
  );
}
