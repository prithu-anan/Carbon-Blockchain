import numpy as np
import pandas as pd
import re
from scipy import stats
from sklearn.preprocessing import StandardScaler, MinMaxScaler, LabelEncoder
from sklearn.feature_selection import SelectKBest
from sklearn.feature_selection import chi2
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score
from xgboost import XGBRegressor
import matplotlib.pyplot as plt
import seaborn as sns


class Model:
    def __init__(self):
        self.data = None
        self.input_features = None
        self.target_features = None
        self.model = None
        self.scaler = None

    def initialize(self):
        # Step 1: Data Loading and Cleaning
        self.data = pd.read_csv('SolarPrediction.csv')
        
        self.data['Data'] = self.data['Data'].apply(lambda x: x.split()[0])
        self.data['Month'] = pd.to_datetime(self.data['Data']).dt.month
        self.data['Day'] = pd.to_datetime(self.data['Data']).dt.day
        self.data['Hour'] = pd.to_datetime(self.data['Time']).dt.hour
        self.data['Minute'] = pd.to_datetime(self.data['Time']).dt.minute
        self.data['Second'] = pd.to_datetime(self.data['Time']).dt.second

        self.data['risehour'] = self.data['TimeSunRise'].apply(lambda x: re.search(r'^\d+', x).group(0)).astype(int)
        self.data['riseminuter'] = self.data['TimeSunRise'].apply(lambda x: re.search(r'(?<=\:)\d+(?=\:)', x).group(0)).astype(int)
        self.data['sethour'] = self.data['TimeSunSet'].apply(lambda x: re.search(r'^\d+', x).group(0)).astype(int)
        self.data['setminute'] = self.data['TimeSunSet'].apply(lambda x: re.search(r'(?<=\:)\d+(?=\:)', x).group(0)).astype(int)

        self.data.drop(['UNIXTime', 'TimeSunRise', 'TimeSunSet', 'Data', 'Time'], axis=1, inplace=True)

        # Step 2: Feature and Target Selection
        self.input_features = self.data.drop('Radiation', axis=1)
        self.target_features = self.data['Radiation']

        # Step 3: Feature Scaling and Transformation
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

        # Feature Selection
        scaled_input_features = MinMaxScaler().fit_transform(self.input_features)
        bestfeatures = SelectKBest(score_func=chi2, k=10)
        fit = bestfeatures.fit(scaled_input_features, self.target_features)
        scores = pd.DataFrame(fit.scores_)
        column = pd.DataFrame(self.input_features.columns)
        feature_scores = pd.concat([column, scores], axis=1)
        feature_scores.columns = ['Features', 'Feature_imp']
        feature_scores.sort_values(by='Feature_imp', ascending=False, inplace=True)

        # Plot Feature Importance (Optional)
        plt.figure(figsize=(10, 8))
        feature_scores.plot.bar(x='Features', y='Feature_imp')
        plt.xticks(rotation=70)
        plt.title("Feature Importance Using SelectKBest")
        plt.show()

    def predict(self):
        # Step 4: Model Training and Prediction
        xtrain, xtest, ytrain, ytest = train_test_split(self.input_features, self.target_features, test_size=0.2, random_state=1)

        self.scaler = StandardScaler()
        xtrain = self.scaler.fit_transform(xtrain)
        xtest = self.scaler.transform(xtest)

        params = {
            'learning_rate': 0.1,
            'max_depth': 8
        }

        self.model = XGBRegressor(**params)
        self.model.fit(xtrain, ytrain)

        y_pred = self.model.predict(xtest)
        rmse = np.sqrt(mean_squared_error(ytest, y_pred))
        r2 = r2_score(ytest, y_pred)

        print("Testing performance")
        print("RMSE: {:.2f}".format(rmse))
        print("R2: {:.2f}".format(r2))

        return y_pred

    def calculate(self, area, irradiance, efficiency, hours_per_day=5, days_per_year=365):
        """
        Calculate the CO2 reduction achieved by a solar plant compared to a coal-fired power plant.

        Parameters:
        area (float): Area of the solar panels in square meters (m²).
        irradiance (float): Solar irradiance in watts per square meter (W/m²).
        efficiency (float): Efficiency of the solar panels (a value between 0 and 1).
        hours_per_day (float): Average hours of sunlight per day (default is 5 hours).
        days_per_year (float): Number of days in a year (default is 365 days).

        Returns:
        float: CO2 reduction in tonnes (metric tons).
        """
        # Define constant emission factors
        emission_factor_coal = 0.9  # kg CO2 per kWh for coal-fired power plant
        emission_factor_solar = 0.0  # Solar plants produce no direct CO2 emissions

        # Calculate power output in watts
        power_watts = area * irradiance * efficiency

        # Convert power to kilowatts
        power_kilowatts = power_watts / 1000

        # Calculate energy produced per year in kWh
        energy_produced_kwh = power_kilowatts * hours_per_day * days_per_year

        # Calculate CO2 emissions avoided in kg CO2/year
        co2_reduction_kg = energy_produced_kwh * (emission_factor_coal - emission_factor_solar)

        # Convert CO2 reduction to tonnes (1 tonne = 1000 kg)
        co2_reduction_tonnes = co2_reduction_kg / 1000

        return co2_reduction_tonnes


model = Model()
model.initialize()  # Data scraping, target feature selection, etc.

# Predict the irradiance
predictions = model.predict()

# Calculate the CO2 reduction using the predicted irradiance
area = 1000  # in square meters (m²)
irradiance = 800  # in watts per square meter (W/m²)
efficiency = 0.18  # efficiency (18%)

co2_reduction = model.calculate(area, irradiance, efficiency)
print(f"CO2 reduction: {co2_reduction:.2f} tonnes")