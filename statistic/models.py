from django.db import models
from django.contrib.auth import get_user_model
from enum import Enum


# Age Group
class AgeGroupChoice(Enum):
    C02A = "15-24"
    C02B = "25-44"
    C02C = "45-64"
    C02D = "65+"


# Gender Group
class GenderGroupChoice(Enum):
    C04A = "Male"
    C04B = "Female"


# Ethnicity Group
class EthnicityGroupChoice(Enum):
    C12A = "European"
    C12B = "Maori"
    C12C = "Pacific"
    C12D = "Asian"


# Region Group
class RegionGroupChoice(Enum):
    C13A = "Northland"
    C13B = "Auckland"
    C13C = "Waikato"
    C13D = "Bay of Plenty"
    C13E = "Grsborne / Hawkes Bay"
    C13F = "Taranaki"
    C13G = "Manawatu / Whanganui"
    C13H = "Wellington"
    C13I = "Nelson / Tasman / Marlborgh / West Coast"
    C13J = "Canterbury"
    C13K = "Otago"
    C13L = "Southland"


# For Statistic
class SubmittedData(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, null=True)

    age_grp = models.CharField(
        max_length=5,
        choices=[(tag.name, tag.value) for tag in AgeGroupChoice],
        default="0"
    )
    gender_grp = models.CharField(
        max_length=5,
        choices=[(tag.name, tag.value) for tag in GenderGroupChoice],
        default="0"
    )
    ethnic_grp = models.CharField(
        max_length=5,
        choices=[(tag.name, tag.value) for tag in EthnicityGroupChoice],
        default="0"
    )
    region_grp = models.CharField(
        max_length=5,
        choices=[(tag.name, tag.value) for tag in RegionGroupChoice],
        default="0"
    )

    created_at = models.DateTimeField(auto_now_add=True, null=True)

