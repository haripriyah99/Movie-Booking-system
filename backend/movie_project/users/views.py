from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from django.contrib.auth import authenticate
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken

User = get_user_model()

@api_view(['POST'])
def register(request):
    username = request.data.get('username')
    password = request.data.get('password')

    if User.objects.filter(username=username).exists():
        return Response({"error": "User already exists"}, status=400)

    user = User.objects.create_user(
        username=username,
        password=password
    )

    # generate JWT token
    refresh = RefreshToken.for_user(user)

    return Response({
        "message": "User created successfully",
        "access": str(refresh.access_token),
        "refresh": str(refresh)
    }, status=201)

@api_view(['POST'])
def login(request):
    username=request.data.get('username')
    password=request.data.get('password')
    user=authenticate(username=username,password=password)
    if user:
        refresh=RefreshToken.for_user(user)
        return Response({

            "access":str(refresh.access_token),

            "refresh":str(refresh),
            "role":user.role
        })
    return Response({"error":"Invalid credentials"},status=status.HTTP_400_BAD_REQUEST)