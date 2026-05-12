from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from users.permissions import IsCustomer
from .models import Booking
from .serializers import BookingSerializer

class BookingViewSet(ModelViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
     show_id = self.request.query_params.get('show')
     if show_id:
        return Booking.objects.filter(show_id=show_id)
     return Booking.objects.all()
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)