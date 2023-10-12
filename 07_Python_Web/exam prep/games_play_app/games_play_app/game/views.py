from django.shortcuts import render, redirect

from games_play_app.game.forms import CreateGameForm, EditGameForm, DeleteGameForm
from games_play_app.game.models import Game


def game_create(request):
    form = CreateGameForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('dashboard')
    context = {'form': form}

    return render(request, 'game/create-game.html', context=context)


def game_edit(request, pk):
    game = Game.objects.filter(pk=pk).get()
    form = EditGameForm(request.POST or None, instance=game)

    if form.is_valid():
        form.save()
        return redirect('dashboard')

    context = {'form': form}
    return render(request, 'game/edit-game.html', context=context)

def game_details(request, pk):
    game = Game.objects.filter(pk=pk).get()
    context = {'game': game}
    return render(request, 'game/details-game.html', context=context)


def game_delete(request, pk):
    game = Game.objects.filter(pk=pk).get()
    form = DeleteGameForm(request.POST or None, instance=game)

    if request.POST:
        game.delete()
        return redirect('dashboard')

    for field in form.fields:
        form.fields[field].widget.attrs['disabled'] = 'disabled'

    context = {'form': form}
    return render(request, 'game/delete-game.html', context=context)
