from django.shortcuts import render, redirect

from games_play_app.game.models import Game
from games_play_app.user_profile.forms import ProfileCreateForm, ProfileEditeForm
from games_play_app.user_profile.models import Profile


def profile_details(request):
    games = Game.objects.all()
    total_ratings = len(games)
    avg_rating = 0.0
    if total_ratings > 0:
        avg_rating = sum([g.rating for g in games]) / total_ratings

    context = {'games': games,
               'avg_rating':avg_rating}
    return render(request, 'profile/details-profile.html', context=context)


def profile_edit(request):
    profile = Profile.objects.first()
    form = ProfileEditeForm(request.POST or None, instance=profile)

    if form.is_valid():
        form.save()
        return redirect('profile details')

    context = {'form': form}
    return render(request, 'profile/edit-profile.html', context)


def profile_delete(request):
    profile = Profile.objects.first()
    games = Game.objects.all()

    if request.method == 'POST':
        profile.delete()
        games.delete()
        return redirect('home')

    return render(request, 'profile/delete-profile.html')


def profile_create(request):
    form = ProfileCreateForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('home')
    context = {'form': form}
    return render(request, 'profile/create-profile.html', context)

