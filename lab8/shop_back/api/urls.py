from django.urls import path
from api import views

# /api/products - List of all Products
# /api/products/<int:id>/ - Get one Product
# /api/categories/ - List of all Categories
# /api/categories/<int:id>/ - Get one Category
# /api/categories/<int:id>/products/ - List of Products by Category

urlpatterns = [
    path('products/', views.product_list),
    path('products/<int:id>/', views.product_item),
    path('categories/', views.categories_list),
    path('categories/<int:id>/', views.categories_item),
    path('categories/<int:id>/products/', views.categories_products)
]
