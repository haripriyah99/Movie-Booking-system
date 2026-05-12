

# Register your models here.
from django.contrib import admin
from .models import Booking

@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    
    # 👉 Show these columns in admin table
    list_display = ('id', 'user', 'show', 'seats')

    # 👉 Add filters (right sidebar)
    list_filter = ('show',)

    # 👉 Search box
    search_fields = ('user__username',)

    # 👉 Pagination
    list_per_page = 10

    # 👉 Order by latest first
    ordering = ('-id',)