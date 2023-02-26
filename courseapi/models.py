from django.db import models


class Course(models.Model):
    code = models.CharField(max_length=10)
    name = models.CharField(max_length=64)
    description = models.CharField(max_length=2000)
    prereqs = models.ManyToManyField('self', blank=True, symmetrical=False, related_name='required')
    # Do ratings later w/ users

    # def __str__(self):
    #     pass

class Review(models.Model):
    content = models.CharField(max_length=2000)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name="reviews")
    # Do likes w/ linking to user

