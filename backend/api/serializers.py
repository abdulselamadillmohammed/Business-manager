from rest_framework import serializers
from .models import Transaction, CustomUser, Reminder

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ["id", "username", "first_name", "last_name", "profile_picture"]


class TransactionsSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer(read_only=True)
    class Meta: 
        model = Transaction
        fields =         fields = [
            "user",
            "transaction_icon",
            "transaction_title",
            "transaction_detail",
            "transaction_type",
            "transaction_price",
            "modified_at",
            "created_at",
        ]

class ReminderSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer(read_only=True)
    class Meta: 
        model = Reminder
        fields = [
            "user",
            "event_title",
            "event_date",
            "event_icon",
        ]
