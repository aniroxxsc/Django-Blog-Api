from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.pagination import PageNumberPagination
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated
#from rest_framework.authentication import TokenAuthentication

#from account.models import Account
from blog.models import BlogPost
from .serializers import BlogPostSerializer

@api_view(['GET',])
def api_detail_blog_view(request,slug):
    
    try:
        blog_post =BlogPost.objects.get(slug=slug)
    except BlogPost.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer= BlogPostSerializer(blog_post)
        return Response(serializer.data)

@api_view(['PUT',])
def api_update_blog_view(request,slug):
    
    try:
        blog_post =BlogPost.objects.get(slug=slug)
    except BlogPost.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'PUT':
        serializer= BlogPostSerializer(blog_post,data=request.data)
        data={}
        if serializer.is_valid:
            serializer.save()
            data["success"] = "update successful"
            return Response(data=data)
        return Response(serializer.errors, status = status.HTTP_404_BAD_REQUEST)

@api_view(['DELETE',])
def api_delete_blog_view(request,slug):
    
    try:
        blog_post =BlogPost.objects.get(slug=slug)
    except BlogPost.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'DELETE':
        operation = blog_post.delete()
        data = {}
        if operation:
            data["success"] = "delete successful"
        else:
            data["failure"] = "delete failure"
        return Response(data=data)

@api_view(['POST',])
def api_create_blog_view(request):
    
#    account =myproject.objects.get(pk=1)
    #blog_post = BlogPost(author=account)
    blog_post = BlogPost()

    if request.method =='POST':
        serializer = BlogPostSerializer(blog_post, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ApiBlogListView(ListAPIView):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer
    pagination_class = PageNumberPagination















































#authentication_classes = (TokenAuthentication,)
#    permission_classes = (IsAuthenticated,)