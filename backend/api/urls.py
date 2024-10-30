from django.contrib import admin
from django.conf.urls.static import static
from django.conf import settings
from django.urls import path, include
from .views import TransactionsViews, RemindersView

urlpatterns = [
    path("allTransactions/", TransactionsViews.as_view()),
    path("allReminders/", RemindersView.as_view())
]