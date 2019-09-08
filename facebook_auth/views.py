from django.http import JsonResponse
from django.shortcuts import render

def login(request):
    return index(request)


def get_user_info(request):
    if request.user.is_authenticated:
        social_user = request.user.social_auth.get()
        return JsonResponse(status=200,
                            data=social_user.extra_data)
    else:
        return JsonResponse(status=403,
                            data={"error": "User is not authenticated."})


def index(request):
    return render(request, 'pages/index.html')
