from django.contrib import admin
from django.conf.urls.static import static
from django.conf import settings
from django.urls import path, include
from .views import TransactionsListView, TransactionsCreateView, RemindersListView, RemindersCreateView, signup
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)



urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('signup/', signup, name='signup'),
    path("allTransactions/", TransactionsListView.as_view()),
    path("allReminders/", RemindersListView.as_view()),
    path("createReminder/", RemindersCreateView.as_view()),
    path("createTransaction/",TransactionsCreateView.as_view()),
    
]