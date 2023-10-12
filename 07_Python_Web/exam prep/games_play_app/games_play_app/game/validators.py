from django.core.exceptions import ValidationError


def rating_validator(value):
    if value < 0.1 or value > 5:
        raise ValidationError('Rating must be between 0.1 and 5.')