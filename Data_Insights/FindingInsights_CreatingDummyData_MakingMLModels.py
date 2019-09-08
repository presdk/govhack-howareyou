# -*- coding: utf-8 -*-
"""
Created on Sat Sep  7 13:43:58 2019

@author: lkim564
"""

import numpy as np
import pandas as pd
import random
import time

# Load the data
stats = pd.read_csv("csv_clean/2014 - Overall life satisfaction by family type, age group and sex.csv")
stats.columns = stats.iloc[0]
stats = stats.drop(0)
stats = stats.drop(columns=[0, 'Family type'])
stats['Total'] = pd.to_numeric(stats['Total'])
stats['  7 - 10'] = pd.to_numeric(stats['  7 - 10'])

# Fill in the empty cells
for item in range(0,stats.shape[0]):
    if stats.iloc[item]['  0 - 6'] == '..':
        stats.at[item+1,'  0 - 6'] = stats.iloc[item]['Total'] - stats.iloc[item]['  7 - 10']
        
stats['  0 - 6'] = pd.to_numeric(stats['  0 - 6'])

# Create a new cleaned dataframe
new_frame = pd.DataFrame(columns=stats.columns)
probability_frame = pd.DataFrame(columns=stats.columns)
C = sum(stats['Total'])

# Calculate probabilities while making cleaned frame
for item in stats['Age group (Life-stages)'].unique():
    mask = stats['Age group (Life-stages)'] == item
    for item_2 in stats[mask]['Sex'].unique():
        mask_2 = stats[mask]['Sex'] == item_2
        Total_value = sum(stats[mask][mask_2]['Total'])
        first_value = sum(stats[mask][mask_2]['  0 - 6'])
        second_value = sum(stats[mask][mask_2]['  7 - 10'])
        new_frame = new_frame.append(pd.Series([item, item_2, Total_value, first_value, second_value], index=stats.columns), ignore_index=True)
        probability_frame = probability_frame.append(pd.Series([item, item_2, Total_value/C, first_value/C, second_value/C], index=stats.columns), ignore_index=True)

# Dataset features and class generator
def random_set_gen(frame):
    """
    15 - 24 C02A
    25 - 44 C02B
    45 - 64 C02C
    65+     C02D
    Male    C04A
    Female  C04B
    """
    gen = random.uniform(0,100)/100
    if gen < frame['Total'][0]:
        if random.uniform(0,frame['Total'][0]) < frame['  0 - 6'][0]:
            return 'C02A', 'C04A', 'Y'       
        return 'C02A', 'C04A', 'N'
    elif gen < sum(frame['Total'][:2]):
        if random.uniform(0,frame['Total'][1]) < frame['  0 - 6'][1]:
            return 'C02A', 'C04B', 'Y'  
        return 'C02A', 'C04B', 'N'
    elif gen < sum(frame['Total'][:3]):
        if random.uniform(0,frame['Total'][2]) < frame['  0 - 6'][2]:
            return 'C02B', 'C04A', 'Y' 
        return 'C02B', 'C04A', 'N'
    elif gen < sum(frame['Total'][:4]):
        if random.uniform(0,frame['Total'][3]) < frame['  0 - 6'][3]:
            return 'C02B', 'C04B', 'Y'  
        return 'C02B', 'C04B', 'N'
    elif gen < sum(frame['Total'][:5]):
        if random.uniform(0,frame['Total'][4]) < frame['  0 - 6'][4]:
            return 'C02C', 'C04A', 'Y'
        return 'C02C', 'C04A', 'N'
    elif gen < sum(frame['Total'][:6]):
        if random.uniform(0,frame['Total'][5]) < frame['  0 - 6'][5]:
            return 'C02C', 'C04B', 'Y'
        return 'C02C', 'C04B', 'N'
    elif gen < sum(frame['Total'][:7]):
        if random.uniform(0,frame['Total'][6]) < frame['  0 - 6'][6]:
            return 'C02D', 'C04A', 'Y' 
        return 'C02D', 'C04A', 'N'
    else:
        if random.uniform(0,frame['Total'][7]) < frame['  0 - 6'][7]:
            return 'C02D', 'C04B', 'Y'
        return 'C02D', 'C04B', 'N'

# [C12A, C12B, C12C, C12D]
# [C13A, C13B, C13C, C13D, C13E, C13F, C13G, C13H, C13I, C13J, C13K, C13L]
def random_set_gen_2(eth_probs, reg_probs, condition):
    
    rev_eth_probs = [0.160,0.224,0.217,0.217]
    dep_prob = 0.174
    
    if condition == 'N':
        rev_eth_probs = [1-i for i in rev_eth_probs]
        dep_prob = 1-dep_prob
        
    new_eth_probs = []
    for i in range(len(eth_probs)):
        cond_ = rev_eth_probs[i] * eth_probs[i] / dep_prob
        new_eth_probs.append(cond_)
    
    gen = random.uniform(0,sum(new_eth_probs))
    ticker = 0
    eth = ''
    while eth == '':
        ticker += 1
        if gen < sum(new_eth_probs[:ticker]):
            eth = 'C12' + chr(ticker+64)
            
    gen = random.uniform(0,sum(reg_probs))
    ticker = 0
    reg = ''
    while reg == '':
        ticker += 1
        if gen < sum(reg_probs[:ticker]):
            reg = 'C13' + chr(ticker+64)
            
    return eth, reg

# Creating the dummy data
dummy_data = pd.DataFrame(columns=['age_group','sex','ethnicity','region','class'])

tic = time.perf_counter()

for i in range(0,35200): 
    dummy_age, dummy_sex, dummy_class = random_set_gen(probability_frame)
    # Get from depression dataset
    eth_probs = [0.70,0.12,0.05,0.13]
    # Get from NZ poplation statistics
    reg_probs = [0.035,0.334,0.095,0.063,0.046,0.026,0.053,0.111,0.040,0.127,0.048,0.022]
    dummy_eth, dummy_reg = random_set_gen_2(eth_probs, reg_probs, dummy_class)
    dummy_data = dummy_data.append(pd.Series([dummy_age, dummy_sex, dummy_eth, dummy_reg, dummy_class], index=dummy_data.columns), ignore_index=True)

toc = time.perf_counter()

# Processing time for creating data
print(toc-tic)

dummy_data.to_csv(path_or_buf='35200_dummy_data_age_sex_eth_reg.csv')

dummy_data.groupby('class').count()

# Import sklearn libraries for classifiers

# For feature selection
from sklearn.feature_selection import RFECV
from sklearn.ensemble import RandomForestClassifier
# Classification models
from sklearn.tree import DecisionTreeClassifier
from sklearn.neural_network import MLPClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.linear_model import Perceptron
# Cross validation
from sklearn.model_selection import StratifiedKFold
from sklearn.model_selection import GridSearchCV
# Miscellaneous
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from sklearn.externals import joblib

# Constant variables
random_seed = 2019
score = 'accuracy'

outputs = dummy_data[['class']].copy() # Target
_Features = dummy_data.drop(columns=['class']) # Features
Features = pd.get_dummies(_Features)

# Training set, testing set split
X_train, X_test, y_train, y_test = train_test_split(Features, outputs, test_size=0.2, random_state=random_seed)

"""# Feature Selection - model based feature selection via recursion and cross validation
skf = StratifiedKFold(n_splits=5, random_state=random_seed)
selection = RFECV(RandomForestClassifier(random_state=random_seed), cv=skf, scoring=score)
selection.fit(X_train, y_train)
X_train_selection = selection.transform(X_train)
X_test_selection = selection.transform(X_test)"""
X_train_selection = X_train
X_test_selection = X_test

skf = StratifiedKFold(n_splits=5, random_state=random_seed)

# Model space    
models = {
    "DecisionTree": DecisionTreeClassifier(random_state=random_seed),
    "NearestNeighbor": KNeighborsClassifier(weights='distance'),
    "NeuralNetwork": MLPClassifier(solver='sgd', learning_rate='adaptive', max_iter=10, random_state=random_seed),
    "Perceptron": Perceptron(random_state=random_seed)
}

# Hyperparamater space
hyperparameters = {
    "DecisionTree":[{'max_depth':[3,4,5,6]}],
    "NearestNeighbor": [{'n_neighbors':[5,7,9,11]}],
    "NeuralNetwork":[{'hidden_layer_sizes':[(5,),(10,)]}],
    "Perceptron": [{'alpha':[0.001,0.01]}]
}

# Define report
results_report = []

tic = time.perf_counter()

# Model fitting
for identifier, model in models.items():
    
    print(identifier)
    
    # Run through different combinations of hyperparameters (with stratified K folds) to identify the best
    classifier = GridSearchCV(model, hyperparameters[identifier], cv=skf, scoring=score)
    classifier.fit(X_train_selection, y_train.values.ravel())
    
    # Get the classifier with the best combinations of hyperparameters
    best_model = classifier.best_estimator_
    
    # Validate the accuracy
    y_pred = best_model.predict(X_test_selection)
    acc = accuracy_score(y_test, y_pred)
    
    # Evaluate accuracy of model
    evaluation = {'model': identifier, 'parameters': str(best_model.get_params()), 'accuracy': acc}
    
    # Append to report
    results_report.append(pd.DataFrame(evaluation,index=[0]))
    
    # Save the models
    filename = 'sklearn_models_' + identifier + '_classifier.joblib.pkl'
    joblib.dump(best_model, filename, compress=9)

toc = time.perf_counter()

print(toc-tic)

# AVAILABLE OPTIONS
# age: 'C02A', 'C02B', 'C02C', 'C02D'
# gender: 'C04A', 'C04B'
# ethnicity: 'C12A', 'C12B', 'C12C', 'C12D'
# region: 'C13A', 'C13B', 'C13C', 'C13D', 'C13E', 'C13F', 'C13G', 'C13H', 'C13I', 'C13J', 'C13K', 'C13L'
# model: 'DecisionTree', 'NearestNeighbor', 'NeuralNetwork', 'Perceptron'
def predict(age, gender, ethnicity, region, model):
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

print(predict('C02C','C04A','C12A','C13J','Perceptron'))
