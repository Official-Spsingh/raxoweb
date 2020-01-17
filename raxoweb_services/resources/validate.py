from flask_restful import Resource, reqparse
from models.user import UserModel
from models.validate import ValidateUser
import datetime
from db import db
class AuthUser(Resource):
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
        user_value = UserModel.find_by_email(data['email'])
        code = validate_value.code
        expiretime = validate_value.expiretime
        current_time = datetime.datetime.now()
        if expiretime > current_time:
            return {"message": "Code is expired"}, 401
        print("user code", data['code'])    
        if int(data['code']) == code:
            user_value.isactive = 'True'
            db.session.commit()
            return {"message": "User created successfully."}, 201
