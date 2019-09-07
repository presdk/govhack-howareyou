from django.forms import ModelForm
from .models import SubmittedData


class UserInfoForm(ModelForm):
    class Meta:
        model = SubmittedData
        fields = ['user', 'age_grp', 'gender_grp', 'ethnic_grp', 'region_grp']

