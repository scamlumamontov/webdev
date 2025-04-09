from django.http import HttpResponse
from django.http import JsonResponse
from .models import Product
from .models import Category
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def getProducts(request):
    if request.method == 'GET':
        products = Product.objects.all().values()
        return JsonResponse(list(products), safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        Product.objects.create(data)

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

