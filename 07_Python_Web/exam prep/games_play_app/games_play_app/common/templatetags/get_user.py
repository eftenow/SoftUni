from django.template import Library

from games_play_app.user_profile.models import Profile

register = Library()


@register.simple_tag
def user_is_logged():
    return Profile.objects.first()
