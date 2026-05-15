from django.shortcuts import render

# Create your views here.
from rest_framework.viewsets import ModelViewSet
from .models import Movie, ShowTime,Theater
from .serializers import MovieSerializer, ShowTimeSerializer,TheaterSerializer
from rest_framework.permissions import (AllowAny,IsAdminUser,IsAuthenticated)

class MovieViewSet(ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    def get_permissions(self):

        # Everyone can view movies
        if self.request.method == "GET":

            return [AllowAny()]

        # Only admin can add/edit/delete
        return [IsAdminUser()]

class ShowTimeViewSet(ModelViewSet):
    queryset = ShowTime.objects.all()
    serializer_class = ShowTimeSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        queryset=ShowTime.objects.all()
        location=self.request.query_params.get('location')
        if location:
            queryset=queryset.filter(location=location)
        return queryset

class TheaterViewSet(ModelViewSet):
    queryset = Theater.objects.all()
    serializer_class = TheaterSerializer
