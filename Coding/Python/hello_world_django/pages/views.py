from django.shortcuts import render
from django.http import HttpResponse
from .models import Mess

# Create your views here.
#def homePageView(request):
 #   return HttpResponse('Hello World')

def index(request):
    my_mess = Mess.mess
    context = {'a_mess': my_mess}
    print ('view.py  ', my_mess)
    return render(request, 'index.html', context)