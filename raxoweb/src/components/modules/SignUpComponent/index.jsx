import React, { useState } from "react";
import { Form, Input, Icon, Button, notification } from "antd";
import makeRequest from "@utils/makeRequest";

const SignUpComponent = props => {
  const [emailValidationEnabled, enableEmailValidation] = useState(false);
  const [signUpLoading, setSignUpLoading] = useState(false);
  const { getFieldDecorator } = props.form;
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, value) => {
      if (err) {
        console.log(err);
      } else {
        setSignUpLoading(true);
        let dataToSend = {
          ...value
        };
        props.setEmail(value.email);
        delete dataToSend["confirmPassword"];
        makeRequest
          .post("register", dataToSend)
          .then(response => {
            setSignUpLoading(false);
            if (
              response.data.status.code == 201 ||
              response.data.status.code == 202
            ) {
              props.setActiveKey("otp");
            } else if (response.data.status.code == 409) {
              enableEmailValidation(true);
              props.form.validateFields(["email"], {
                force: true
              });
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    });
  };
  const validateToNextPassword = (rule, value, callback) => {
    if (value) {
      props.form.validateFields(["confirm"], {
        force: true
      });
    }
    callback();
  };
  const compareToFirstPassword = (rule, value, callback) => {
    if (value && value !== props.form.getFieldValue("password")) {
      callback("Confirm password does not match with Password");
    } else {
      callback();
    }
  };
  const emailValidator = (rule, value, callback) => {
    if (emailValidationEnabled) {
      callback("A user with this email already exists");
    } else {
      callback();
    }
  };
  return (
    <div className="signup-component-main-container">
      <div className="img-container">
        <img src={require("../../../assets/logo.png")} />
      </div>
      <div className="heading-container">
        <h2> Sign up To Raxoweb </h2>
      </div>
      <div className="signup-form-container">
        <Form
          onSubmit={handleSubmit}
          className="login-form"
          autoComplete={false}
        >
          <Form.Item label="Username">
            {getFieldDecorator("username", {
              rules: [
                {
                  required: true,
                  message: "Please enter your Username"
                }
              ]
            })(<Input/>)}
          </Form.Item>
          <Form.Item label="Email">
            {getFieldDecorator("email", {
              rules: [
                {
                  required: true,
                  message: "Please enter your email"
                },
                {
                  type: "email",
                  message: "Invalid email Id"
                },
                {
                  validator: emailValidator
                }
              ]
            })(<Input onFocus={() => enableEmailValidation(false)}/>)}
          </Form.Item>
          <Form.Item label="Password">
            {getFieldDecorator("password", {
              rules: [
                {
                  required: true,
                  message: "Please enter your Password"
                },
                {
                  validator: validateToNextPassword
                }
              ]
            })(<Input type="password" />)}{" "}
          </Form.Item>
          <Form.Item label="Confirm Password">
            {getFieldDecorator("confirmPassword", {
              rules: [
                {
                  required: true,
                  message: "Please enter your Password"
                },
                {
                  validator: compareToFirstPassword
                }
              ]
            })(<Input type="password" />)}
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              className="login-form-button"
              loading={signUpLoading}
            >
              Sign Up
            </Button>
          </Form.Item>
          <div className="login-btn">
            <span className="alreadyauser">Already a member?</span>
          <Button type="link" onClick={() => props.setActiveTab("login")}>
           Login
          </Button>
          </div>
         
        </Form>
      </div>
    </div>
  );
};
const WrappedSignUpComponent = Form.create({ name: "signUp" })(SignUpComponent);
export default WrappedSignUpComponent;
