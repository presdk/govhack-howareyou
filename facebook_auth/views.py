import json

from django.http import HttpResponse
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse

def login(request):
    return render(request, 'facebook_auth/login.html')

@login_required
def get_user_info(request):
    social_user = request.user.social_auth.get()
    return HttpResponse(json.dumps(social_user.extra_data), content_type="application/json")


#@login_required
def index(request):
    return render(request, 'pages/index.html')
