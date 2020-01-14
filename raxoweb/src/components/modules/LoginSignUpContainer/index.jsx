import React from "react";
import { Modal } from "antd";
import { useState } from "react";

export default function LoginSignUpContainer({ visible, setModalVisible }) {
  const [activeTab, setActiveTab] = useState("login");
  return (
    <Modal
      visible={visible}
      onCancel={() => setModalVisible(false)}
      footer={null}
      closable={false}
      getContainer={() => document.getElementById("RaxowebMain")}
    >
      <div className="loginSignupContainer">
        <div className="loginSignup-tabs">
          <div className="login" onClick={() => setActiveTab("login")} >
            Login
          </div>
          <div className="signup" onClick={() => setActiveTab("signup")}>
            SignUp
          </div>
        </div>
        <div className="tab-content">
          {activeTab == "login" ? (
            <div className="loginContent">login</div>
          ) : (
            <div className="signupContent">signup</div>
          )}
        </div>
      </div>
    </Modal>
  );
}