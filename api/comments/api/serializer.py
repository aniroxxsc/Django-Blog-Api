from rest_framework.serializers import(
    HyperlinkedIdentityField,
    ModelSerializer,
    SerializerMethodField
    )

from comments.models import Comment

class CommentSerializer(ModelSerializer):
    class Meta:
        model = Comment
        fields = [
            'user',
            'content',
            'post',
            'id',
        ]