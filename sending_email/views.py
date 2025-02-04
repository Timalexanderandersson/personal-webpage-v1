from django.shortcuts import render
from django.core.mail import send_mail
from .serializers import EmailSerializers
from .models import EmailModels
from django.conf import settings
from rest_framework import generics, status, permission
from rest_framework.response import Response


# Email views for sending the email.

class Sendemailview(generics.CreateApiView):
    serializers_class = EmailSerializers
    queryset = EmailModels.objects.all()
    permission_classes = [permissions.AllowAny]
    
    
