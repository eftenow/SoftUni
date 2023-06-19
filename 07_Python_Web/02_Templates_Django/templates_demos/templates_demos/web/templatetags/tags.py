from django.template import Library

register = Library()

# simple tag


@register.simple_tag(name='student_intro')
def show_student_info(name, age):
    return f'Hello, I am {name} and I am {age}-years old!'


@register.inclusion_tag('nav.html', name='display_nav', takes_context=False)
def display_navigation(*args):
    context = {
        'urls' : args
    }

    return context
