from django.shortcuts import render

# Create your views here.
from rest_framework.viewsets import ModelViewSet
from .models import Movie, ShowTime,Theater
from .serializers import MovieSerializer, ShowTimeSerializer,TheaterSerializer
from rest_framework.permissions import IsAuthenticated

class MovieViewSet(ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    permission_classes = [IsAuthenticated]

class ShowTimeViewSet(ModelViewSet):
    queryset = ShowTime.objects.all()
    serializer_class = ShowTimeSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        movie_id = self.request.query_params.get('movie')

        if movie_id:
            return ShowTime.objects.filter(movie_id=movie_id)

        return ShowTime.objects.all()

class TheaterViewSet(ModelViewSet):
    queryset = Theater.objects.all()
    serializer_class = TheaterSerializer
    def get_queryset(self):
        queryset=Theater.objects.all()
        location=self.request.query_params.get('location')
        if location:
            queryset=queryset.filter(location=location)
        return queryset