from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/predict', methods=['POST'])

def predict_co2_reduction():

    print('route hit')

    data = request.get_json()

    return jsonify(data['address'])

if __name__ == '__main__':
    app.run(debug=True,port=8000)