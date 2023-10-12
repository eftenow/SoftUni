from django import forms

from games_play_app.user_profile.models import Profile


class BaseProfileForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ['email', 'age', 'password']
        widgets = {
            'password': forms.TextInput(
                attrs={'type': 'password'})}
        labels = {
            'first_name': 'First Name',
            'last_name': 'Last Name',
            'profile_picture': 'Profile Picture'
        }


class ProfileCreateForm(BaseProfileForm):
    pass


class ProfileEditeForm(BaseProfileForm):
    BaseProfileForm.Meta.fields.extend(['first_name', 'last_name', 'profile_picture'])

