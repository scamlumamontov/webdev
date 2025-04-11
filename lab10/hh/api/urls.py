from django.urls import path
from api.views import getAllCompanies, getCompany, getVacancies, getVacancy, getAllVacancies, topten
from api.cbv import CompanyView, VacancyView
from api.fbv import what, what2

urlpatterns = [
    path('companies/', CompanyView.as_view()),
    path('companies/<int:id>/', what),
    path('companies/<int:id>/vacancies/', getAllVacancies),
    path('vacancies/<int:id>/', what2),
    path('vacancies/', VacancyView.as_view()),
    path('vacancies/top_ten/', topten)
]
