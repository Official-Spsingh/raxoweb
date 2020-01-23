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
    </Modal>
  );
}
