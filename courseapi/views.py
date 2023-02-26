from rest_framework import viewsets
from django.http import HttpResponse
import json

from . import serializers
from . import models

class CourseViewSet(viewsets.ModelViewSet):
    queryset = models.Course.objects.all().order_by('code')
    serializer_class = serializers.CourseSerializer

class ReviewViewSet(viewsets.ModelViewSet):
    queryset = models.Review.objects.all()
    serializer_class = serializers.ReviewSerializer

def index(request):
    # fixCourses()
    return HttpResponse("Hello, world!")

def fixCourses():
    courses = models.Course.objects.all()
    for course in courses:
        course.name = " ".join([n.capitalize() for n in course.name.split(" ")])
        course.save()

def addCourses():
    """
    Adds courses from final.json to database
    """
    COURSE_FILE = "final.json"
    with open(COURSE_FILE, "r") as f:
        courses = json.load(f)

    codes = []
    for course in courses:
        code = ":".join(s.strip() for s in [course["offeringUnitCode"], course["subject"], course["courseNumber"]])
        name = course["expandedTitle"]
        name = name.strip() if name else "MISSING"
        description = "pending"

        if code not in codes:
            print("q")
            course = models.Course(
                code=code,
                name=name,
                description=description
            )
            course.save()
        codes.append(code)
        # prereqs = None
        # pad = "-"*10
        # print(f"{pad}\n~{code}~\n~{name}~\n{pad}")


