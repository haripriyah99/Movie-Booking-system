from rest_framework import serializers
from .models import Booking

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'
        extra_kwargs = {
            'user': {'read_only': True}   # ✅ IMPORTANT
        }