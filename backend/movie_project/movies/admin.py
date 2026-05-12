from django.contrib import admin
from .models import Movie, Theater, ShowTime

@admin.register(Movie)
class MovieAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'duration')
    search_fields = ('title',)
    list_filter = ('duration',)


@admin.register(Theater)
class TheaterAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'location')
    search_fields = ('name', 'location')


@admin.register(ShowTime)
class ShowTimeAdmin(admin.ModelAdmin):
    list_display = ('id', 'movie', 'theater', 'time')
    list_filter = ('theater',)
