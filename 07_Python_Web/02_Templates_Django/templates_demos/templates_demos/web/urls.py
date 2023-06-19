from django.urls import path


from templates_demos.web.views import index, redirect_to_home

urlpatterns = [
    path('', index, name='index'),
    path('redirect-home/', redirect_to_home, name='redirect_home' )
]
