# Generated by Django 3.0.6 on 2020-05-25 07:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nblog3', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='is_public',
            field=models.BooleanField(default=True, verbose_name='公開可能か'),
        ),
    ]
