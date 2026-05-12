from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated

from .models import Feedback
from .serializers import FeedbackSerializer


class FeedbackViewSet(ModelViewSet):
    queryset=Feedback.objects.all()

    serializer_class = FeedbackSerializer

    permission_classes = [IsAuthenticated]

    #  Different access for roles
    def get_queryset(self):

        user = self.request.user

        # Admin and staff see all feedbacks
        if user.role in ['admin', 'staff']:

            return Feedback.objects.all()

        # Customer sees only own feedbacks
        return Feedback.objects.filter(user=user)

    #  Customer sends feedback
    def perform_create(self, serializer):

        serializer.save(user=self.request.user)