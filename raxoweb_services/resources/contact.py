from flask_restful import reqparse, Resource
from library.gmail.mail import mail_info, mail_me
from models.contact import ContactModel


class ContactUs(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('firstname',
                        type=str,
                        required=True,
                        help="This field cannot be blank")
    parser.add_argument('lastname',
                        type=str,
                        required=True,
                        help="This field cannot be blank")
    parser.add_argument('email',
                        type=str,
                        required=True,
                        help="This field cannot be blank")
    parser.add_argument('message',
                        type=str,
                        required=True,
                        help="This field cannot be blank")
    parser.add_argument('mobile',
                        type=int,
                        required=True,
                        help="This field cannot be blank")

    @staticmethod
    def post():
        data = ContactUs.parser.parse_args()
        userinfo = ContactModel(data['firstname'], data['lastname'],
                                data['email'], data['mobile'],
                                data['message'])
        userinfo.save_to_db()
        mail_info(data['email'], data['firstname'])
        mail_me(data['firstname'], data['email'], data['mobile'], data['message'])
        return {
                   "data": {
                       "Message": "we will contact you soon"
                   },
                   "status": {
                       "code": 200,
                       "value": "200 sent"
                   }
               }, 200
