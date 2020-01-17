from flask import Flask
from flask_restful import Resource, reqparse, Api
from flask_mail import Mail, Message

from resources.user import UserRegister
from resources.load_images import Images
from resources.validate import AuthUser
from resources.user import UserLogin
from db import db

app = Flask(__name__)

api = Api(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///base.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['PROPAGATE_EXCEPTIONS'] = True

db.init_app(app)
app.app_context().push()
db.create_all()

class Home(Resource):
    def get(self):
        return {"status": "success 200"}
    def post(self):
        return {"status": "success 200"}

# class Movies_List(Resource):
#     parser = reqparse.RequestParser()
#     parser.add_argument('director', type=str, required=False, help='Director of the movie')
#     parser.add_argument('genre', type=str, required=False, help='Genre of the movie')
#     parser.add_argument('collection', type=int, required=True, help='Gross collection of the movie')

api.add_resource(Home, '/')
api.add_resource(Images,'/landing-page-images/<string:image>')
api.add_resource(UserRegister, '/register')
api.add_resource(AuthUser, '/validate')
api.add_resource(UserLogin, '/login')


if __name__=='__main__':
    app.run(debug=True)
