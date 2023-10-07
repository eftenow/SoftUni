from django.shortcuts import render, redirect

from djangoProject.common.models import Note
from djangoProject.user_profile.forms import CreateUserForm
from djangoProject.user_profile.models import Profile


# Create your views here.
def profile_details(request):
    notes = Note.objects.count()
    context = {'notes':notes}
    return render(request, 'profile/profile.html', context=context)

def profile_delete(request):
    Profile.objects.first().delete()
    Note.objects.all().delete()
    return render(request, 'profile/home.html')

