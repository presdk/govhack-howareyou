from django.shortcuts import render
from django.contrib.auth.decorators import login_required

def login(request):
    return render(request, 'facebook_auth/login.html')


#@login_required
def index(request):
    return render(request, 'pages/index.html')
    
#@login_required
def assessment(request):
    return render(request, "pages/assessment.html")

#@login_required
def completed(request):
    return render(request, "pages/completed.html")