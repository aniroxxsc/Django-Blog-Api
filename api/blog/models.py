from django.db import models
from authapp.models import User

# Create your models here.
class Post(models.Model): 
    content = models.TextField()
    title=models.TextField()
    description=models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    CreateTime = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.title

    class Meta:
        ordering=('CreateTime',)


class Images(models.Model):
    post = models.ForeignKey(Post, default=None,on_delete=models.CASCADE)
    image = models.ImageField(upload_to="images/",verbose_name='Image')