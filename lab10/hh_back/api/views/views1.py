import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from api.models import Company, Vacancy


@csrf_exempt
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        companies_json = [c.to_json() for c in companies]
        return JsonResponse(companies_json, safe=False)
    if request.method == 'POST':
        data = json.loads(request.body)
        # Extract the data from the request body
        name = data.get('name')
        description = data.get('description')
        city = data.get('city')
        address = data.get('address')

        company = Company.objects.create(
            name=name,
            description=description,
            city=city,
            address=address
        )
        return JsonResponse(company.to_json())


@csrf_exempt
def vacancy_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        vacancies_json = [v.to_json() for v in vacancies]
        return JsonResponse(vacancies_json, safe=False)
    if request.method == 'POST':
        data = json.loads(request.body)
        # Extract the data from the request body
        print(data)
        name = data.get('name')
        description = data.get('description')
        salary = data.get('salary')
        company_id = data.get('company_id')
        company = Company.objects.get(id=company_id)
        print(company_id)
        vacancy = Vacancy.objects.create(
            name=name,
            description=description,
            salary=salary,
            company=company
        )
        return JsonResponse(vacancy.to_json())


@csrf_exempt
def company_item(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except:
        return JsonResponse({'error': 'such company does not exist'})
    if request.method == 'GET':
        return JsonResponse(company.to_json())
    elif request.method == 'PUT':
        data = json.loads(request.body)
        new_company_name = data.get('name', company.name)
        new_company_description = data.get('description', company.description)
        new_company_city = data.get('city', company.city)
        new_ccompany_address = data.get('address', company.address)
        company.name = new_company_name
        company.description = new_company_description
        company.city = new_company_city
        company.address = new_ccompany_address
        company.save()
        return JsonResponse(company.to_json())
    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({'deleted': True})


@csrf_exempt
def vacancy_item(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except:
        return JsonResponse({'error': 'such vacancy does not exist'})

    if request.method == 'GET':
        return JsonResponse(vacancy.to_json())
    elif request.method == 'PUT':
        data = json.loads(request.body)
        new_vacancy_name = data.get('name', vacancy.name)
        new_vacancy_description = data.get('description', vacancy.description)
        new_vacancy_salary = data.get('salary', vacancy.salary)
        new_vacancy_company_id = data.get('company_id', 0)
        new_vacancy_company = Company.objects.get(id=new_vacancy_company_id)
        vacancy.name = new_vacancy_name
        vacancy.description = new_vacancy_description
        vacancy.salary = new_vacancy_salary
        vacancy.company = new_vacancy_company
        vacancy.save()
        return JsonResponse(vacancy.to_json())
    elif request.method == 'DELETE':
        vacancy.delete()
        return JsonResponse({'deleted': True})


def vacancy_list_ten(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def company_vacancy_list(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
        vacancies = company.vacancies.all()
        vacancies_json = [v.to_json() for v in vacancies]
    except:
        return JsonResponse({'error': 'such company does not exist'})
    return JsonResponse(vacancies_json, safe=False)
