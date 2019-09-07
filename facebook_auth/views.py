import json

from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required


def login(request):
    if request.user.is_authenticated and request.user.social_auth.exists():
        return redirect("index")
    else:
        return render(request, "facebook_auth/login.html")


def get_user_info(request):
    if request.user.is_authenticated and request.user.social_auth.exists():
        social_user = request.user.social_auth.get()
        return HttpResponse(json.dumps(social_user.extra_data), content_type="application/json")
    else:
        return JsonResponse(status=403,
                            data={"status": "error", "message": "User is not authenticated."})


def index(request):
    return render(request, 'pages/index.html')
