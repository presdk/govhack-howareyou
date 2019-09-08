from django.http import JsonResponse
from .models import SubmittedData, AgeGroupChoice, GenderGroupChoice, EthnicityGroupChoice, RegionGroupChoice

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

        pass

    else:
        return JsonResponse(status=405,
                            data={"error": "Using this method is not allowed."})
