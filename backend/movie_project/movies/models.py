from django.db import models

# Create your models here.
# movies/models.py
class Theater(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    def __str__(self):
        return self.name

class Movie(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    duration = models.IntegerField()
    poster=models.URLField()
class ShowTime(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    theater = models.ForeignKey(Theater, on_delete=models.CASCADE)
    time = models.DateTimeField()


