from rest_framework import serializers
from .models import Post
from authapp.serializer import UserCreateSerializer

class PostSerializer(serializers.ModelSerializer):
    # user = UserCreateSerializer()

    class Meta:
        model = Post
        fields = ['content','id','title','user', 'CreateTime', 'description']
