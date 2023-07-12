from django.urls import path

from departments_app.departments.views import show_departments, redirect_view, show_specific_department, \
    page_404_not_found

urlpatterns = (
    path('', show_departments, name='home view'),
    path('<int:department_id>/', show_specific_department, name='department view'),
    path('redirect/', redirect_view),

)
