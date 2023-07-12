## Custom Filters, they have to be inside a module called 'templatetags'
## Must put {% load filters %} in any of the files which include these filters
import datetime

from django.template import Library

register = Library()

# CUSTOM FILTERS


@register.filter('odd')
def get_odd_numbers(values):
    return [x for x in values if x % 2 == 1]


@register.filter('even')
def get_even_numbers(values):
    return [x for x in values if x % 2 == 0]


@register.filter('format_dates')
def format_dates_style(date):
    return date.strftime('%Y/%m/%d')




