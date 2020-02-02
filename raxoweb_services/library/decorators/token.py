import jwt
from functools import wraps
from flask import request
from models.user import UserModel


def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None
        if 'x-access-token' in request.headers:
            token = request.headers['x-access-token']
        if not token:
            return {'message': 'Token is missing!'}
        try:
            data = jwt.decode(token, args[0].key)
            current_user = UserModel.find_by_email(data['email'])
        except:
            return {'message': 'Token is invalid!'}
        return f(*args, current_user, **kwargs)

    return decorated
