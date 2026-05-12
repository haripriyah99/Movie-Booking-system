from django.db import models

# Create your models here.
# announcement/models.py
class Announcement(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_by = models.ForeignKey('users.User', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)