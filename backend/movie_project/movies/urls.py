from rest_framework.routers import DefaultRouter
from .views import TheaterViewSet,ShowTimeViewSet,MovieViewSet

router = DefaultRouter()
router.register('movies', MovieViewSet)
router.register('theaters', TheaterViewSet)
router.register('showtime', ShowTimeViewSet)

urlpatterns = router.urls