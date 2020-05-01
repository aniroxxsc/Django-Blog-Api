from django.db import models
from authapp.models import User

# Create your models here.
class Post(models.Model): 
    content = models.TextField()
    title=models.TextField()
    username = models.ForeignKey(User, to_field='username', on_delete=models.CASCADE)