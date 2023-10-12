from django.shortcuts import render

from games_play_app.game.models import Game


def show_home(request):
    return render(request, 'common/home-page.html')


def show_dashboard(request):
    games = Game.objects.all()
    context = {'games': games}
    return render(request, 'common/dashboard.html', context=context)
