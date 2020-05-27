from django.urls import path,include
from . import views
from .views import image_view

urlpatterns = [
    path('', views.PostList.as_view()),
    path('latest', views.LatestList.as_view()),
    path('latest/images', views.ImageList.as_view()),
    path('<int:pk>', views.PostView.as_view()),
    path('<int:pk>/images/view',image_view,name='view'),
    path('<int:pk>/comments/',include('comments.urls','comments_api')),
    
]