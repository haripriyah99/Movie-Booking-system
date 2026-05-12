from django.db import models
from django.conf import settings

class Booking(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    show = models.ForeignKey('movies.ShowTime', on_delete=models.CASCADE)
    seats = models.JSONField()  # ✅ store seat list

    def __str__(self):
        return f"{self.user} - {self.show}"