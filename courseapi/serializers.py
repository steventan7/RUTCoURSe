from rest_framework import serializers

from . import models


class CourseSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Course
        fields = ['id', 'code', 'name', 'description', 'prereqs']

class ReviewSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Review
        fields = ['id', 'content', 'course']
