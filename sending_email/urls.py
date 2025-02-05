from django.urls import path
from .views import Sendemailview

urlpatterns = [
    path('sendmail', Sendemailview.as_view(),)
]

