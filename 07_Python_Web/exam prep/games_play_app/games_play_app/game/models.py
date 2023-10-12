from django.core import validators
from django.db import models

from games_play_app.game.validators import rating_validator


class Game(models.Model):
    CHOICES = (
        ('Action', 'Action'),
        ('Adventure', 'Adventure'),
        ('Puzzle', 'Puzzle'),
        ('Strategy', 'Strategy'),
        ('Board/Card Game', 'Board/Card Game'),
        ('Other', 'Other')
    )

    title = models.CharField(
        max_length=30,
        unique=True
    )
    category = models.CharField(
        max_length=15,
        choices=CHOICES
    )
    rating = models.FloatField(
        validators=[rating_validator]
    )
    max_level = models.IntegerField(
        null=True,
        blank=True,
        validators=[validators.MinValueValidator(1)]
    )
    image_url = models.URLField()
    summary = models.TextField(
        null=True,
        blank=True
    )