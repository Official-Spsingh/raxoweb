import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { Button, Form, message as Message } from "antd";
import makeRequest from "../../../utils/makeRequest";
const OtpComponent = props => {
  const { getFieldDecorator } = props.form;
  const [loading, setLoading] = useState(false);
  const [otpLoading, setOTPLoading] = useState(false);
  const [message, setMessage] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, value) => {
      if (!err) {
        setLoading(true);
        const otpData = {
          email: props.email,
          code: value.otp
        };
        makeRequest
          .post("validate", otpData)
          .then(response => {
            setLoading(false);
            if (response.data.status.code == 201) {
              if (props.mode == "signUp") {
                props.setActiveKey("success");
              } else {
                props.loginSuccessFull();
              }
            } else if (response.data.status.code == 401) {
              setMessage(response.data.data.message);
              props.form.validateFields(["otp"], { force: true });
            } else if (response.data.status.code == 403) {
              setMessage(response.data.data.message);
              props.form.validateFields(["otp"], { force: true });
            } else if (response.data.status.code == 203) {
              setMessage(response.data.data.message);
              props.form.validateFields(["otp"], { force: true });
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    });
  };
  const otpValidator = (rule, value, callback) => {
    if (message.length) {
      callback(message);
    } else {
      callback();
    }
  };
  const resendOtp = () => {
    setOTPLoading(false);
    makeRequest
      .post("resend-otp", { email: props.email })
      .then(response => {
        setOTPLoading(false);
        if (response.data.status.code == 201) {
          Message.success("OTP is Successfully sent to your registered email");
        } else {
          console.log(response);
        }
      })
      .catch(err => {
        setOTPLoading(false);
        console.log(err);
      });
  };
  return (
    <div className="otp-component-main-container" id="otp-main-container">
      <div className="img-container">
        <img src={require("../../../assets/logo.png")} />
      </div>
      <div className="heading-container">
        <h2>Enter OTP</h2>
      </div>
      <div className="otp-form-container">
        <Form onSubmit={handleSubmit}>
          <div className="otp-input-container">
            <Form.Item>
              {getFieldDecorator("otp", {
                rules: [
                  {
                    required: true,
                    message: "Please enter OTP sent to your email Id"
                  },
                  { validator: otpValidator }
                ]
              })(
                <OtpInput
                  numInputs={4}
                  containerStyle="container-style"
                  inputStyle="input-style"
                  isInputNum={true}
                  onChange={() => setMessage("")}
                />
              )}
            </Form.Item>
          </div>
          <div className="otp-verify-button-container">
            <Button type="primary" block htmlType="submit" loading={loading}>
              Submit
            </Button>
          </div>
          <div className="otp-footer-buttons-container">
            <Button type="primary" onClick={() => props.setModalVisible(false)}>
              Cancel
            </Button>
            <Button type="primary" onClick={resendOtp} loading={otpLoading}>
              Resend OTP
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
const WrappedOtpForm = Form.create({ name: "otp_form" })(OtpComponent);
export default WrappedOtpForm;
