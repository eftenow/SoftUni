from django.http import HttpResponse, HttpResponseNotFound
from django.shortcuts import render, redirect


def show_departments(request, *args, **kwargs):
    body = f'Path: {request.path} Args: {args}, Kwargs: {kwargs}'
    return HttpResponse(body)


def show_specific_department(request, department_id):
    body = f'This is the specific department function, the id is: {department_id}'
    return HttpResponse(body)


def redirect_view(request):
    return redirect('department view', department_id=21)


def page_404_not_found(request):
    body = HttpResponseNotFound('404 not found')
    return body

