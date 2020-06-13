from flask_restful import Resource, reqparse
from models.user import UserModel
from models.validate import ValidateUser
from library.gmail.mail import mail_otp
from library.otp.otpgenerator import OtpGenerate
import uuid
from werkzeug.security import generate_password_hash, check_password_hash
from blacklist import BLACKLIST
from flask_jwt_extended import (
    create_access_token,
    create_refresh_token,
    jwt_refresh_token_required,
    get_jwt_identity,
    jwt_required,
    get_raw_jwt,
)

generat_otp = OtpGenerate()


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
        if past_user:
            if past_user.isactive:
                return {
                    "status": {
                        "code": 409,
                        "value": "409 conflict"
                    },
                    "data": {
                        "message": "A user with this email already exists"
                    }
                }
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
                # token = jwt.encode({'id': valid_user.id,
                #                     'email': valid_user.email,
                #                     'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=30)},
                #                    self.key)
                # identity= is what the identity() function did in security.py—now stored in the JWT
                access_token = create_access_token(identity=valid_user.id, fresh=True)
                refresh_token = create_refresh_token(valid_user.id)
                # return {"access_token": access_token, "refresh_token": refresh_token}, 200
                return {
                           "data": {
                               "username": valid_user.username
                           },
                           "status": {
                               "code": 200,
                               "value": "login successfully",
                               "access_token": access_token,
                               "refresh_token": refresh_token
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


class UserLogout(Resource):
    @jwt_required
    def post(self):
        jti = get_raw_jwt()["jti"]  # jti is "JWT ID", a unique identifier for a JWT.
        user_id = get_jwt_identity()
        BLACKLIST.add(jti)
        return {"message": "User <id={}> successfully logged out.".format(user_id)}, 200


class TokenRefresh(Resource):
    @jwt_refresh_token_required
    def post(self):
        current_user = get_jwt_identity()
        new_token = create_access_token(identity=current_user, fresh=False)
        return {"access_token": new_token}, 200
