from rest_framework import serializers
from django.contrib.auth.models import User
from ReviewAPI.models import Review, Comment, Room, Book



from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)

class BookSerializer(serializers.ModelSerializer):
    book_reviews = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
   
    class Meta:
        model = Book
        fields = ('id', 'title', 'author', 'description', 'publisher','book_reviews')


class ReviewSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    book = serializers.ReadOnlyField(source='book.title')
    review_comments = serializers.StringRelatedField(many=True, read_only=True)
   

    def create(self, validated_data):
        return Review.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.created = validated_data.get('created', instance.created)
        instance.book_title = validated_data.get('book_title', instance.book_title)
        instance.body = validated_data.get('body', instance.body)
        instance.owner = validated_data.get('owner', instance.owner)
        instance.book = validated_data.get('book', instance.book)
        instance.save()
        return instance
   
    class Meta:
        model = Review
        fields = ['id', 'book_title', 'body', 'owner', 'book', 'review_comments','created']


class CommentSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    review = serializers.ReadOnlyField(source='review_comments')
    
    def create(self, validated_data):
        return Comment.objects.create(**validated_data)



    def update(self, instance, validated_data):
        instance.created = validated_data.get('created', instance.created)
        instance.body = validated_data.get('body', instance.body)
        instance.owner = validated_data.get('owner', instance.owner)
        instance.review = validated_data.get('review', instance.review)
        instance.save()
        return instance
    
    class Meta:
        model = Comment
        fields = ['id', 'body', 'owner', 'review']


class UserSerializer(serializers.ModelSerializer):
    reviews = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    review_comments = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    book_reviews = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'reviews','review_comments','book_reviews']


class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ['id', 'code', 'host', 'created_at']


