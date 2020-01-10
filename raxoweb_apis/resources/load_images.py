from flask_restful import Resource
from os import path as os_path
from flask import send_file

class Images(Resource):
    def get(self, image):
        filename = 'media/'+image
        return send_file(filename, mimetype='image/gif')
