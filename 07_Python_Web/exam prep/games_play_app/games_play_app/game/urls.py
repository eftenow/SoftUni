from django.urls import path

from games_play_app.game.views import game_create, game_details, game_edit, game_delete

# http://localhost:8000/game/create/ - create game page
# http://localhost:8000/game/details/<id>/ - details game page
# http://localhost:8000/game/edit/<id>/ - edit game page
# http://localhost:8000/game/delete/<id>/ - delete game page

urlpatterns = [
    path('create/', game_create, name='game create'),
    path('details/<int:pk>/', game_details, name='game details'),
    path('edit/<int:pk>/', game_edit, name='game edit'),
    path('delete/<int:pk>/', game_delete, name='game delete'),
]