from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.decorators import api_view
from .serializer import PostSerializer, ImageSerializer, LatestSerializer
from .models import Post, Images
from .tasks import ConvertToImg
from rest_framework.response import Response
import logging

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes

# Create your views here.
logger = logging.getLogger('django')

class PostList(generics.ListCreateAPIView):
    """
    API View to create a new Post.
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    logger.info('List View')
    def perform_create(self, serializer):
        serializer.save()
        ConvertToImg(serializer.data['content'],serializer.data['id'])


class LatestList(generics.ListCreateAPIView):
    """
    API View to create a new Post.
    """
    queryset=Post.objects.all()[:10]
    serializer_class = PostSerializer
    logger.info('List View Latest')

class ImageList(generics.ListCreateAPIView):
    """
    API View to create a new Post.
    """
    queryset= Images.objects.order_by('-id')
    serializer_class = ImageSerializer
    logger.info('List View Latest')

class PostView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    logger.info('Detail View')


@api_view(['GET',])
def image_view(request,pk):
    try:
        images = Images.objects.filter(post=pk)
        logger.info('image view func')
    except Images.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer= ImageSerializer(images,many=True)
        return Response(serializer.data)


class LatestBlog(generics.ListAPIView):
    queryset=Images.objects.order_by('-id')[:5]
    serializer_class = LatestSerializer

#
@api_view(['GET',])
def post_view(request):
    
    try:
        user_post = Post.objects.filter(user=request.user)
    except Post.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer= PostSerializer(user_post,many=True)
        return Response(serializer.data)

@api_view(['GET',])
def post_with_images(request,pk):
    
    try:
        user_post = Post.objects.filter(id=pk)
        post_image = Images.objects.filter(post = pk)
    except Post.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer= PostSerializer(user_post,many=True)
        serializer2 = ImageSerializer(post_image,many=True)
        Serializer_list = [serializer.data, serializer2.data]
        return Response(serializer.data + serializer2.data, status=status.HTTP_200_OK)

