from django.db import models

class Review(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    book_title = models.CharField(max_length=100, blank=True, default='')
    body = models.TextField(blank=True, default='')
    owner = models.ForeignKey('auth.User', related_name='reviews', on_delete=models.CASCADE)

    class Meta:
        ordering = ['created']

class Comment(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    body = models.TextField(blank=False)
    owner = models.ForeignKey('auth.User', related_name='comments', on_delete=models.CASCADE)
    review = models.ForeignKey('Review', related_name='comments', on_delete=models.CASCADE)

    class Meta:
        ordering = ['created']
