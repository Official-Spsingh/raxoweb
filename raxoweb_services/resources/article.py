from flask_restful import Resource, reqparse
import jwt
from flask import request
from functools import wraps
from models.user import UserModel
from library.decorators.token import token_required


# username, userpic, title , photo, content , category , time
# class Article(Resource):
#     parser = reqparse.RequestParser()
#     parser.add_argument('containt',
#                         type=str,
#                         required=True,
#                         help="This field cannot be left blank!"
#                         )
#     parser.add_argument('category_id',
#                         type=str,
#                         required=True,
#                         help="Every article needs a category_id."
#                         )
#
#     parser.add_argument('date',
#                         type=int,
#                         required=True,
#                         help="Every article need current date"
#                         )
#     parser.add_argument('userid',
#                         type=int,
#                         required=True,
#                         help="Every article need current date"
#                         )
#     parser.add_argument('img',
#                         type=int,
#                         required=True,
#                         help="Every article need current date"
#                         )
#
#     @jwt_required()
#     def get(self, name):
#         article = ArticleModel.find_by_name(name)
#         if article:
#             return article.json()
#         return {'message': 'Article not found'}, 404
#
#     def post(self, name):
#         if ItemModel.find_by_name(name):
#             return {'message': "An article with name '{}' already exists.".format(name)}, 400
#
#         data = Item.parser.parse_args()
#
#         item = ItemModel(name, **data)
#
#         try:
#             item.save_to_db()
#         except:
#             return {"message": "An error occurred inserting the item."}, 500
#
#         return item.json(), 201
#
#     def delete(self, name):
#         item = ItemModel.find_by_name(name)
#         if item:
#             item.delete_from_db()
#             return {'message': 'Item deleted.'}
#         return {'message': 'Item not found.'}, 404
#
#     def put(self, name):
#         data = Item.parser.parse_args()
#
#         item = ItemModel.find_by_name(name)
#
#         if item:
#             item.price = data['price']
#         else:
#             item = ItemModel(name, **data)
#
#         item.save_to_db()
#
#         return item.json()
#
#
# class ArticleList(Resource):
#     def get(self):
#         return {'articles': list(map(lambda x: x.json(), ArticleModel.query.all()))}

class UserPost(Resource):
    def __init__(self, secret):
        self.key = secret

    parser = reqparse.RequestParser()

    # parser.add_argument('x-access-token', type=str, location='headers', required=True)
    @token_required
    def post(self, current_user):
        data = UserPost.parser.parse_args()
        print("this is current user", current_user.email)
        # token = None
        # if 'x-access-token' in request.headers:
        #     token = request.headers['x-access-token']
        #
        # if not token:
        #     return {'message': 'Token is missing!'}
        #
        # try:
        #     token_data = jwt.decode(token, self.key)
        #     current_user = UserModel.find_by_email(token_data['email'])
        # except:
        #     return {'message': 'Token is invalid!'}
        return {"message": "done"}
