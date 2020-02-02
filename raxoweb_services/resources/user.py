from flask_restful import Resource, reqparse
from models.user import UserModel
from models.validate import ValidateUser
import datetime
from library.gmail.mail import mail_otp
from library.otp.otpgenerator import OtpGenerate
import uuid
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
# from functools import wraps

generat_otp = OtpGenerate()


# def token_required(f):
#     @wraps(f)
#     def decorated(*args, **kwargs):
#         token = None
#
#         if 'x-access-token' in request.headers:
#             token = request.headers['x-access-token']
#
#         if not token:
#             return {'message': 'Token is missing!'}
#
#         try:
#             data = jwt.decode(token, )
#             current_user = User.query.filter_by(public_id=data['public_id']).first()
#         except:
#             return {'message': 'Token is invalid!'}
#
#         return f(current_user, *args, **kwargs)
#
#     return decorated


# username, userpic, title , photo, content , category , time , hona chahiye

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
                code = generat_otp.generate(data['email'])
                valid_passcode = ValidateUser.find_by_email(data['email'])
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
            hash_password = generate_password_hash(data['password'], method='sha256')
            user = UserModel(data['username'], hash_password, data['email'], str(uuid.uuid4()), False, False)
            user.save_to_db()
            code = generat_otp.generate(data['email'])
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
    def __init__(self, secret):
        self.key = secret

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

    def post(self):
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
                           "value": "user not found."
                       }
                   }, 200
        if valid_user.isactive:
            if check_password_hash(valid_user.password, password):
                token = jwt.encode({'id': valid_user.id,
                                    'email': valid_user.email,
                                    'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=30)},
                                   self.key)
                return {
                           "data": {
                               "username": valid_user.username
                           },
                           "status": {
                               "code": 200,
                               "value": "login successfully",
                               "token": token.decode('UTF-8')
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
