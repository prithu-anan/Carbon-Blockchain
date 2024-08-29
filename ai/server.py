from flask import Flask, request, jsonify
import google.generativeai as genai

# Configure the Google Generative AI API
genai.configure(api_key="AIzaSyD4L8M4UWOadPU13eJ6nhaY7hDhvnBFWaw")

app = Flask(__name__)

@app.route('/predict', methods=['POST'])

def predict_co2_reduction():

    print('route hit')

    data = request.get_json()

    return jsonify(data['address'])

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