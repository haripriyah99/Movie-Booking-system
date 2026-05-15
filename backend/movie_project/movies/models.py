from django.db import models

# Create your models here.
# movies/models.py
class Theater(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    def __str__(self):
        return(f"{self.name}-" 
        f":{self.location}")

class Movie(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    duration = models.IntegerField()
    poster=models.ImageField(upload_to='posters/')
class ShowTime(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    theater = models.ForeignKey(Theater, on_delete=models.CASCADE)
    time = models.DateTimeField()
    price=models.DecimalField(max_digits=6,decimal_places=2,default=150)


