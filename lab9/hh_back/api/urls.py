from django.urls import path
from api import views

# /api/companies - List of all Companies -> works
# /api/companies/<int:company_id>/ - Get one Company -> works
# /api/companies/<int:id>/vacancies/ - List of Vacancies by Company -> works
# /api/vacancies/ - List of all Vacancies -> works
# /api/vacancies/<int:vacancy_id>/ - Get one Vacancy -> works
# /api/vacancies/top_ten/ - List of top 10 vacancies sorted by decreasing salary -> works


urlpatterns = [
    path('companies/', views.company_list),
    path('companies/<int:company_id>/', views.company_item),
    path('companies/<int:company_id>/vacancies/', views.company_vacancy_list),
    path('vacancies/', views.vacancy_list),
    path('vacancies/<int:vacancy_id>/', views.vacancy_item),
    path('vacancies/top_ten/', views.vacancy_list_ten)
]
