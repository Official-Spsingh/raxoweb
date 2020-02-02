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

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()

    @classmethod
    def find_by_email(cls, email):
        return cls.query.filter_by(email=email).first()

    # @classmethod
    # def find_by_id(cls, _id):
    #     return cls.query.filter_by(id=_id).first()


class ResetHash(db.Model):
    __tablename__ = 'resethash'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(80))
    hash = db.Column(db.String(100))

    def __init__(self, email, hash):
        self.email = email
        self.hash = hash

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()

    @classmethod
    def find_by_hash(cls, hash):
        return cls.query.filter_by(hash=hash).first()
