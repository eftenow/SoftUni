from django import forms

from games_play_app.game.models import Game


class BaseGameForm(forms.ModelForm):
    class Meta:
        model = Game
        fields = '__all__'
        labels = {
            'max_level': 'Max Level',
            'image_url': 'Image URL',
        }


class CreateGameForm(BaseGameForm):
    pass


class EditGameForm(BaseGameForm):
    pass


class DeleteGameForm(BaseGameForm):
    pass
