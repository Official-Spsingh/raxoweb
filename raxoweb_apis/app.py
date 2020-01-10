from flask import Flask
from flask_restful import Api
from flask_jwt import JWT

from security import authenticate, identity
from resources.user import UserRegister
from resources.article import Article, ArticleList
from resources.category import Category, CategoryList
from resources.load_images import Images

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['PROPAGATE_EXCEPTIONS'] = True
app.secret_key = 'jose'
api = Api(app)


@app.before_first_request
def create_tables():
    db.create_all()


jwt = JWT(app, authenticate, identity)  # /auth

api.add_resource(Category, '/category')
api.add_resource(CategoryList, '/categories')
api.add_resource(Article, '/article')
api.add_resource(ArticleList, '/articles')
api.add_resource(UserRegister, '/register')
api.add_resource(Images,'/landing-page-images/<string:image>')
if __name__ == '__main__':
    from db import db
    db.init_app(app)
    app.run(port=5000, debug=True)
