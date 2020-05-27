from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.decorators import api_view
from .serializer import PostSerializer, ImageSerializer
from .models import Post, Images
from .tasks import ConvertToImg
from rest_framework.response import Response
import logging
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