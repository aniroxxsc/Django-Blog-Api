from django.urls import path,include
from . import views 
from .views import(
   like_create,
   like_view,
   )


urlpatterns = [
    path('',like_view,name='like_view'),                    #likes over a particular post
    path('LikeList', views.LikeList.as_view()),             #returning list of all likes
    path('like_create',like_create,name='like_create'),
]