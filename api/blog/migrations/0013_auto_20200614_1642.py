# Generated by Django 3.0.1 on 2020-06-14 16:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0012_auto_20200614_0758'),
    ]

    operations = [
        migrations.AlterField(
            model_name='defaultimage',
            name='image',
            field=models.ImageField(default='33513138.png', upload_to='images/', verbose_name='Image'),
        ),
    ]