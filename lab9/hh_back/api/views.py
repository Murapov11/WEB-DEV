from django.http import JsonResponse, HttpResponse
from django.shortcuts import render

# Create your views here.
from api.models import Company, Vacancy


def company_list(request):
    companies = Company.objects.all()
    companies_json = [c.to_json() for c in companies]
    return JsonResponse(companies_json, safe=False)


def company_item(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except:
        return JsonResponse({'error': 'such company does not exist'})
    return JsonResponse(company.to_json())


def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def vacancy_item(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except:
        return JsonResponse({'error': 'such vacancy does not exist'})
    return JsonResponse(vacancy.to_json())


def vacancy_list_ten(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def company_vacancy_list(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
        vacancies = company.vacancies.all()
        print(vacancies)
        vacancies_json = [v.to_json() for v in vacancies]
    except:
        return JsonResponse({'error': 'such company does not exist'})
    return JsonResponse(vacancies_json, safe=False)
