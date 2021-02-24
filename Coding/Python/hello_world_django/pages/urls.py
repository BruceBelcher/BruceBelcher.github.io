# pages/urls.py
from django.urls import path
#from .views import homePageView
from .views import index

urlpatterns = [
 #   path('', homePageView, name='home'),
    path('', index, name='index')
]