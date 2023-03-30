from rest_framework import generics
from ReviewAPI import serializers
from django.contrib.auth.models import User
from ReviewAPI.models import Review, Comment, Room, Book
from rest_framework import permissions
from ReviewAPI.permissions import IsOwnerOrReadOnly
from rest_framework.authentication import SessionAuthentication,TokenAuthentication

#read-only access (via get) to the list of users
class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer

#read-only access (via get) to a single user
class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer

#get and post for a list
class ReviewList(generics.ListCreateAPIView):
    queryset = Review.objects.all()
    serializer_class = serializers.ReviewSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly] 
    authentication_classes = [TokenAuthentication, SessionAuthentication]

 

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

#get, update, and delete for a single review
class ReviewDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Review.objects.all()
    serializer_class = serializers.ReviewSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                          IsOwnerOrReadOnly]

class CommentList(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = serializers.CommentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    authentication_classes = [TokenAuthentication, SessionAuthentication]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class CommentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = serializers.CommentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                          IsOwnerOrReadOnly]

# class BookView(generics.ListAPIView):
#     queryset = Book.objects.all()
#     serializer_class = serializers.BookSerializer
#     permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class BookList(generics.ListCreateAPIView):
    queryset = Book.objects.all()
    serializer_class = serializers.BookSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    authentication_classes = [TokenAuthentication, SessionAuthentication]

  

class BookDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Book.objects.all()
    serializer_class = serializers.BookSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class RoomView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = serializers.RoomSerializer