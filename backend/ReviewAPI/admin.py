from django.contrib import admin
from ReviewAPI.models import Book, Review, Comment, Room

admin.site.register(Book)
admin.site.register(Review)
admin.site.register(Comment)
admin.site.register(Room)