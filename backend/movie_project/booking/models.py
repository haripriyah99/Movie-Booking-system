from django.db import models
from django.conf import settings

class Booking(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    show = models.ForeignKey('movies.ShowTime', on_delete=models.CASCADE)
    seats = models.JSONField()  
    total_price=models.DecimalField(max_digits=8,decimal_places=2,default=0)
    booked_at=models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"{self.user} - {self.show}"

