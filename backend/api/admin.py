from django.contrib import admin
from .models import CustomUser, Transaction, Reminder

admin.site.register(CustomUser)
admin.site.register(Transaction)
admin.site.register(Reminder)
# Register your models here.
