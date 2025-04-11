from django.shortcuts import render
from api.models import Company, Vacancy
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from api.serializers import CompanySe, VacancySe
from rest_framework.views import APIView
from rest_framework import viewsets, mixins, generics
from django.utils.decorators import method_decorator

@method_decorator(csrf_exempt, name='dispatch')
class CompanyView(mixins.CreateModelMixin,
                mixins.UpdateModelMixin,
                mixins.DestroyModelMixin,
                mixins.ListModelMixin,
                generics.GenericAPIView,
                ):

    queryset = Company.objects.all()
    serializer_class = CompanySe
    lookup_url_kwarg = 'id'

    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request)
    
    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)



class VacancyView(mixins.CreateModelMixin,
                  mixins.ListModelMixin,
                  mixins.UpdateModelMixin,
                  mixins.DestroyModelMixin,
                  generics.GenericAPIView):

    queryset = Vacancy.objects.all()
    serializer_class = VacancySe
    lookup_url_kwarg = 'id'

    def get(self, *args, **kwargs):
        return self.list(self, *args, **kwargs)
    
    def post(self, request):
        return self.create(request)
    
    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)
    
