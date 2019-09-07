import json

from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse

def login(request):
    if request.user.is_authenticated:
        redirect()
    else:
        return render(request, 'facebook_auth/login.html')


@login_required
def get_user_info(request):
    if request.user.is_authenticated:
        social_user = request.user.social_auth.get()
        return HttpResponse(json.dumps(social_user.extra_data), content_type="application/json")
    else:
        return HttpResponse(status_code=403,
                            content_type="application/json",
                            content={"error": "User is not authenticated."})


#@login_required
def index(request):
    return render(request, 'pages/index.html')
