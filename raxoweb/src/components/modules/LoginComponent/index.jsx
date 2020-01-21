import React, { useState } from 'react'
import { Avatar, Form, Icon, Input, Button } from 'antd'
import makeRequest from '../../../utils/makeRequest'

const LoginComponent = (props) => {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    props.form.validateFields((err, value) => {
      if (!err) {
        setLoading(true)
        makeRequest.post('login', value)
          .then(response => {
            if (response.data.status.code == 400) {
              setMessage("User not Found")
              props.form.validateFields(['email'], { force: true })
              setLoading(false)
            }
            else if (response.data.status.code == 405) {
              makeRequest.post('resend-otp', { email: value.email })
                .then(response => {
                  if (response.data.status.code == 201) {
                    props.setEmail(value.email)
                    props.setActiveKey('otp')
                  }
                  else {

                  }
                })
                .catch(err => {
                  console.log(err)
                })
            }
            else if (response.data.status.code == 200) {
              props.loginSuccessFull()
            }
          })
          .catch(err => {
            console.log(err)
          })
      }
    })
  }
  const emailValidator = (rule, value, callback) => {
    if (message.length) {
      callback(message)
    }
    else {
      callback()
    }
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
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please enter your email' }, { type: 'email', message: 'Invalid email Id' }, { validator: emailValidator }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Email"
                onKeyDown={() => setMessage('')}
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
            <Button type="primary" htmlType="submit" block className="login-form-button" loading={loading}>
              Log in
          </Button>
            <div className="forgot-password-container">
              <Button type="link" onClick={() => props.setActiveTab('signup')}>Sign Up</Button>
              <Button type="link">Forgot Password ?</Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
const WrappedLoginComponent = Form.create({ name: 'login' })(LoginComponent);
export default WrappedLoginComponent;
