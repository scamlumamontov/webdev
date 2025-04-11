from django.shortcuts import render
from api.models import Company, Vacancy
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from api.serializers import CompanySe, VacancySe

# Create your views here.
def getAllCompanies(request):
    companies = Company.objects.all()
    ser = CompanySe(companies, many=True)
    return JsonResponse(ser.data, safe=False)

def getCompany(request, id):
    try:
        company = Company.objects.get(pk=id)
    except Company.DoesNotExist as e:
        return JsonResponse({"error":"no such company"})
    ser = CompanySe(company)
    return JsonResponse(ser.data)

def getVacancies(request, id):
    try:
        company = Company.objects.get(pk=id)
    except Company.DoesNotExist:
        return JsonResponse({"error": "No such company"})

    vacancies = Vacancy.objects.filter(company=company).values()
    
    return JsonResponse(list(vacancies), safe=False)

def getVacancy(request, id):
    try:
        vacancy = Vacancy.objects.get(pk = id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({"error":"no such vacancy"})
    ser = VacancySe(vacancy)
    return JsonResponse(ser.data, safe=False)

def getAllVacancies(request):
    vac = Vacancy.objects.all()
    ser = VacancySe(vac, many=True)
    return JsonResponse(ser.data, safe=False)

def topten(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10].values()

    return JsonResponse(list(vacancies), safe=False)