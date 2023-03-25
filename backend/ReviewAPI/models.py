from django.db import models
import string
import random


class Book(models.Model):
    title = models.CharField(max_length=100, blank=True, default='')
    author = models.CharField(max_length=50)
    description = models.TextField(blank=True)
    publisher = models.CharField(max_length=50)
  

    def __str__(self):
        return self.title

class Review(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    book_title = models.CharField(max_length=100, blank=True, default='')
    body = models.TextField(blank=True, default='')
    owner = models.ForeignKey('auth.User', related_name='reviews', on_delete=models.CASCADE)
    book = models.ForeignKey('Book', related_name='book_reviews', on_delete= models.CASCADE, null=True, blank=True)

    def __str__(self):
        return self.body

    class Meta:
        ordering = ['created']

class Comment(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    body = models.TextField(blank=False)
    owner = models.ForeignKey('auth.User', related_name='comments', on_delete=models.CASCADE)
    review = models.ForeignKey('Review', related_name='review_comments', on_delete=models.CASCADE)

    def __str__(self):
        return self.body
    class Meta:
        ordering = ['created']


















def generate_unique_code():
    length = 6

    while True:
        code = ''.join(random.choices(string.ascii_uppercase, k=length))
        if Room.objects.filter(code=code).count() == 0:
            break

    return code

class Room(models.Model):
    code = models.CharField(max_length=8, default='generate_unique_code', unique=True)
    host = models.CharField(max_length=50, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.code)

