from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class User(AbstractUser):
    email = models.EmailField(verbose_name='email', max_length=255,null=True)
    phone = models.IntegerField(null=True)
    username = models.IntegerField(unique=True)
    REQUIRED_FIELDS = ['phone','first_name','last_name']
    USERNAME_FIELD = 'username'

    def get_username(self):
        return str(self.username)