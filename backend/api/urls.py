from django.contrib import admin
from django.conf.urls.static import static
from django.conf import settings
from django.urls import path, include
from .views import TransactionsListView,  UpdateUserView,TransactionsCreateView, RemindersListView, RemindersCreateView, signup, current_user
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)



urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path("current-user/", current_user, name="current_user"),
    path("signup/", signup, name="signup"),
    path("update-current-user/", UpdateUserView.as_view(), name="update_current_user"),
    path("allTransactions/", TransactionsListView.as_view(), name="all_transactions"),
    path("createTransaction/", TransactionsCreateView.as_view(), name="create_transaction"),
    path("allReminders/", RemindersListView.as_view(), name="all_reminders"),
    path("createReminder/", RemindersCreateView.as_view(), name="create_reminder"),
    
]