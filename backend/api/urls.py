from django.contrib import admin
from django.conf.urls.static import static
from django.conf import settings
from django.urls import path, include
from .views import TransactionsListView, TransactionsCreateView, RemindersListView, RemindersCreateView

urlpatterns = [
    path("allTransactions/", TransactionsListView.as_view()),
    path("allReminders/", RemindersListView.as_view()),
    path("createReminder/", RemindersCreateView.as_view()),
    path("createTransaction/",TransactionsCreateView.as_view())
]