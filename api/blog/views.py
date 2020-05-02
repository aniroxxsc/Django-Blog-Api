from django.shortcuts import render
from rest_framework import generics
from .serializer import PostSerializer
from .models import Post
# Create your views here.

class PostList(generics.ListCreateAPIView):
    """
    API View to create a new Post.
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

