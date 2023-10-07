from django.shortcuts import render, redirect

from djangoProject.common.forms import CreateFormNote
from djangoProject.common.models import Note
from djangoProject.user_profile.forms import CreateUserForm


def show_home(request):
    form = CreateUserForm(request.POST or None)
    notes = Note.objects.all()
    if form.is_valid():
        form.save()
        return redirect('profile details')

    context = {'form': form,
               'notes': notes}
    return render(request, 'profile/home.html', context=context)


def add_note(request):
    form = CreateFormNote(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('home')

    context = {'form': form}
    return render(request, 'common/note-create.html', context)


def edit_note(request, pk):
    note = Note.objects.get(pk=pk)
    form = CreateFormNote(request.POST or None, instance=note)
    if form.is_valid():
        form.save()
        return redirect('home')

    context = {'form': form}
    return render(request, 'common/note-edit.html', context)


def delete_note(request, pk):
    note = Note.objects.get(pk=pk)
    form = CreateFormNote(request.POST or None, instance=note)
    if request.POST:
        note.delete()
        return redirect('home')

    for field in form.fields:
        form.fields[field].widget.attrs['disabled'] = 'disabled'

    context = {'form': form}
    return render(request, 'common/note-delete.html', context)


def show_note(request, pk):
    note = Note.objects.get(pk=pk)
    context = {'note': note}
    return render(request, 'common/note-details.html', context)