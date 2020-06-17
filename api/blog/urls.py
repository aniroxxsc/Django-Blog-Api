from django.urls import path,include
from . import views
from .views import post_view, post_with_images
from .views import image_view

urlpatterns = [
    path('', views.PostList.as_view()),
    path('latest', views.LatestList.as_view()),
    path('latest/images', views.ImageList.as_view()),
    path('<int:pk>', views.PostView.as_view()),
    path('<int:pk>/images/view',image_view,name='view'),
    path('<int:pk>/comments/',include('comments.urls','comments_api')),
    path('featured', views.LatestBlog.as_view()),
    path('post_view',post_view,name='post_view'),                             #my blogs section
    path('<int:pk>/post_with_images',post_with_images,name='post_with_images'),     #display posts details with its images
    path('<int:pk>/likes/',include('likes.urls')),                                  #likes api call
]