from django.contrib import admin
from .models import SubmittedData

@admin.register(SubmittedData)
class SubmittedDataAdmin(admin.ModelAdmin):
    fields = ('user', 'age_grp', 'gender_grp', 'ethnic_grp', 'region_grp')