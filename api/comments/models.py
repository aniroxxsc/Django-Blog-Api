from django.db import models
from authapp.models import User
from blog.models import Post
# Create your models here.

class Comment(models.Model):
    user=models.ForeignKey(User, related_name="user", on_delete=models.CASCADE)
    content=models.TextField()
    post=models.ForeignKey(Post, on_delete=models.CASCADE, default='00000')

