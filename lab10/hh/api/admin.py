from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Company, Vacancy

# Register your models here.

@admin.register(Company)
class ProductAdmin(admin.ModelAdmin):
    list_display = ("name", "city", "description", "address") 
    search_fields = ("name",)
    list_filter = ("city",)

@admin.register(Vacancy)
class ProductAdmin(admin.ModelAdmin):
    list_display = ("name", "salary", "description", "company") 
    search_fields = ("name",)
    list_filter = ("salary",)