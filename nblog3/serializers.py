from rest_framework import serializers
from .models import Category, Post
import markdown


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = ('id', 'name', 'color',)


class SimplePostSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)

    class Meta:
        model = Post
        exclude = ('main_text', 'created_at')


class PostSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    main_text = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = '__all__'

    def get_main_text(self, instance):
        return markdown.markdown(instance.main_text, extensions=['markdown.extensions.toc'])
