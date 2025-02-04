from rest_framework import serializers
from .models import EmailModels


# Serializers for the email.


class EmailSerializers(serializers.ModelSerializer):
    class Meta:
        model = EmailModels
        fields = [
            'name',
            'email_here',
            'description',
        ]
