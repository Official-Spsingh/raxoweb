import React from "react";
import { Form, Input, Icon, Row, Col, Button } from "antd";
import makeRequest from "../../../../utils/makeRequest";
const ContactUsForm = props => {
  const { getFieldDecorator } = props.form;
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, value) => {
     
      if (!err) {
        props.dataSent(true, "spin");
        let dataToSend = {
          ...value
        };
        makeRequest
          .post("contact-us", dataToSend)
          .then(response => {
            if (response.data.status.code == 200) {
              props.dataSent(false, "success");
              console.log(response);
            }
            console.log(response);
          })
          .catch(e => {
            props.dataSent(false, "error");
          });
      }
    });
  };
  const validateMobile = (rule, value, callback) => {
    if (value && isNaN(value)) {
      callback("Please Enter Valid mobile number");
    } else {
      callback();
    }
  };
  return (
    <div className="form-container">
      <div className="title-container">
        <h1>CONTACT US</h1>
      </div>
      <Form onSubmit={handleSubmit}>
        <Row gutter={12}>
          <Col span={12}>
            <Form.Item>
              {getFieldDecorator("firstname", {
                rules: [
                  { required: true, message: "Please enter your first name" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="First Name"
                />
              )}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item>
              {getFieldDecorator("lastname", {
                rules: [
                  { required: true, message: "Please enter your last name" }
                ]
              })(<Input placeholder="Last Name" />)}
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          {getFieldDecorator("email", {
            rules: [
              { required: true, message: "Please enter your email" },
              {
                type: "email",
                message: "Invalid Email Id"
              }
            ]
          })(
            <Input
              prefix={
                <Icon type="wechat" style={{ color: "rgba(0,0,0,.25)" }} />
              }
              placeholder="Email"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("mobile", {
            rules: [
              { required: true, message: "Please enter your mobile number" },
              {
                validator: validateMobile
              }
            ]
          })(
            <Input
              prefix={
                <Icon type="mobile" style={{ color: "rgba(0,0,0,.25)" }} />
              }
              placeholder="Mobile No."
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("message", {
            rules: []
          })(
            <Input.TextArea
              placeholder="Your message"
              autosize={{ minRows: 4, maxRows: 4 }}
            />
          )}
        </Form.Item>
        <div className="contact-buttons">
          <Button className="contact-btn cancel" onClick={props.closeModal}>
            Cancel
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            className="contact-btn submit"
            loading={props.loading}
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};
const WrappedContactUsForm = Form.create({ name: "contact_us" })(ContactUsForm);
export default WrappedContactUsForm;
