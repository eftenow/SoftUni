from django.core import validators
from django.db import models


class Profile(models.Model):
    email = models.EmailField()
    age = models.IntegerField(
        validators=[validators.MinValueValidator(12)]
    )
    password = models.CharField(
        max_length=30
    )
    first_name = models.CharField(
        blank=True,
        null=True,
        max_length=30
    )
    last_name = models.CharField(
        blank=True,
        null=True,
        max_length=30
    )
    profile_picture = models.URLField(
        blank=True,
        null=True
    )

    def get_name(self):
        if self.first_name and self.last_name:
            return f'{self.first_name} {self.last_name}'
        elif self.first_name:
            return f'{self.first_name}'
        elif self.last_name:
            return f'{self.last_name}'
        else:
            return ''
