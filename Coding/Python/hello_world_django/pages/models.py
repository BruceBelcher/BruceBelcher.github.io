from django.db import models

# Create your models here.
class Mess(models.Model):
    mess = models.CharField(max_length=40)
    mess = "Hello from Django"