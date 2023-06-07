from django.db import models

# models.py
from django.db import models

class Portfolio(models.Model):
    name = models.CharField(max_length=255)
    amount = models.IntegerField()
    importance = models.IntegerField()
    risk = models.FloatField(blank=True, null=True)
    profit = models.FloatField(blank=True, null=True)

    def __str__(self):
        return self.name
