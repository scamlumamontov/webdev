from django.urls import path
from api.views import getAllCompanies, getCompany, getVacancies, getVacancy, getAllVacancies, topten

urlpatterns = [
    path('companies/', getAllCompanies),
    path('companies/<int:id>/', getCompany),
    path('companies/<int:id>/vacancies/', getVacancies),
    path('vacancies/<int:id>/', getVacancy),
    path('vacancies/', getAllVacancies),
    path('vacancies/top_ten/', topten)
]
