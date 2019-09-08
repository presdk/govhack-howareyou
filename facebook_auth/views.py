import json

from django.http import HttpResponse
from django.shortcuts import render

def login(request):
    return index(request)

def get_user_info(request):
    if request.user.is_authenticated:
        social_user = request.user.social_auth.get()
        return HttpResponse(json.dumps(social_user.extra_data), content_type="application/json")
    else:
        return HttpResponse(code=403,
                            content_type="application/json",
                            content={"error": "User is not authenticated."})

def index(request):
    return render(request, 'pages/index.html')
