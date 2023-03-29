# Generated by Django 4.1.5 on 2023-03-28 19:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('ReviewAPI', '0007_alter_comment_review'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='review',
            field=models.ForeignKey(default='', null=True, on_delete=django.db.models.deletion.CASCADE, related_name='review_comments', to='ReviewAPI.review'),
        ),
    ]
