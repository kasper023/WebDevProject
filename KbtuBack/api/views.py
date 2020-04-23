from django.shortcuts import render
from django.http.response import HttpResponse, JsonResponse

def hello(request):
    return HttpResponse('<h1>Hello</h1>')
# Create your views here.
