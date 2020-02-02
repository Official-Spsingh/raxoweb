from flask_restful import Resource, reqparse
from models.user import UserModel
from models.validate import ValidateUser, ResetHash
import datetime
from library.gmail.mail import mail_otp
from library.otp.otpgenerator import OtpGenerate
from flask import render_template, make_response, redirect
import hashlib

current_time = datetime.datetime
generat_otp = OtpGenerate()


class AuthUser(Resource):
    print("working here")
    parser = reqparse.RequestParser()
    parser.add_argument('code',
                        type=str,
                        required=True,
                        help="This field cannot be blank."
                        )
    parser.add_argument('email',
                        type=str,
                        required=True,
                        help="This field cannot be blank."
                        )

    def post(self):
        data = AuthUser.parser.parse_args()
        validate_value = ValidateUser.find_by_email(data['email'])
        # if validate_value is not None:
        user_value = UserModel.find_by_email(data['email'])
        code = validate_value.code
        expire_time = validate_value.expiretime
        print("current time ", current_time.now())
        print("expire time ", expire_time)
        if current_time.now() > expire_time:
            # user_value.delete_from_db()
            # validate_value.delete_from_db()
            return {
                "status": {
                    "code": 403,
                    "value": "403 expired"
                },
                "data": {
                    "message": "OTP is expired"
                }
            }
        if int(data['code']) == code:
            print("value saved to db")
            user_value.isactive = True
            user_value.save_to_db()
            print("done up to here")
            validate_value.delete_from_db()
            return {
                "status": {
                    "code": 201,
                    "value": "201 created"
                },
                "data": {
                    "message": "User created successfully."
                }
            }
        if int(data['code']) != code:
            return {
                "status": {
                    "code": 203,
                    "value": "203 invalid"
                },
                "data": {
                    "message": "passcode is wrong try again."
                }
            }
        # else:
        #     return {
        #         "status": {
        #             "code": 401,
        #             "value": "401 not created"
        #         },
        #         "data": {
        #             "message": "you don't have account."
        #         }
        #     }


class ResendOtp(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('email',
                        type=str,
                        required=True,
                        help="This field cannot be blank."
                        )

    @staticmethod
    def post():
        data = ResetPassword.parser.parse_args()
        code = generat_otp.generate(data['email'])
        username = UserModel.find_by_email(data['email']).username
        mail_otp(data['email'], str(code), username)
        validate_value = ValidateUser.find_by_email(data['email'])
        validate_value.code = code
        validate_value.expiretime = current_time.now() + datetime.timedelta(minutes=15)
        validate_value.save_to_db()
        return {
            "status": {
                "code": 201,
                "value": "201 created"
            },
            "data": {
                "message": "OTP is sent to register email"
            }
        }


class ResetPassword(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('email',
                        type=str,
                        required=True,
                        help="This field cannot be blank."
                        )

    @staticmethod
    def post():
        data = ResetPassword.parser.parse_args()
        user = UserModel.find_by_email(data['email'])
        print(data['email'])
        if user:
            code = hashlib.md5(str.encode(data['email'])).hexdigest()
            salt1 = "c2h56a7n3d25a1n9"
            salt2 = "c94h6a78i42n91a73n58i"
            final_code = salt1 + code + salt2
            hash_table = ResetHash(data['email'], final_code)
            hash_table.save_to_db()
            url = "http://127.0.0.1:5000/forgot-password/" + final_code
            # mail_otp(data['email'], str(code), username)
            return {
                "status": {
                    "code": 200,
                    "value": "200 success"
                },
                "data": {
                    # "message": "mail send to registered email id"
                    "message": url
                }
            }
        else:
            return {
                "status": {
                    "code": 400,
                    "value": "404 Not found"
                },
                "data": {
                    "message": "user not found"
                }
            }


class GenerateReset(Resource):
    def __init__(self):
        pass

    @staticmethod
    def get(otp):
        headers = {'Content-Type': 'text/html'}
        return make_response(render_template('index.html', email=otp), 200, headers)


class ValidateReset(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('hash',
                        type=str,
                        help="this field can't be empty"
                        )
    parser.add_argument('password',
                        type=str,
                        help="this field can't be empty")

    @staticmethod
    def post():
        data = ValidateReset.parser.parse_args()
        hash_info = ResetHash.find_by_hash(data['hash'])
        if hash_info:
            email = hash_info.email
            user = UserModel.find_by_email(email)
            user.password = data['password']
            user.save_to_db()
            hash_info.delete_from_db()
        return redirect("https://www.raxoweb.com", code=302)
