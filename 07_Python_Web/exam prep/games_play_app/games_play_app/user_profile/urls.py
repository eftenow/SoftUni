from django.urls import path

from games_play_app.user_profile.views import profile_delete, profile_edit, profile_details, profile_create

urlpatterns = [
    path('details/', profile_details, name='profile details'),
    path('edit/', profile_edit, name='profile edit'),
    path('delete/', profile_delete, name='profile delete'),
    path('create/', profile_create, name='profile create'),

]