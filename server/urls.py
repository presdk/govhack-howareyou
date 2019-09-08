from django.contrib import admin
from django.urls import path, include
from facebook_auth import views as fb_auth
from django.contrib.auth import views as auth_views
from statistic import views as st_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('social/', include('social_django.urls', namespace="social")),
    path("login/", fb_auth.login, name="login"),
    path("", fb_auth.index, name="index"),
    path("logout/", auth_views.LogoutView.as_view(), name="logout"),
    path("me/", fb_auth.get_user_info, name="my_profile"),

    path('dashboard/', fb_auth.index, name='dashboard'),
    path('completed/', fb_auth.index, name='completed'),

    # Social API login (REST)
    path('api/login/', include('rest_social_auth.urls_session', )),
    path('api/login/', include('rest_social_auth.urls_token', )),

    path('check/', st_view.form_action, name="CheckDepression"),
    path('form_test/', st_view.get_form),
]
