from django.shortcuts import render
from api.models import Company, Vacancy
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from api.serializers import CompanySe, VacancySe
from api.cbv import CompanyView, VacancyView
from rest_framework import status

@csrf_exempt
def what(request, *args, **kwargs):
    if request.method == 'GET':
        try:
            company_id = kwargs.get('id')
            company = Company.objects.get(pk=company_id)
        except Company.DoesNotExist:
            return JsonResponse({"error": "no such company"}, status=404)
        ser = CompanySe(company)
        return JsonResponse(ser.data)
    elif request.method in ['PUT', 'DELETE']:
        view = CompanyView.as_view()
        return view(request, *args, **kwargs)
    else:
        return JsonResponse({}, status=405)

@csrf_exempt
def what2(request, *args, **kwargs):
    if request.method == 'GET':
        try:
            company_id = kwargs.get('id')
            company = Company.objects.get(pk=company_id)
        except Company.DoesNotExist:
            return JsonResponse({"error": "no such company"}, status=404)
        ser = CompanySe(company)
        return JsonResponse(ser.data)
    elif request.method in ['PUT', 'DELETE']:
        view = csrf_exempt( VacancyView.as_view() )
        return view(request, *args, **kwargs)
    else:
        return JsonResponse({}, status=405)