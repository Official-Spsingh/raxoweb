import React, {
    useState
} from 'react'
import {
    Form,
    Input,
    Icon,
    Button
} from 'antd'
import makeRequest from '../../../utils/makeRequest'

const SignUpComponent = (props) => {
        const {
            getFieldDecorator
        } = props.form;
        const handleSubmit = (e) => {
            e.preventDefault()
            props.form.validateFields((err, value) => {
                if (err) {
                    console.log(err)
                } else {
                    let dataToSend = {
                        ...value
                    }
                    delete dataToSend['confirmPassword']
                    makeRequest.post('register', dataToSend)
                        .then(response => {
                            console.log(response)
                        })
                        .catch(err => {
                            console.log(err)
                        })
                }

            })

        }
        const validateToNextPassword = (rule, value, callback) => {
            if (value) {
                props.form.validateFields(['confirm'], {
                    force: true
                });
            }
            callback();
        };
        const compareToFirstPassword = (rule, value, callback) => {
            if (value && value !== props.form.getFieldValue('password')) {
                callback('Confirm password does not match with Password');
            } else {
                callback();
            }
        };
        return ( <
                div className = "signup-component-main-container" >
                <
                div className = "heading-container" >
                <
                h2 > Sign Up < /h2> < /
                div > <
                div className = "signup-form-container" >
                <
                Form onSubmit = {
                    handleSubmit
                }
                className = "login-form" >
                <
                Form.Item > {
                    getFieldDecorator('username', {
                        rules: [{
                            required: true,
                            message: 'Please enter your Username'
                        }],
                    })( <
                        Input prefix = {
                            <
                            Icon type = "user"
                            style = {
                                {
                                    color: 'rgba(0,0,0,.25)'
                                }
                            }
                            />}
                            placeholder = "Enter your UserName" /
                            >
                            ,
                        )
                    } <
                    /Form.Item> <
                    Form.Item > {
                        getFieldDecorator('email', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please enter your email'
                                },
                                {
                                    type: 'email',
                                    meaasge: 'Invalid email Id'
                                }
                            ],
                        })( <
                            Input prefix = {
                                <
                                Icon type = "user"
                                style = {
                                    {
                                        color: 'rgba(0,0,0,.25)'
                                    }
                                }
                                />}
                                placeholder = "Enter your Email" /
                                >
                                ,
                            )
                        } <
                        /Form.Item> <
                        Form.Item > {
                            getFieldDecorator('password', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please enter your Password'
                                    },
                                    {
                                        validator: validateToNextPassword
                                    }
                                ],
                            })( <
                                Input prefix = {
                                    <
                                    Icon type = "lock"
                                    style = {
                                        {
                                            color: 'rgba(0,0,0,.25)'
                                        }
                                    }
                                    />}
                                    type = "password"
                                    placeholder = "Enter your Password" /
                                    >
                                    ,
                                )
                            } <
                            /Form.Item> <
                            Form.Item > {
                                getFieldDecorator('confirmPassword', {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Please enter your Password'
                                        },
                                        {
                                            validator: compareToFirstPassword
                                        }
            ],
                                })( <
                                    Input prefix = {
                                        <
                                        Icon type = "lock"
                                        style = {
                                            {
                                                color: 'rgba(0,0,0,.25)'
                                            }
                                        }
                                        />}
                                        type = "password"
                                        placeholder = "Confirm your Password" /
                                        >
                                        ,
                                    )
                                } <
                                /Form.Item> <
                                Form.Item >
                                <
                                Button type = "primary"
                                htmlType = "submit"
                                block className = "login-form-button" >
                                Sign Up <
                                /Button> < /
                                Form.Item > <
                                /Form> < /
                                div > <
                                /div>
                            )
                        }
                        const WrappedSignUpComponent = Form.create({
                            name: 'signUp'
                        })(SignUpComponent);
                        export default WrappedSignUpComponent;
