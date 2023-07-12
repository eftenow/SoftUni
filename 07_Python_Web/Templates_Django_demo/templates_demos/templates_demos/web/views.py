import random

from django.shortcuts import render, redirect
from datetime import datetime

def student_greetings(name, age):
    return f'Hello, I am {name} and I am {age}-years old!'


# Create your views here.
def index(request):
    context = {
        'title': 'Home Page',
        'random_value': random.random(),
        'name': 'Peter',
        'town': {
            'town_name': 'Sofia'
        },
        'age': 30,
        'hobbies': ['Swimming', 'Running', 'Working Out', 'Programming'],
        'greet': student_greetings('Ivan', 25),
        'grades': [5, 4, 3, 2, 1, 5, 3, 2, 6, 5, 3, 2, 4, 1],
        'now': datetime.now()

    }

    return render(request, 'products.html', context)


def redirect_to_home(request):
    return render(request, 'home.html')
