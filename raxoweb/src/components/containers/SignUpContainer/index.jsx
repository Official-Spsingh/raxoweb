import React, { useState, useEffect } from 'react'
import SignUpComponent from '@modules/SignUpComponent'
import { Tabs, Result, Button, Icon, Spin } from 'antd'
import OtpComponent from '@modules/OtpComponent';
const { TabPane } = Tabs;
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />

const SignUpContainer = (props) => {
  const [activeKey, setActiveKey] = useState('signUp')
  const [email, setEmail] = useState('')
  useEffect(() => {
    if (activeKey == 'success') {
      setTimeout(() =>{
        props.setActiveTab('login')
        setActiveKey('signUp')
      } , 2000)
    }
  }, [activeKey])
  return (
    <div className="signup-container-main-container">
      <Tabs activeKey={activeKey}>
        <TabPane key='signUp' tab='Sign Up'>
          <SignUpComponent setActiveKey={setActiveKey} setEmail={setEmail} setActiveTab={props.setActiveTab} />
        </TabPane>
        <TabPane key="otp" tab='OTP'>
          <OtpComponent mode='signUp' setModalVisible={props.setModalVisible} setActiveKey={setActiveKey} email={email} />
        </TabPane>
        <TabPane key="success" tab='Success'>
          <Result
            status="success"
            title="You are Registered Successfully !"
            subTitle="Please wait, while we are redirecting you to our login Page."
            extra={[
              <Spin indicator={antIcon} style={{ display: 'block', padding: '0px 20px 30px' }} />,
              <Button key="buy" onClick={() => props.setModalVisible(false)}>Cancel</Button>,
            ]}
          />
        </TabPane>
      </Tabs>
    </div>
  )
}
export default SignUpContainer;