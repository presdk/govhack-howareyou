from django.http import JsonResponse, HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

from .models import SubmittedData, AgeGroupChoice, GenderGroupChoice, EthnicityGroupChoice, RegionGroupChoice
from .form import UserInfoForm
from Data_Insights.Data_Checker import predict

@csrf_exempt
def form_action(request):
    if request.method == "GET":
        age_grp = [(tag.name, tag.value) for tag in AgeGroupChoice]
        gender_grp = [(tag.name, tag.value) for tag in GenderGroupChoice]
        ethnic_grp = [(tag.name, tag.value) for tag in EthnicityGroupChoice]
        region_grp = [(tag.name, tag.value) for tag in RegionGroupChoice]

        return JsonResponse(status=200,
                            data={"form_data": {
                                "age_grp": age_grp,
                                "gender_grp": gender_grp,
                                "ethnic_grp": ethnic_grp,
                                "region_grp": region_grp,
                            }})

    elif request.method == "POST":
        form = UserInfoForm(request.POST)
        if form.is_valid():
            age = form.cleaned_data['age_grp']
            gender = form.cleaned_data['gender_grp']
            ethnic = form.cleaned_data['ethnic_grp']
            region = form.cleaned_data['region_grp']

            #predict(age, gender, ethnicity, region, model)
            result = predict(age, gender, ethnic, region, 'Perceptron')

            return JsonResponse(status=200,
                                data={"result": result})
        else:
            return JsonResponse(status=400,
                                data={"error": "Failed to validate form.",
                                      "reason": form.errors,
                                      })
    else:
        return JsonResponse(status=405,
                            data={"error": "Using this method is not allowed."})


def get_form(request):
    return render(request, 'check.html', context={'form': UserInfoForm()})