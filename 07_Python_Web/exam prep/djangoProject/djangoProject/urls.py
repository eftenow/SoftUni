from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('djangoProject.common.urls')),
    path('profile/', include('djangoProject.user_profile.urls')),
]
