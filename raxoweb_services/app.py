from flask import Flask
from flask_restful import Resource, Api
from resources.user import UserRegister, UserLogin
from resources.validate import AuthUser, ResetPassword, ResendOtp
from resources.contact import ContactUs
from flask_cors import CORS
from db import db

app = Flask(__name__)
CORS(app)
api = Api(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///base.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['PROPAGATE_EXCEPTIONS'] = True

db.init_app(app)
app.app_context().push()
db.create_all()


class Home(Resource):
    @staticmethod
    def get():
        return {"status": "success 200"}

    @staticmethod
    def post():
        return {"status": "success 200"}


# class Movies_List(Resource):
#     parser = reqparse.RequestParser()
#     parser.add_argument('director', type=str, required=False, help='Director of the movie')
#     parser.add_argument('genre', type=str, required=False, help='Genre of the movie')
#     parser.add_argument('collection', type=int, required=True, help='Gross collection of the movie')

api.add_resource(Home, '/')
api.add_resource(UserRegister, '/register')
api.add_resource(AuthUser, '/validate')
api.add_resource(UserLogin, '/login')
api.add_resource(ContactUs, '/contact-us')
api.add_resource(ResetPassword, '/forgot-password')
api.add_resource(ResendOtp, '/resend-otp')

if __name__ == '__main__':
    app.run(debug=True)
