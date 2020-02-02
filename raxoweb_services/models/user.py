from db import db


class UserModel(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    public_id = db.Column(db.String, unique=True)
    username = db.Column(db.String(80))
    password = db.Column(db.String(80))
    email = db.Column(db.String(80))
    admin = db.Column(db.Boolean)
    isactive = db.Column(db.Boolean)

    def __init__(self, username, password, email, public_id, admin, isactive):
        self.username = username
        self.password = password
        self.email = email
        self.public_id = public_id
        self.admin = admin
        self.isactive = isactive

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()

    @classmethod
    def find_by_email(cls, email):
        return cls.query.filter_by(email=email).first()

    # @classmethod
    # def find_by_id(cls, _id):
    #     return cls.query.filter_by(id=_id).first()
