# -*- coding: utf-8 -*-
"""
Created on Sun Sep  8 14:48:13 2019

@author: lkim564
"""

def predict(age, gender, ethnicity, region, model):
    
    import pandas as pd
    from sklearn.tree import DecisionTreeClassifier
    from sklearn.neural_network import MLPClassifier
    from sklearn.neighbors import KNeighborsClassifier
    from sklearn.linear_model import Perceptron
    from sklearn.externals import joblib 
    
    sub_data = pd.DataFrame(columns=['age_group','sex','ethnicity','region'])
    sub_data = sub_data.append(pd.Series(['C02A','C04A','C12A','C13A'], index=sub_data.columns), ignore_index=True)
    sub_data = sub_data.append(pd.Series(['C02B','C04B','C12B','C13B'], index=sub_data.columns), ignore_index=True)
    sub_data = sub_data.append(pd.Series(['C02C','C04A','C12C','C13C'], index=sub_data.columns), ignore_index=True)
    sub_data = sub_data.append(pd.Series(['C02D','C04B','C12D','C13D'], index=sub_data.columns), ignore_index=True)
    sub_data = sub_data.append(pd.Series(['C02A','C04A','C12A','C13E'], index=sub_data.columns), ignore_index=True)
    sub_data = sub_data.append(pd.Series(['C02B','C04B','C12B','C13F'], index=sub_data.columns), ignore_index=True)
    sub_data = sub_data.append(pd.Series(['C02C','C04A','C12C','C13G'], index=sub_data.columns), ignore_index=True)
    sub_data = sub_data.append(pd.Series(['C02D','C04B','C12D','C13H'], index=sub_data.columns), ignore_index=True)
    sub_data = sub_data.append(pd.Series(['C02A','C04A','C12A','C13I'], index=sub_data.columns), ignore_index=True)
    sub_data = sub_data.append(pd.Series(['C02B','C04B','C12B','C13J'], index=sub_data.columns), ignore_index=True)
    sub_data = sub_data.append(pd.Series(['C02C','C04A','C12C','C13K'], index=sub_data.columns), ignore_index=True)
    sub_data = sub_data.append(pd.Series(['C02D','C04B','C12D','C13L'], index=sub_data.columns), ignore_index=True)
    sub_data = sub_data.append(pd.Series([age,gender,ethnicity,region], index=sub_data.columns), ignore_index=True)
    
    filename = 'Transfer/sklearn_models_' + model + '_classifier.joblib.pkl'
    
    model_ = joblib.load(filename)
    
    Features = pd.get_dummies(sub_data)
    y_pred = model_.predict(Features)
    
    return y_pred[-1]

# AVAILABLE OPTIONS
# age: 'C02A', 'C02B', 'C02C', 'C02D'
# gender: 'C04A', 'C04B'
# ethnicity: 'C12A', 'C12B', 'C12C', 'C12D'
# region: 'C13A', 'C13B', 'C13C', 'C13D', 'C13E', 'C13F', 'C13G', 'C13H', 'C13I', 'C13J', 'C13K', 'C13L'
# model: 'DecisionTree', 'NearestNeighbor', 'NeuralNetwork', 'Perceptron'

# example: predict('C02C','C04A','C12A','C13H','NearestNeighbor'))