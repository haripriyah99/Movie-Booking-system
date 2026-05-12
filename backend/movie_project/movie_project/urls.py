from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from django.conf.urls.static import static
from django.conf import settings


from movies.views import MovieViewSet, ShowTimeViewSet
from booking.views import BookingViewSet
from announcement.views import AnnouncementViewSet
from feedback.views import FeedbackViewSet

#  JWT IMPORT
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


router = DefaultRouter()
router.register('movies', MovieViewSet)
router.register('shows', ShowTimeViewSet)
router.register('bookings', BookingViewSet)
router.register('announcement', AnnouncementViewSet)
router.register('feedback', FeedbackViewSet)


urlpatterns = [
    path('admin/', admin.site.urls),

    #  ADD JWT LOGIN (VERY IMPORTANT)
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # your APIs
    path('api/', include(router.urls)),
    path('api/', include('users.urls')),
    path('api/', include('movies.urls')),
]
urlpatterns+= static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)