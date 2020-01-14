import React from 'react'
import {Avatar,Form,Icon,Input,Button} from 'antd'

const LoginComponent = (props) => {
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
    const { getFieldDecorator } = props.form;
    return (
        <div className="login-component-main-container">
            <div className="login-content-container">
                <Avatar size={64} icon="user" />
        <div className="heading-container">
            <h2>Login</h2>
                </div>
            </div>
            <div className="login-form-container">
                <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please enter your Username' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please enter your Password' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block className="login-form-button">
            Log in
          </Button>
            <div className="forgot-password-container">
            <a className="login-form-forgot" href="">
            Forgot password ?
          </a>
                </div>
        </Form.Item>
      </Form>
            </div>
        </div>
    )
}
const WrappedLoginComponent = Form.create({ name: 'login' })(LoginComponent);
export default WrappedLoginComponent;
