# Generated by Django 3.0.1 on 2020-06-15 17:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0014_auto_20200614_1648'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='image_hai',
        ),
        migrations.AlterField(
            model_name='defaultimage',
            name='image',
            field=models.ImageField(default='images/33513138.png', upload_to='images/', verbose_name='Image'),
        ),
        migrations.AlterField(
            model_name='images',
            name='image',
            field=models.ImageField(default='images/33513138.png', upload_to='images/', verbose_name='Image'),
        ),
    ]
