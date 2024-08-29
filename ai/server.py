from flask import Flask, request, jsonify
import google.generativeai as genai
from carbonoffsetcount import PredictionModel
from flask_cors import CORS

# Configure the Google Generative AI API
genai.configure(api_key="AIzaSyD4L8M4UWOadPU13eJ6nhaY7hDhvnBFWaw")



app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

@app.route('/predict', methods=['POST'])

def predict_co2_reduction():

        # Example usage
    model = PredictionModel()

    # Initialize (data scraping, feature selection, etc.)
    model.initialize()

    try:
        # Extract data from the JSON request
        data = request.json
        temperature = data['temperature']
        pressure = data['pressure']
        humidity = data['humidity']
        speed = data['speed']
        wind_direction = data['wind_direction']
        month = data['month']
        day = data['day']
        hour = data['hour']
        minute = data['minute']
        second = data['second']
        risehour = data['risehour']
        riseminute = data['riseminute']
        sethour = data['sethour']
        setminute = data['setminute']
        area = data['area']
        efficiency = data['efficiency']

        # Call the predict_external_input function with extracted data
        irradiance = model.predict_external_input(
            temperature=temperature,
            pressure=pressure,
            humidity=humidity,
            speed=speed,
            wind_direction=wind_direction,
            month=month,
            day=day,
            hour=hour,
            minute=minute,
            second=second,
            risehour=risehour,
            riseminute=riseminute,
            sethour=sethour,
            setminute=setminute
        )

        co2_reduction = model.calculate(area, irradiance, efficiency)

        # Return the prediction result as a JSON response
        return jsonify(co2_reduction)

    except KeyError as e:
        return jsonify({"error": f"Missing key: {str(e)}"})
    except Exception as e:
        return jsonify({"error": str(e)})

@app.route('/summary',methods=['GET'])

def summarize_text_file():
    # Read the content of the text file
    file_path = 'report.txt'

    with open(file_path, 'r') as file:
        file_content = file.read()
    
    # Choose a Gemini model
    model = genai.GenerativeModel(model_name="gemini-1.5-flash")
    
    # Generate a summary
    response = model.generate_content([file_content, "Can you summarize this document as a bulleted list?"])
    
    return jsonify(response.text)

if __name__ == '__main__':
    app.run(debug=True,port=8000)