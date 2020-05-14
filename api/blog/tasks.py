
from celery import shared_task
import base64
import re
from .models import Images,Post
from django.core.files.base import ContentFile
import uuid
from django.shortcuts import get_object_or_404


@shared_task
def ConvertToImg(content,post_id):
    img_data=re.findall("(?<=base64,)[^>]+>",content)
    # print(img_data)
    for img in img_data:
        data=img[:-2]
        # print(data)
        newpost = Images()
        image_data = base64.b64decode(data)
        image_name = str(uuid.uuid4())+".png"
        newpost.image = ContentFile(image_data, image_name)
        post = get_object_or_404(Post, id=post_id)
        newpost.post= post
        newpost.save()