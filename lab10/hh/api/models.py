from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(default="No desc")
    city = models.CharField(default="international", max_length=200)
    address = models.TextField()

class Vacancy(models.Model):
    name = models.CharField(max_length=300)
    description = models.TextField(default="no desc")
    salary = models.FloatField(default=0)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
