# Generated by Django 4.1.7 on 2023-03-15 03:40

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion

def create_data(apps, schema_editor):
    IWillFindYou = apps.get_model('ReviewAPI','Book')
    IWillFindYou (title="I Will Find You", author="Harlan Coben", description="A man imprisoned for murdering his 3-year-old son becomes convinced his son is still alive and plans an escape.").save()

    HelloBeautiful = apps.get_model('ReviewAPI','Book')
    HelloBeautiful (title="Hello Beautiful", author="Ann Napolitano").save()

    LessonsInChemistry = apps.get_model('ReviewAPI','Book')
    LessonsInChemistry (title="Lessons in Chemistry", author="Bonnie Garmus").save()

    TomorrowAndTomorrowAndTomorrow = apps.get_model('ReviewAPI','Book')
    TomorrowAndTomorrowAndTomorrow (title="Tomorrow and Tomorrow and Tomorrow", author="Gabrielle Zevin").save()

    StormWatch = apps.get_model('ReviewAPI','Book')
    StormWatch (title="Storm Watch", author="C.J. Box").save()

    PineappleStreet = apps.get_model('ReviewAPI','Book')
    PineappleStreet (title="Pineapple Street", author="Jenny Jackson").save()

    WorthyOpponents = apps.get_model('ReviewAPI','Book')
    WorthyOpponents(title="Worthy Opponents", author="Danielle Steel").save()

    DemonCopperhead = apps.get_model('ReviewAPI','Book')
    DemonCopperhead(title="Demon Copperhead", author="Barbara Kingsolver").save()

    SomeoneElsesShoes = apps.get_model('ReviewAPI','Book')
    SomeoneElsesShoes(title="Someone Else's Shoes", author="Jojo Moyes").save()

    IHaveSomeQuestionsForYou = apps.get_model('ReviewAPI','Book')
    IHaveSomeQuestionsForYou(title="I Have Some Questions For You", author="Rebecca Makkai").save()

    RemarkablyBrightCreatures = apps.get_model('ReviewAPI','Book')
    RemarkablyBrightCreatures(title="Remarkably Bright Creatures", author="Shelby Van Pelt").save()

    ADayOfFallenNight = apps.get_model('ReviewAPI','Book')
    ADayOfFallenNight(title="A Day Of Fallen Night", author="Samantha Shannon").save()

    SoShallYouReap = apps.get_model('ReviewAPI','Book')
    SoShallYouReap(title="So Shall You Reap", author="Donna Leon").save()

    MadHoney = apps.get_model('ReviewAPI','Book')
    MadHoney(title="Mad Honey", author="Jodi Picoult").save()

    LondonSeanceSociety = apps.get_model('ReviewAPI','Book')
    LondonSeanceSociety(title="London Seance Society", author="Sarah Penner").save()



class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
    
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, default='', max_length=100)),
                ('author', models.CharField(max_length=50)),
                ('description', models.TextField(blank=True)),
                ('publisher', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Room',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(default='', max_length=8, unique=True)),
                ('host', models.CharField(max_length=50, unique=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('book_title', models.CharField(blank=True, default='', max_length=100)),
                ('body', models.TextField(blank=True, default='')),
                ('book', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='book_reviews', to='ReviewAPI.book')),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reviews', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ['created'],
            },
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('body', models.TextField()),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comments', to=settings.AUTH_USER_MODEL)),
                ('review', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comments', to='ReviewAPI.review')),
            ],
            options={
                'ordering': ['created'],
            },
        ),
        migrations.RunPython(create_data),
    ]
