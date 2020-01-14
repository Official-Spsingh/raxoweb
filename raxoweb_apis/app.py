from flask import Flask
from flask_restful import Resource, reqparse, Api
from flask_mail import Mail, Message
app = Flask(__name__)
app.config.update({
    'MAIL_SERVER' : 'smtp.gmail.com',
    'MAIL_PORT' : '465',
    'MAIL_USE_SSL' : 'False',
    'MAIL_USERNAME' : 'raxoweb@gmail.com',
    'MAIL_PASSWORD' :'raxoweb@777'
})
api = Api(app)
mail = Mail(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///base.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['PROPAGATE_EXCEPTIONS'] = True

from resources.user import UserRegister
from resources.load_images import Images
from resources.validate import AuthUser
from db import db

db.init_app(app)
app.app_context().push()
db.create_all()

class MailSend(Resource):
    def get(self):
        try:
            msg = Message("mail sent success.",
            sender = 'raxoweb@gmail.com',
            recipients = ['kumarbipulsingh@gmail.com'])
            msg.body = "working code bro"
            mail.send(msg)
            return 'Mail sent'
        except Exception as e:
            return e    
# class Movies_List(Resource):
#     parser = reqparse.RequestParser()
#     parser.add_argument('director', type=str, required=False, help='Director of the movie')
#     parser.add_argument('genre', type=str, required=False, help='Genre of the movie')
#     parser.add_argument('collection', type=int, required=True, help='Gross collection of the movie')

#     def get(self, movie):
#         item = Movies.find_by_title(movie)
#         if item:
#             return item.json()
#         return {'Message': 'Movie is not found'}

#     def post(self, movie):
#         if Movies.find_by_title(movie):
#             return {' Message': 'Movie with the  title {} already exists'.format(movie)}
#         args = Movies_List.parser.parse_args()
#         item = Movies(movie, args['director'], args['genre'], args['collection'])
#         item.save_to()
#         return item.json()

#     def put(self, movie):
#         args = Movies_List.parser.parse_args()
#         item = Movies.find_by_title(movie)
#         if item:
#             item.collection = args['collection']
#             item.save_to()
#             return {'Movie': item.json()}
#         item = Movies(movie, args['director'], args['genre'], args['collection'])
#         item.save_to()
#         return item.json()

#     def delete(self, movie):
#         item  = Movies.find_by_title(movie)
#         if item:
#             item.delete_()
#             return {'Message': '{} has been deleted from records'.format(movie)}
#         return {'Message': '{} is already not on the list'.format()}

# class All_Movies(Resource):
#     def get(self):
#         return {'Movies': list(map(lambda x: x.json(), Movies.query.all()))}
class Home(Resource):
    def get(self):
        return {"status": "success 200"}
    def post(self):
        return {"status": "success 200"}    
api.add_resource(Home, '/')
api.add_resource(Images,'/landing-page-images/<string:image>')
api.add_resource(UserRegister, '/register')
api.add_resource(AuthUser, '/validate')
api.add_resource(MailSend,'/mail')


if __name__=='__main__':
    app.run(debug=True)
