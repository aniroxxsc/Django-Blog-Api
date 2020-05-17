from django.urls import path,include
from . import views


urlpatterns = [
    path('', views.PostList.as_view()),
    path('<int:pk>', views.PostView.as_view()),
    path('comments/',include('comments.api.urls','comments_api')),
]