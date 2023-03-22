from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from ReviewAPI import views
from .views import RoomView, BookView

urlpatterns = [
    path('users/', views.UserList.as_view()),
    path('users/<int:pk>', views.UserDetail.as_view()),
    path('reviews/', views.ReviewList.as_view()),
    path('reviews/<int:pk>', views.ReviewDetail.as_view()),
    path('comments/', views.CommentList.as_view()),
    path('comments/<int:pk>', views.CommentDetail.as_view()),
    path('room', RoomView.as_view()),
    path('book', BookView.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)