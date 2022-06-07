from distutils.command.upload import upload
from enum import Flag, unique
from pyexpat import model
from unicodedata import category
from django.db import models

# Create your models here.
class Classic(models.Model):


    name = models.CharField(max_length=150,null=False, blank=False)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=False, blank=False)
    description = models.TextField()
    image = models.ImageField(upload_to='uploads/images', null=False, blank=False)
    created = models.DateTimeField(auto_now_add=True)
    category = models.CharField(max_length=50, null=True, blank=True)

    def __str__(self):
        return self.name


