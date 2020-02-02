import random
import datetime
from models.validate import ValidateUser

current_time = datetime.datetime


class OtpGenerate:
    @staticmethod
    def generate(email):
        code = random.randint(1000, 9999)
        expire_time = current_time.now() + datetime.timedelta(minutes=15)
        past_user = ValidateUser.find_by_email(email)
        if past_user is not None:
            past_user.expire_time = expire_time
            past_user.code = code
            return code
        validate_user = ValidateUser(email, code, expire_time)
        validate_user.save_to_db()
        return code
