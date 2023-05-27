from django.db import models

# Create your models here.
from django.db import models 
from django.contrib.auth.models import User 
from django.db.models.signals import post_save
from django.dispatch import receiver

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    username = models.CharField(max_length=128, default='default_username')
    email = models.CharField(max_length=128)
    propensity = models.CharField(max_length=128, blank=True)

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        username = instance.username
        email = instance.email
        Profile.objects.create(user=instance, username=username, email=email)
