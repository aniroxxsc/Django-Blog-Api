from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import ListAPIView
from rest_framework.generics import CreateAPIView

from rest_framework import status
from .serializer import LikeSerializer
from .models import Like
from blog.models import Post
# Create your views here.

from django.shortcuts import get_object_or_404


class LikeList(generics.ListAPIView):
    """
    API View to create a new Like.
    """
    queryset = Like.objects.all()
    serializer_class = LikeSerializer
    def get_queryset(self):
        user = self.request.user
        return Like.objects.filter(user=user,)

#like_create adds like to a post

@api_view(['POST',])
@permission_classes((IsAuthenticated,))
def like_create(request, pk):
    like = Like(user=request.user) 
    if request.method == 'POST':
        serializer = LikeSerializer(like, data=request.data)
        if serializer.is_valid():
            serializer.save()
        post = get_object_or_404(Post, pk=pk)
        user = request.user
    if Like.objects.filter(user=request.user, post=post).exists() :
        temp = Like.objects.filter(user=request.user, post=post)
        temp.delete()
        return Response(
            {
                "message":"Removed like",
                "status" : False,
                }
        )
    else :
        Like.objects.create(post=post, user=user)
        return Response(
            {
                "message":"Like done successfully",
                "status" : True,
                }
        )
@api_view(['GET',])
def like_view(request,pk):
    
    try:
        #comment_post =Comment.objects.get(post=pk)
        #comment_post = get_object_or_404(Comment,post=pk)
        like_post = Like.objects.filter(post=pk)
    except Like.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer= LikeSerializer(like_post,many=True)
        return Response(serializer.data)

