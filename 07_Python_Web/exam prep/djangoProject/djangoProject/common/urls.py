from django.urls import path

from djangoProject.common.views import show_home, add_note, edit_note, delete_note, show_note

urlpatterns = [
    path('', show_home, name='home'),
    path('add/', add_note, name='add note'),
    path('edit/<int:pk>/', edit_note, name='edit note'),
    path('delete/<int:pk>/', delete_note, name='delete note'),
    path('details/<int:pk>/', show_note, name='note details'),
]