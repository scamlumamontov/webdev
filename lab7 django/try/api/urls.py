from django.urls import path
from .views import getProducts, getProduct, getCategory, getCategories, getCategoryProduct

urlpatterns = [
    path('products/', getProducts, name='product-list'),
    path('products/<int:id>/', getProduct, name='product-detail'),
    path('categories/', getCategories),
    path('categories/<int:id>/', getCategory),
    path('categories/<int:id>/products/', getCategoryProduct)
]