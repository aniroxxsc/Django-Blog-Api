# Generated by Django 3.0.5 on 2020-05-01 18:05

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('blog', '0002_post_title'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='username',
            field=models.ForeignKey(default='udit', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, to_field='username'),
            preserve_default=False,
        ),
    ]
