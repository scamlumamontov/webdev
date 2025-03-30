from django.db import model

class Product(model.Models):
    name = model.CharField(max_length=100)
    price = model.FloatField()
    description = model.TextField(default="No description", max_length=500)
    count = model.IntegerField()
    is_active = model.BooleanField()

    
    
