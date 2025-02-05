from rest_framework.test import APITestCase
from .views import Sendemailview
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient

# test for posting email


class TestingPost(APITestCase):
# testin for valid post
    def test_posting_is_valid(self):
        self.client = APIClient()
        self.url = reverse("posting")
        self.data = {
            "name": "hey",
            "email_here": "test@hotmail.com",
            "description": "hey you there!"
        }
        self.answer = self.client.post(self.url, self.data, format="json")
        self.assertEqual(self.answer.status_code, status.HTTP_201_CREATED)

# Testing if error working when not putting in the inputs correct.

    def test_posting_is_not_valid(self):
        self.client = APIClient()
        self.url = reverse("posting")
        self.data = {
            "name": "Tim",
            "email_here": "tim@hotmail.com",
            "description": ""
        }
        self.answer = self.client.post(self.url, self.data, format="json")
        self.assertEqual(self.answer.status_code, status.HTTP_400_BAD_REQUEST)
