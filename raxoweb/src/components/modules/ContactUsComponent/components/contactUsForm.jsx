import React from 'react'
import { Form, Input, Icon, Row, Col, Button } from 'antd'

const ContactUsForm = (props) => {
    const { getFieldDecorator } = props.form;
    const handleSubmit = () => {

    }
    return (
        <div className='form-container'>
            <div className="title-container">
                <h1>CONTACT US</h1>
            </div>
            <Form onSubmit={handleSubmit}>
                <Row gutter={12}>
                    <Col span={12}>
                        <Form.Item>
                            {getFieldDecorator('firstName', {
                                rules: [{ required: true, message: 'Please enter your first name' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="First Name"
                                />,
                            )}
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item >
                            {getFieldDecorator('lastName', {
                                rules: [{ required: true, message: 'Please enter your last name' }],
                            })(
                                <Input
                                    placeholder="Last Name"
                                />,
                            )}
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item>
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Please enter your email' }],
                    })(
                        <Input
                            prefix={<Icon type="wechat" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Email"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('mobile', {
                        rules: [{ required: true, message: 'Please enter your mobile number' }],
                    })(
                        <Input
                            prefix={<Icon type="mobile" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Mobile No."
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('message', {
                        rules: [],
                    })(
                        <Input.TextArea
                            placeholder="Your message"
                            autosize={{ minRows: 4, maxRows: 4 }}
                        />,
                    )}
                </Form.Item>
                <center>
                    <Button type="primary" htmlType="submit" style={{width:150}}>
                        Submit
                    </Button>
                </center>
            </Form>
        </div>
    )
}
const WrappedContactUsForm = Form.create({ name: 'contact_us' })(ContactUsForm);
export default WrappedContactUsForm;