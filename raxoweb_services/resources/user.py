from flask_restful import Resource, reqparse
from models.user import UserModel
from models.validate import ValidateUser
import datetime
from library.gmail.mail import mail_otp
from library.otp.otpgenerator import Otp

current_time = datetime.datetime.now()


class UserRegister(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('username',
                        type=str,
                        required=True,
                        help="This field cannot be blank."
                        )
    parser.add_argument('password',
                        type=str,
                        required=True,
                        help="This field cannot be blank."
                        )
    parser.add_argument('email',
                        type=str,
                        required=True,
                        help="This field cannot be blank."
                        )

    @staticmethod
    def post():
        data = UserRegister.parser.parse_args()
        past_user = UserModel.find_by_email(data['email'])
        if past_user is not None:
            # user_code = ValidateUser.find_by_email(data['email'])
            if past_user.isactive == 'True':
                return {
                    "status": {
                        "code": 409,
                        "value": "409 conflict"
                    },
                    "data": {
                        "message": "A user with this email already exists"
                    }
                }
            # elif user_code.expiretime > current_time:
            #     return {
            #         "status": {
            #             "code": 202,
            #             "value": "202 accepted"
            #         },
            #         "data": {
            #             "message": "A user with this email already registered but not validated."
            #         }
            #     }
            else:
                past_user.email = data['email']
                past_user.username = data['username']
                past_user.password = data['password']
                past_user.save_to_db()
                code = Otp.generate(data['email'])
                valid_passcode =ValidateUser.find_by_email(data['email'])
                valid_passcode.code = code
                valid_passcode.save_to_db()
                mail_otp(data['email'], str(code), data['username'])
                return {
                    "status": {
                        "code": 201,
                        "value": "201 created"
                    },
                    "data": {
                        "message": "User created successfully."
                    }
                }

        try:
            user = UserModel(data['username'], data['password'], data['email'], 'False')
            user.save_to_db()
            code = Otp.generate(data['email'])
            """send mail to user for otp"""
            mail_otp(data['email'], str(code), data['username'])
            return {
                "status": {
                    "code": 201,
                    "value": "201 created"
                },
                "data": {
                    "message": "User created successfully."
                }
            }
        except Exception as e:
            return {
                "status": {
                    "code": 500,
                    "value": f"500 server error, {e}"
                },
                "data": {
                    "message": "can't able to create user, please try again"
                }
            }


class UserLogin(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('email',
                        type=str,
                        required=True,
                        help="This field cannot be blank."
                        )
    parser.add_argument('password',
                        type=str,
                        required=True,
                        help="This field cannot be blank."
                        )

    @staticmethod
    def post():
        data = UserLogin.parser.parse_args()
        email = data['email']
        password = data['password']
        valid_user = UserModel.find_by_email(email)
        if valid_user is None:
            return {"data": {
                "message": "You don't have user account, please create one first"
            },
                       "status": {
                           "code": 400,
                           "value": "user not found yaa"
                       }
                   }, 200
        if valid_user.isactive == 'True':
            if valid_user.password == password:
                return {
                           "data": {
                               "username": valid_user.username
                           },
                           "status": {
                               "code": 200,
                               "value": "login successfully"
                           }
                       }, 200
            else:
                return {
                           "data": {
                               "username": valid_user.username
                           },
                           "status": {
                               "code": 400,
                               "value": "Wrong password"
                           }
                       }, 200
        else:
            return {
                       "data": {
                           "username": valid_user.username
                       },
                       "status": {
                           "code": 405,
                           "value": "user registered but validation not completed yet."
                       }
                   }, 200
