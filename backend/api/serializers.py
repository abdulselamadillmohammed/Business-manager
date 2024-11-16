from rest_framework import serializers
from .models import Transaction, CustomUser, Reminder

from rest_framework import serializers
from .models import CustomUser

# Serializer for retrieving user details (used in views for getting user info)
from rest_framework import serializers
from .models import CustomUser

# General serializer for retrieving user details
class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ["id", "username", "email", "first_name", "last_name", "profile_picture"]
        extra_kwargs = {
            'email': {'required': True},  # Ensure email is required when updating
        }

# Serializer for user signup
class CustomUserSignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ["username", "password", "email", "profile_picture"]
        extra_kwargs = {
            "password": {"write_only": True},  # Hide password in responses
            "email": {"required": True},  # Email is required for signup
        }

    def create(self, validated_data):
        # Explicitly pass validated data to create a user
        user = CustomUser.objects.create_user(
            username=validated_data["username"],
            email=validated_data["email"],
            password=validated_data["password"],
            profile_picture=validated_data.get("profile_picture"),
        )
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
