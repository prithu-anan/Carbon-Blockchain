import numpy as np
import pandas as pd
import re
from scipy import stats
from sklearn.preprocessing import StandardScaler, MinMaxScaler, LabelEncoder
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score
from sklearn.feature_selection import SelectKBest, chi2
from xgboost import XGBRegressor
import matplotlib.pyplot as plt

class PredictionModel:
    def __init__(self):
        self.data = None
        self.input_features = None
        self.target_features = None
        self.model = None
        self.scaler = None
        self.xtrain = None
        self.xtest = None
        self.ytrain = None
        self.ytest = None

    def initialize(self):
        # Load and preprocess data
        df = pd.read_csv('SolarPrediction.csv')
        self.data = df.copy()

        # Original preprocessing steps
        self.data['Data'] = self.data['Data'].apply(lambda x: x.split()[0])
        self.data['Month'] = pd.to_datetime(df['Data']).dt.month
        self.data['Day'] = pd.to_datetime(df['Data']).dt.day
        self.data['Hour'] = pd.to_datetime(df['Time']).dt.hour
        self.data['Minute'] = pd.to_datetime(df['Time']).dt.minute
        self.data['Second'] = pd.to_datetime(df['Time']).dt.second

        self.data.drop(columns={'Data', 'Time'}, axis=1, inplace=True)
        self.data['risehour'] = self.data['TimeSunRise'].apply(lambda x: re.search(r'^\d+', x).group(0)).astype(int)
        self.data['riseminuter'] = self.data['TimeSunRise'].apply(lambda x: re.search(r'(?<=\:)\d+(?=\:)', x).group(0)).astype(int)
        self.data['sethour'] = self.data['TimeSunSet'].apply(lambda x: re.search(r'^\d+', x).group(0)).astype(int)
        self.data['setminute'] = self.data['TimeSunSet'].apply(lambda x: re.search(r'(?<=\:)\d+(?=\:)', x).group(0)).astype(int)
        self.data.drop(['UNIXTime', 'TimeSunRise', 'TimeSunSet'], axis=1, inplace=True)

        self.input_features = self.data.drop('Radiation', axis=1)
        self.target_features = self.data['Radiation']

        # Feature selection and transformation
        bestfeatures = SelectKBest(score_func=chi2, k=10)
        le = LabelEncoder()
        train_y = le.fit_transform(self.target_features)
        target_cont = df['Radiation'].apply(lambda x: int(x * 100))
        scaled_input_features = MinMaxScaler().fit_transform(self.input_features)
        bestfeatures.fit(scaled_input_features, target_cont)

        # Transformation of certain features
        features_to_transform = ['Temperature', 'Pressure', 'Humidity', 'Speed', 'WindDirection(Degrees)']
        transform = {
            'Temperature': (self.input_features['Temperature'] + 1).transform(np.log),
            'Pressure': stats.boxcox(self.input_features['Pressure'] + 1)[0],
            'Humidity': stats.boxcox(self.input_features['Humidity'] + 1)[0],
            'Speed': (self.input_features['Speed'] + 1).transform(np.log),
            'WindDirection(Degrees)': MinMaxScaler().fit_transform(
                np.array(self.input_features['WindDirection(Degrees)']).reshape(-1, 1))
        }
        for i in transform:
            self.input_features[i] = transform[i]

        # Split data
        self.xtrain, self.xtest, self.ytrain, self.ytest = train_test_split(
            self.input_features, self.target_features, test_size=0.2, random_state=1)

        # Scale data
        self.scaler = StandardScaler()
        self.xtrain = self.scaler.fit_transform(self.xtrain)
        self.xtest = self.scaler.transform(self.xtest)

    def predict(self,input_data=None):
        # Train model and make predictions
        params = {'learning_rate': 0.1, 'max_depth': 8}
        self.model = XGBRegressor(**params)
        self.model.fit(self.xtrain, self.ytrain)
        if input_data is None:
            y_pred = self.model.predict(self.xtest)
        else:
            y_pred = self.model.predict(input_data)

        print(f"xtest: \n {self.xtest}")

        y_pred = self.model.predict(self.xtest)

        print(f"y_pred:\n{y_pred}")

        rmse = np.sqrt(mean_squared_error(self.ytest, y_pred))
        r2 = r2_score(self.ytest, y_pred)

        return y_pred

    def calculate(self, area, irradiance, efficiency, hours_per_day=5, days_per_year=365):
        # Calculate CO2 reduction
        emission_factor_coal = 0.9  # kg CO2 per kWh for coal-fired power plant
        emission_factor_solar = 0.0  # Solar plants produce no direct CO2 emissions

        power_watts = area * irradiance * efficiency
        power_kilowatts = power_watts / 1000
        energy_produced_kwh = power_kilowatts * hours_per_day * days_per_year
        co2_reduction_kg = energy_produced_kwh * (emission_factor_coal - emission_factor_solar)
        co2_reduction_tonnes = co2_reduction_kg / 1000

        return co2_reduction_tonnes
    def predict_external_input(self, temperature, pressure, humidity, speed, wind_direction, month, day, hour, minute, second, risehour, riseminute, sethour, setminute):
        # Prepare the input data in the correct format
        external_input = pd.DataFrame({
            'Temperature': [(temperature + 1)],
            'Pressure': [pressure],
            'Humidity': [humidity],
            'Speed': [(speed + 1)],
            'WindDirection(Degrees)': [wind_direction],
            'Month': [month],
            'Day': [day],
            'Hour': [hour],
            'Minute': [minute],
            'Second': [second],
            'risehour': [risehour],
            'riseminuter': [riseminute],
            'sethour': [sethour],
            'setminute': [setminute]
        })

        # Apply the transformations
        external_input['Temperature'] = np.log(external_input['Temperature'])
        external_input['Pressure'] = np.log(external_input['Pressure'] + 1)  # Use log instead of Box-Cox
        external_input['Humidity'] = np.log(external_input['Humidity'] + 1)  # Use log instead of Box-Cox
        external_input['Speed'] = np.log(external_input['Speed'])
        external_input['WindDirection(Degrees)'] = MinMaxScaler().fit_transform(
            np.array(external_input['WindDirection(Degrees)']).reshape(-1, 1)
        )
        # Ensure the column order matches the original training data
        external_input = external_input[self.input_features.columns]

        # Scale the input
        external_input_scaled = self.scaler.transform(external_input)

        # Predict Radiation
        predicted_radiation = self.predict(input_data=external_input_scaled)
        return predicted_radiation[0]