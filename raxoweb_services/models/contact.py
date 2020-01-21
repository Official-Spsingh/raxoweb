from db import db


class ContactModel(db.Model):
    __tablename__ = 'contactus'
    id = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String(80))
    lastname = db.Column(db.String(80))
    email = db.Column(db.String(80))
    mobile = db.Column(db.Integer)
    message = db.Column(db.String(200))

    def __init__(self, firstname, lastname, email, mobile, message):
        self.firstname = firstname
        self.lastname = lastname
        self.email = email
        self.mobile = mobile
        self.message = message

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()
