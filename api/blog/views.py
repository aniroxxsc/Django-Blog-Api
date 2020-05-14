from django.shortcuts import render
from rest_framework import generics
from .serializer import PostSerializer
from .models import Post
from .tasks import ConvertToImg
# Create your views here.

class PostList(generics.ListCreateAPIView):
    """
    API View to create a new Post.
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    def perform_create(self, serializer):
        serializer.save()
        ConvertToImg(serializer.data['content'],serializer.data['id'])
        

        


class PostView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

