from flask_restful import Resource, reqparse
from models.user import UserModel
from models.validate import ValidateUser
import random
import datetime
import smtplib
from flask_mail import Mail, Message
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
        if UserModel.find_by_username(data['username']):
            return {"message": "A user with that username already exists"}, 400
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
