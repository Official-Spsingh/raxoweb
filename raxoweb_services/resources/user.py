from flask_restful import Resource, reqparse
from models.user import UserModel
from models.validate import ValidateUser
import random
import datetime
import smtplib
from flask_mail import Mail, Message

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

    def post(self):
        data = UserRegister.parser.parse_args()
        if UserModel.find_by_username(data['email']):
            return {"message": "A user with this email already exists"}, 400
        try:
            user = UserModel(data['username'], data['password'], data['email'])
            user.save_to_db()
            code = random.randint(1000,9999)
            expiretime = t2 = (datetime.datetime.now() + datetime.timedelta(minutes=15))
            print("expiretime", expiretime,"\n code",code)
            validate_user = ValidateUser(data['email'],code,expiretime)
            validate_user.save_to_db()
        except:
            return {"message": "can't able to create user, please try again"}
        return {"message": "User created successfully."}, 201

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
        if not valid_user:
            return { "data":{
                        "message": "You don't have user account, please create one first"
                            },
                    "status":{
                    "code":400,
                    "value":"user not found"
                    }
                }, 200
        if  valid_user.isactive:
            if valid_user.password == password:
                return {
                "data":{
                        "username":valid_user.username
                    },
                "status":{
                "code":200,
                "value":"login successfully"
                 }
                }, 200
            else:
                return {
                    "data":{
                        "username":valid_user.username
                    },
                    "status":{
                        "code":400,
                        "value":"Wrong password"
                 }
                }, 200
        else:
            if ValidateUser.find_by_email(email).expiretime < current_time:
                return {
                    "data":{
                        "username":valid_user.username
                    },
                    "status":{
                        "code":405,
                        "value":"validate pincode"
                 }
                }, 200
            else:
                return {
                    "data":{
                        "username":valid_user.username
                    },
                    "status":{
                        "code":405,
                        "value":"passcode expire, please signup again."
                 }
                }, 200
