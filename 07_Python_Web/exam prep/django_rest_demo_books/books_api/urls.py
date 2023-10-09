from django.urls import path

from books_api.views import ListBooksView, DetailsBookView

urlpatterns = [
    path('books/', ListBooksView.as_view()),
    path('books/<int:pk>', DetailsBookView.as_view())
]