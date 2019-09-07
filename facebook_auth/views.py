import json

from django.http import HttpResponse
from django.shortcuts import render
from django.contrib.auth.decorators import login_required

def login(request):
    return render(request, 'facebook_auth/login.html')

@login_required
def get_user_info(request):
    if not request.user.is_authenticated():
        return render(request, 'facebook_auth/login.html')
    return HttpResponse(json.dumps(request.backend.strategy.request_data()), content_type="application/json")


#@login_required
def index(request):
    return render(request, 'pages/index.html')
