from rest_framework import serializers
from .models import Movie, Theater, ShowTime

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = '__all__'

class ShowTimeSerializer(serializers.ModelSerializer):
    movie_title = serializers.CharField(
        source='movie.title',
        read_only=True
    )

    theater_name = serializers.CharField(
        source='theater.name',
        read_only=True
    )

    class Meta:
        model = ShowTime
        fields = [
            'id',
            'movie',
            'movie_title',
            'theater',
            'theater_name',
            'time'
        ]
class TheaterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Theater
        fields = '__all__'