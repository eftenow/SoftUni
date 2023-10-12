from django.urls import path

from games_play_app.common.views import show_home, show_dashboard

urlpatterns = [
    path('', show_home, name='home'),
    path('dashboard/', show_dashboard, name='dashboard'),
]