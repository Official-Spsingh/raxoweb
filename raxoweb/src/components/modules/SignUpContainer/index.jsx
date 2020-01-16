import React, { useState } from 'react'
import SignUpComponent from '../SignUpComponent'
import { Tabs } from 'antd'
import OtpComponent from '../OtpComponent';
const { TabPane } = Tabs;

const SignUpContainer = (props) => {
  const [activeKey, setActiveKey] = useState('signUp')
  return (
    <div className="signup-container-main-container">
      <Tabs activeKey={activeKey}>
        <TabPane key='signUp' tab='Sign Up'>
          <SignUpComponent setActiveKey={setActiveKey} />
        </TabPane>
        <TabPane key="otp" tab='OTP'>
          <OtpComponent setModalVisible={props.setModalVisible} />
        </TabPane>
      </Tabs>
    </div>
  )
}
export default SignUpContainer;