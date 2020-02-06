import React, { useState } from "react";
import { Avatar, Form, Icon, Input, Button } from "antd";
import makeRequest from "@utils/makeRequest";

const ForgotPasswordComponent = props => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, value) => {
      if (!err) {
        setLoading(true);
        makeRequest
          .post("forgot-password", value)
          .then(response => {
            console.log(response);
          })
          .catch(err => {
            console.log(err);
          });
      }
    });
  };
  const inputValidator = (rule, value, callback) => {
    if (message.length) {
      callback(message);
    } else {
      callback();
    }
  };
  const { getFieldDecorator } = props.form;
  return (
    <div className="login-component-main-container forgotpassword">
      <div className="img-container">
        <img src={require("../../../assets/logo.png")} />
      </div>
      <div className="heading-container">
        <h2> Forgot Password </h2>
      </div>
      <div className="login-form-container">
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item label="Email">
            {getFieldDecorator("email", {
              rules: [
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Invalid email Id" },
                { validator: inputValidator }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                onKeyDown={() => setMessage("")}
              />
            )}
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              className="login-form-button"
              loading={loading}
            >
              Find Account
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
const WrappedLoginComponent = Form.create({ name: "forgotPassword" })(
  ForgotPasswordComponent
);
export default WrappedLoginComponent;
