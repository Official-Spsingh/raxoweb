from flask import Flask
from flask_restful import Resource, Api
from resources.user import UserRegister, UserLogin
from resources.validate import (AuthUser, ResendOtp, ResetPassword, GenerateReset,
                                ValidateReset)
from resources.contact import ContactUs
from flask_cors import CORS
from db import db
from resources.article import UserPost

app = Flask(__name__)
CORS(app)
api = Api(app)

# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///base.db'
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://tormbhvmkdgchc' \
                                        ':ccfa7cdcfa58862d6a17c4e329ce9df4215c3e0bef2b3bebb8d812240c1b34e4@ec2-107-21' \
                                        '-226-44.compute-1.amazonaws.com:5432/d7j2oui4ncj0gj'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['PROPAGATE_EXCEPTIONS'] = True
app.config['SECRET_KEY'] = '_ra/xo$web!@secret#key_'
db.init_app(app)
app.app_context().push()
# db.create_all()


class Home(Resource):
    @staticmethod
    def get():
        return {"status": "success 200"}

    @staticmethod
    def post():
        return {"status": "success 200"}


api.add_resource(Home, '/')
api.add_resource(UserRegister, '/register')
api.add_resource(AuthUser, '/validate')
api.add_resource(UserLogin, '/login',
                 resource_class_kwargs={'secret': app.config['SECRET_KEY']})
api.add_resource(ContactUs, '/contact-us')
api.add_resource(ResendOtp, '/resend-otp')
api.add_resource(ResetPassword, '/reset-password')
api.add_resource(GenerateReset, '/forgot-password/<string:otp>')
api.add_resource(ValidateReset, '/change-password')
api.add_resource(UserPost, '/blog-post',
                 resource_class_kwargs={'secret': app.config['SECRET_KEY']})
if __name__ == '__main__':
    app.run()
