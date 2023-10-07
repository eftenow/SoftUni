from django import forms

from djangoProject.common.models import Note


class CreateFormNote(forms.ModelForm):
    class Meta:
        model = Note
        fields = '__all__'
        labels = {
            'image_url': 'Link to Image'
        }