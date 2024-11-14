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

    def create(self, validated_data):
        # Check if the user is empty or invalid
        user = validated_data.get("user")
        if user is None or user.is_anonymous:
            validated_data["user"] = None  # Or handle it as you need
        return super().create(validated_data)


class ReminderSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer(read_only=True)
    class Meta: 
        model = Reminder
        fields = [
            "user",
            "reminder_title",
            "reminder_date",
            "reminder_icon",
        ]

    def create(self, validated_data):
        # Check if the user is empty or invalid
        user = validated_data.get("user")
        if user is None or user.is_anonymous:
            validated_data["user"] = None  # Or handle it as you need
        return super().create(validated_data)
