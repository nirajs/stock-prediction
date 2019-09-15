import json
import numpy as np
import os
import pickle
from sklearn.externals import joblib
from sklearn.preprocessing import MinMaxScaler

from azureml.core.model import Model
import numpy as np
import pandas as pd
import logging

def init():
    global model
    global new_data
    global scaler
    scaler = MinMaxScaler(feature_range=(0, 1))
    data_set = pd.DataFrame.from_dict({'Close': {'2019-09-11': 1234.099976,
  '2019-09-12': 1210.349976,
  '2019-09-13': 1225.550049}})
    logging.info('Min Max Scaler initialized ')
    new_data = pd.DataFrame(index=range(0,len(data_set)),columns=[ 'Close'])
    for i in range(0,len(new_data)):
        new_data['Close'][i] = data_set['Close'][i]
    # retrieve the path to the model file using the model name
    model_path = Model.get_model_path('stock-prediction-lstm-close')
    model = joblib.load(model_path)
    logging.info('Init Done')
    
def tx():
    inputs = new_data.values
    inputs = inputs.reshape(-1,1)
    inputs  = scaler.fit_transform(inputs)
    X_test = []
    for i in range(2,inputs.shape[0]):#<- here
        X_test.append(inputs[i-2:i,0])#<- here
    X_test = np.array(X_test)
    X_test = np.reshape(X_test, (X_test.shape[0],X_test.shape[1],1))
    return X_test

def run(raw_data):
    #data = np.array(json.loads(raw_data)['data'])
    # make prediction
    data = tx()
    y_hat = model.predict(data)
    y_hat = scaler.inverse_transform(y_hat)
    # you can return any data type as long as it is JSON-serializable
    return y_hat.tolist()
