from django.shortcuts import render

from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import PermissionDenied

from .models import Announcement
from .serializers import AnnouncementSerializer


class AnnouncementViewSet(ModelViewSet):

    queryset = Announcement.objects.all()

    serializer_class = AnnouncementSerializer

    permission_classes = [IsAuthenticated]

    # Only admin/staff can create
    def perform_create(self, serializer):

        user = self.request.user

        if user.role not in ['admin', 'staff']:

            raise PermissionDenied(
                "Only admin/staff can send announcements"
            )

        serializer.save(
            created_by=user
        )