from rest_framework import serializers
from .models import Transaction, CustomUser, Reminder

from rest_framework import serializers
from .models import CustomUser

# Serializer for retrieving user details (used in views for getting user info)
class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ["id", "username", "first_name", "last_name", "profile_picture"]

# Serializer for user signup (used in the signup view)
class CustomUserSignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['username', 'password', 'profile_picture']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        # Create a user with the hashed password
        user = CustomUser.objects.create_user(**validated_data)
        return user


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
