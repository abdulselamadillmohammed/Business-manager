from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Transaction, Reminder
from .serializers import TransactionsSerializer, ReminderSerializer,CustomUserSignupSerializer
from datetime import datetime
from rest_framework.decorators import api_view,permission_classes

from rest_framework.permissions import AllowAny

# Create your views here.

class TransactionsListView(APIView):
    def get(self, request):
        transactions = Transaction.objects.all()
        serializer = TransactionsSerializer(transactions, many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)
    

class TransactionsCreateView(APIView):
    def post(self, request):
        print("Request Data:", request.data) 
        serializer = TransactionsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class RemindersListView(APIView):
    def get(self, request):
        reminders = Reminder.objects.all()
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
    print(request.data)
    serializer = CustomUserSignupSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "User created successfully"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)