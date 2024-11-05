from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _
# Create your models here.
class CustomUser(AbstractUser):
    profile_picture = models.ImageField(upload_to='profile_pictures/', null=True, blank=True)
    class Meta: 
        indexes = [
            models.Index(
                fields=["username"], name="username_index"
            ),
            models.Index(
                fields=["first_name"], name="first_name_index"
            ),
            models.Index(
                fields=["last_name"], name="last_name_index"
            )
        ]
    def __str__(self):
        return self.username

class TransactionType(models.TextChoices):
    expense = "E",_("Expense")
    revenue = "R", _("Revenue")

class TransactionIconChoices(models.TextChoices):
    SHOPPING = "shopping", _("Shopping")
    FOOD = "food", _("Food")
    TRANSPORT = "transport", _("Transport")
    SALARY = "salary", _("Salary")

class Transaction(models.Model):
    user = models.ForeignKey(CustomUser,on_delete=models.CASCADE, null=True)
    transaction_icon = models.CharField(
        max_length=20,
        choices=TransactionIconChoices.choices,
        default=TransactionIconChoices.SHOPPING,
    )
    transaction_title = models.CharField(max_length=200)
    transaction_detail = models.TextField()
    transaction_type = models.CharField(max_length=1,choices=TransactionType.choices)
    transaction_price = models.DecimalField(max_digits=7, decimal_places=2)

    modified_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.transaction_title} - {self.get_transaction_type_display()}"
    
    class Meta:
        indexes = [
            models.Index(fields=["transaction_title"], name="transaction_title_index")
        ]
        ordering = ["-created_at"]

class ReminderIconChoices(models.TextChoices):
    DATE = "date", _("Date")
    CARD = "card", _("Card")
    MAIL = "mail", _("Mail")
    NOTIFICATION = "notification", _("Notification")

class Reminder(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True, blank=True)
    reminder_title = models.CharField(max_length=100)
    reminder_date = models.DateTimeField()
    reminder_icon = models.CharField(max_length=20, choices=ReminderIconChoices)
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    def __str__(self):
        return f'{self.reminder_title}'
    
    class Meta:
        ordering=["-created_at"]