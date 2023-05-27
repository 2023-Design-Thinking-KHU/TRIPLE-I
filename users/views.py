from django.shortcuts import render

# Create your views here.
from django.contrib.auth.models import User 
from rest_framework import generics,status 
from .serializers import RegisterSerializer,LoginSerializer,ProfileSerializer
from rest_framework.response import Response
from .models import Profile

class RegisterView(generics.CreateAPIView):
    queryset=User.objects.all()
    serializer_class=RegisterSerializer 

class LoginView(generics.GenericAPIView):
    serializer_class=LoginSerializer 
    def post(self,request):
        serializer=self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        validated_data = serializer.validated_data
        token = validated_data.get('token') 
        pk = validated_data.get('pk')
        response_data = {"token": token, "pk": pk}
        return Response(response_data, status=status.HTTP_200_OK)
    
class ProfileView(generics.RetrieveUpdateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    
