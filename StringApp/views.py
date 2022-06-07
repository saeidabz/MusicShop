from django.shortcuts import render

from .models import Classic
from .serializers import ClassicSerializer
from rest_framework import viewsets


class ClassicView(viewsets.ModelViewSet):
    queryset = Classic.objects.all()
    serializer_class = ClassicSerializer