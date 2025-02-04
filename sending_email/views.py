from django.shortcuts import render
from django.core.mail import send_mail
from .serializers import EmailSerializers
from .models import EmailModels
from django.conf import settings
from rest_framework import generics, status, permissions
from rest_framework.response import Response
from django.conf import settings


# Email views for sending the email.

class Sendemailview(generics.CreateApiView):
    serializers_class = EmailSerializers
    queryset = EmailModels.objects.all()
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        serializers = EmailSerializers(data=request.data)
        if serializers.is_valid():
            emails = serializers.save()
            self.send_mail(emails)
            return Response(serializers.data, status=status.HTTP_200_CREATED)
        return Response(serializers.error, status=status.HTTP_400_BAD_REQUEST)
    
    def send_emails(self, emails):
        subject = f'{emails.name} sent a message from your website!'
        message = (
            f'Name: {emails.name}\n\n'
            f'Email: {emails.email_here}\n\n'
            f'Description: {emails.descriptions}'
        )
        my_email = settings.EMAIL_HOST_USER
        recipient_list = [settings.EMAIL_HOST_USER]

        send_mail(
            subject,
            message,
            my_email,
            recipient_list,
            fail_silently=False,
        )