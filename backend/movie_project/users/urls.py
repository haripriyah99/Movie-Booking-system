from django.urls import path
from .views import register,login
from rest_framework_simplejwt.views import TokenObtainPairView

urlpatterns = [
    path('register/', register),
    path('login/',login),
   # path('token/', TokenObtainPairView.as_view()),  # jwt \default login(api urls is -/api/token/)
]