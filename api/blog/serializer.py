from rest_framework import serializers
from .models import Post,Images
from authapp.serializer import UserCreateSerializer



class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post
        fields = ['content','id','title','user','CreateTime', 'description']


class ImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Images
        fields= ['id','post','image']
