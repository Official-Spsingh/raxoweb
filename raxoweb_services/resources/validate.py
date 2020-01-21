from flask_restful import Resource, reqparse
from models.user import UserModel
from models.validate import ValidateUser
import datetime
from library.gmail.mail import mail_otp
from library.otp.otpgenerator import Otp

current_time = datetime.datetime


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
            user_value.isactive = 'True'
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
        code = Otp.generate(data['email'])
        username = UserModel.find_by_email(data['email']).username
        mail_otp(data['email'], str(code), username)
        return {
            "status": {
                "code": 201,
                "value": "201 created"
            },
            "data": {
                "message": "OTP is sent to register email"
            }
        }


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
        code = Otp.generate(data['email'])
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
