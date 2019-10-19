import React, { Component } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
export default class ContactUs extends Component {
    render() {
        return (
            <div className="contact-us">
                <h1 class="section-heading">Contact Us</h1>
                <div className="contact-us-content">
                    <Row>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <h3>Drop Us a Message...
                            </h3>
                            <Form layout="horizontal">

                                <Form.Item label="Name">
                                    <Input placeholder="Let us Know Your name" />
                                </Form.Item>
                                <Form.Item label="Email">
                                    <Input placeholder="What's Your Email Id" />
                                </Form.Item>
                                <Form.Item label="Message">
                                    <Input.TextArea placeholder="Your Message" />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary">Submit</Button>
                                </Form.Item>
                            </Form>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <h3>Know More about us
                            </h3>
                            <div className="contact-content">
                                <h4>Website</h4>
                                <div>raxoweb.com</div>
                                <h4>Social Media</h4>
                                <div>Facebook : facebook.com/raxoweb</div>
                                <div>Facebook : facebook.com/raxoweb</div>
                                <div>Facebook : facebook.com/raxoweb</div>
                                <h4>Mail Us at</h4>
                                <div>raxoweb@gmail.com</div>

                            </div>
                        </Col>

                    </Row>

                </div>
            </div>
        )
    }
}