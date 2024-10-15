from django.db import models
from django.contrib.auth.models import AbstractUser
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