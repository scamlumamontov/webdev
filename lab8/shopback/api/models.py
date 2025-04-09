from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.FloatField()
    description = models.TextField(default="No description", max_length=500)
    count = models.IntegerField(default=0)
    is_active = models.BooleanField(default=1)
    category_id = models.IntegerField(default=1)

class Category(models.Model):
    category_id = models.IntegerField()
    name = models.CharField(max_length=200)