from django.urls import path

from djangoProject.user_profile.views import profile_details, profile_delete

urlpatterns = [
    path('', profile_details, name='profile details'),
    path('delete/', profile_delete, name='profile delete'),
]