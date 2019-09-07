from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse

def login(request):
    return render(request, 'facebook_auth/login.html')

#@login_required
def index(request):
    return render(request, 'pages/index.html')
