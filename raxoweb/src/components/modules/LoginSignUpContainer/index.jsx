import React,{useState} from "react"
import { Modal } from "antd"
import LoginComponent from '../LoginComponent'
import SignUpContainer from '../SignUpContainer'

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
          {
            activeTab == "login" ?
              <LoginComponent />
              :
              <SignUpContainer />
          }
        </div>
      </div>
    </Modal>
  );
}
