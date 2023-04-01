from django.http import JsonResponse, HttpResponse
from django.shortcuts import render


# Create your views here.
from api.models import Product, Category


def product_list(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)


def product_item(request,id):
    products = Product.objects.all()
    for product in products:
        if product.id == id:
            return JsonResponse(product.to_json())
    return JsonResponse({'error': 'such product does not exist'})


def categories_list(request):
    categories = Category.objects.all()
    categories_json = [c.to_json() for c in categories]
    return JsonResponse(categories_json, safe=False)


def categories_item(request,id):
    categories = Category.objects.all()
    for category in categories:
        if category.id == id:
            return JsonResponse(category.to_json())
    return JsonResponse({'error': 'such category does not exist'})


def categories_products(request,id):
    products = Product.objects.filter(category_id=id)
    products_json = [p.to_json() for p in products]
    if len(products_json) > 0:
        return JsonResponse(products_json,safe=False)
    return JsonResponse({'info': 'category is empty'})
