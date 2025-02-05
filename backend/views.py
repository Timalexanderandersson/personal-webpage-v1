from django.http import JsonResponse

# Fuction showing message on the front of the Api.


def helloapi(request):
    return JsonResponse({"message": "Welcome to project api"})
