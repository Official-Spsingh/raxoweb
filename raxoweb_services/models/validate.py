from db import db


class ValidateUser(db.Model):
    __tablename__ = 'validatecode'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(80))
    code = db.Column(db.Integer)
    expiretime = db.Column(db.DateTime)
    def __init__(self, email, code, expiretime):
        self.email = email
        self.code = code
        self.expiretime = expiretime
    def save_to_db(self):
        db.session.add(self)
        db.session.commit()
    @classmethod
    def find_by_email(cls, email):
        return cls.query.filter_by(email=email).first()

    # @classmethod
    # def find_by_id(cls, _id):
    #     return cls.query.filter_by(id=_id).first()    
