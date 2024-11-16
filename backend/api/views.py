from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Transaction, Reminder
from .serializers import TransactionsSerializer, ReminderSerializer,CustomUserSignupSerializer, CustomUserSerializer
from datetime import datetime
from rest_framework.decorators import api_view,permission_classes

from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.parsers import MultiPartParser, FormParser

# Create your views here.

class TransactionsListView(APIView):
    def get(self, request):
        transactions = Transaction.objects.filter(user=request.user)
        serializer = TransactionsSerializer(transactions, many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)
    

class TransactionsCreateView(APIView):
    def post(self, request):
        serializer = TransactionsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class RemindersListView(APIView):
    def get(self, request):
        reminders = Reminder.objects.filter(user=request.user)
        serializer = ReminderSerializer(reminders, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class RemindersCreateView(APIView):
    def post(self, request):
        serializer = ReminderSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([AllowAny]) 
def signup(request):
    serializer = CustomUserSignupSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "User created successfully"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def current_user(request):
    """
    Retrieve the details of the currently logged-in user.
    """
    serializer = CustomUserSerializer(request.user)
    return Response(serializer.data)
class UpdateUserView(APIView):
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser]

    def patch(self, request):
        print(f"Incoming request data: {request.data}")
        print(f"Files: {request.FILES}")

        user = request.user
        serializer = CustomUserSerializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            user = serializer.save()
            print(f"Updated profile picture: {user.profile_picture.url}")
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
