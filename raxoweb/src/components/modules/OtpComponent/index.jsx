import React, { useState } from 'react'
import OtpInput from 'react-otp-input'
import { Button, Form } from 'antd'
import makeRequest from '../../../utils/makeRequest'
const OtpComponent = (props) => {
    const { getFieldDecorator } = props.form
    const [loading, setLoading] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        props.form.validateFields((err, value) => {
            if (!err) {
                setLoading(true)
                // makeRequest.post('')
            }
        })

    }
    return (
        <div className="otp-component-main-container">
            <div className="heading-container">
                <h2>Please enter OTP sent to your Registered Email Id</h2>
            </div>
            <div className="otp-form-container">
                <Form onSubmit={handleSubmit}>
                    <div className="otp-input-container">
                        <Form.Item>
                            {getFieldDecorator('otp', {
                                rules: [{ required: true, message: 'Please enter OTP sent to your email Id' }],
                            })(
                                <OtpInput
                                    numInputs={4}
                                    containerStyle='container-style'
                                    inputStyle='input-style'
                                    isInputNum={true}
                                />
                            )}
                        </Form.Item>
                    </div>
                    <div className="otp-verify-button-container">
                        <Button type="primary" block htmlType='submit' loading={loading} >Submit</Button>
                    </div>
                    <div className="otp-footer-buttons-container">
                        <Button type="primary" onClick={() => props.setModalVisible(false)}>Cancel</Button>
                        <Button type="primary">Resend OTP</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}
const WrappedOtpForm = Form.create({ name: 'otp_form' })(OtpComponent);
export default WrappedOtpForm;
