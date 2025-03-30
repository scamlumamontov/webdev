from django.http import HttpResponse
from django.http import JsonResponse
from .models import Product
from .models import Category

def getProducts(request):
    products = Product.objects.all().values()
    return JsonResponse(list(products), safe=False)

def someText(request):
    return HttpResponse("Hello, it works!")

def getProduct(request, id):
    product = Product.objects.filter(id=id).values().first()
    if product:
        return JsonResponse(product, safe=False)
    else:
        return JsonResponse({"error" : "product not found"}, safe=False)
    
def getCategories(request):
    categories = Category.objects.all().values()
    return JsonResponse(list(categories), safe=False)

def getCategory(request, id):
    category = Category.objects.filter(id=id).values().first()
    if category:
        return JsonResponse(category, safe=False)
    else:
        return JsonResponse({"error" : "product not found"}, safe=False)
    
def getCategoryProduct(request, id):
    products = Product.objects.filter(category_id=id).values()
    
    if products:
        return JsonResponse(list(products), safe=False)
    else:
        return JsonResponse({"error": "product not found"})