import React, { useState, useEffect } from "react";
import LoginComponent from "@modules/LoginComponent";
import ForgotPasswordComponent from "@modules/ForgotPasswordComponent";
import { Tabs, Result, Button, Icon, Spin, notification } from "antd";
import OtpComponent from "@modules/OtpComponent";
import { setCookie } from '@utils/cookie'
const { TabPane } = Tabs;
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;


const LoginContainer = props => {
  const [activeKey, setActiveKey] = useState("login");
  const [email, setEmail] = useState("");
  const loginSuccessFull = (accessToken = "", refreshToken = "") => {
    props.setModalVisible(false);
    notification["success"]({
      message: "Success",
      description: "Login SuccessFull"
    });
    setCookie('accessToken', accessToken, 0.25)
    setCookie('refreshToken', refreshToken, 0.25)
    window.location.reload()
  };
  return (
    <div className="signup-container-main-container">
      <Tabs activeKey={activeKey}>
        <TabPane key="login" tab="Login">
          <LoginComponent
            loginSuccessFull={loginSuccessFull}
            setActiveKey={setActiveKey}
            setEmail={setEmail}
            setActiveTab={props.setActiveTab}
          />
        </TabPane>
        <TabPane key="otp" tab="OTP">
          <OtpComponent
            mode="login"
            loginSuccessFull={loginSuccessFull}
            setModalVisible={props.setModalVisible}
            email={email}
          />
        </TabPane>
        <TabPane key="forgotPassword" tab="Forgot Password">
          <ForgotPasswordComponent />
        </TabPane>
      </Tabs>
    </div>
  );
};
export default LoginContainer;
