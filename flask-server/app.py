import os
import json
import numpy as np
import pickle
import requests
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Get the API keys from environment variables
APP_ID = os.getenv('APP_ID')
APP_KEY = os.getenv('APP_KEY')

if not APP_ID or not APP_KEY:
    raise ValueError("Missing APP_ID or APP_KEY environment variables")

app = Flask(__name__)
CORS(app)

# Load the mode, scaler, and svd
with open('model.pkl', 'rb') as file:
    model = pickle.load(file)

with open('scaler.pkl', 'rb') as file:
    scaler = pickle.load(file)

with open('svd.pkl', 'rb') as file:
    svd = pickle.load(file)

# Define risk categories dictionary
risk_categories = {
    'Diabetes': 1,
    'Cholesterol': 2,
    'Hypertension': 3,
    'Osteoarthritis': 4,
    'Kidney Disease': 5,
    'Liver Disease': 6,
    'Heart Disease': 7
}

@app.route('/')
def index():
    return "Welcome to the Cooktrition API!"
"""
@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()

    try:
        risk_category = int(data['risk_category'])
        dietary_preference = data['dietary_preference']

        # Prepare dummy input features as example, modify this part according to your needs
        new_recipe_features = np.array([[220, 1.5, 5, 0, 10, 400, 300, 200, 2, 400, 50]])
        new_recipe_features_scaled = scaler.transform(new_recipe_features)
        new_recipe_features_svd = svd.transform(new_recipe_features_scaled)

        # Make prediction
        prediction = model.predict(new_recipe_features_svd)
        predicted_category = list(risk_categories.keys())[list(risk_categories.values()).index(risk_category)]

        # Fetch recipes from external API based on predicted category and dietary preference
        api_url = f"https://api.edamam.com/search?q={risk_category}+{dietary_preference}&app_id={APP_ID}&app_key={APP_KEY}"
        print(f"Requesting API: {api_url}")
        response = requests.get(api_url)
        print(f"API Response status code: {response.status_code}")
        if response.status_code != 200:
            print(f"Error: Received status code {response.status_code} from Edamam API")
            print("Response content:", response.content)
            raise Exception("Error fetching data from external API")

        recipes = response.json().get('hits', [])

        # Format the recommendations
        recommendations = [{
            "recipe_name": recipe['recipe']['label'],
            "image": recipe['recipe']['image'],
            "dietary_preference": dietary_preference,
            "risk_category": predicted_category
        } for recipe in recipes]

        return jsonify({"predictions": recommendations})

    except Exception as e:
        print("Error:", str(e))
        return jsonify({"error": str(e)})
"""
""""
@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()

    try:
        risk_category = int(data['risk_category'])
        dietary_preference = data['dietary_preference']

        # Fetch recipes from external API based on predicted category and dietary preference
        api_url = f"https://api.edamam.com/search?q={risk_category}+{dietary_preference}&app_id={APP_ID}&app_key={APP_KEY}"
        print(f"Requesting API: {api_url}")
        response = requests.get(api_url)
        print(f"API Response status code: {response.status_code}")
        if response.status_code != 200:
            print(f"Error: Received status code {response.status_code} from Edamam API")
            print("Response content:", response.content)
            raise Exception("Error fetching data from external API")

        recipes = response.json().get('hits', [])

        # Format the recommendations
        recommendations = []
        for recipe in recipes:
            recipe_data = recipe['recipe']
            recipe_name = recipe_data.get('label', 'Unknown Recipe')
            recipe_image = recipe_data.get('image', '')
            recipe_ingredients = recipe_data.get('ingredientLines', [])
            recommendations.append({
                "recipe_name": recipe_name,
                "image": recipe_image,
                "ingredients": recipe_ingredients,
                "dietary_preference": dietary_preference,
                "risk_category": risk_category
            })

        return jsonify({"predictions": recommendations})

    except Exception as e:
        print("Error:", str(e))
        return jsonify({"error": str(e)})

"""
"""
@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()

    try:
        risk_category = int(data['risk_category'])
        dietary_preference = data['dietary_preference']

        # Fetch recipes from external API based on predicted category and dietary preference
        api_url = f"https://api.edamam.com/search?q={risk_category}+{dietary_preference}&app_id={APP_ID}&app_key={APP_KEY}"
        print(f"Requesting API: {api_url}")
        response = requests.get(api_url)
        print(f"API Response status code: {response.status_code}")
        if response.status_code != 200:
            print(f"Error: Received status code {response.status_code} from Edamam API")
            print("Response content:", response.content)
            raise Exception("Error fetching data from external API")

        recipes = response.json().get('hits', [])

        # Format the recommendations
        recommendations = []
        for recipe in recipes:
            recipe_data = recipe['recipe']
            recipe_label = recipe_data.get('label', 'Unknown Recipe')
            recipe_image = recipe_data.get('image', '')
           # recipe_yield = recipe_yield.get('yield')
            #recipe_source = recipe_source.get('source')
            recipe_ingredients = recipe_data.get('ingredients', [])
            recommendations.append({
                "recipe_name": recipe_label,
                "image": recipe_image,
                "ingredients": recipe_ingredients,
                #"yield" : recipe_yield,
               # "recipe_source" : recipe_source,
                "dietary_preference": dietary_preference,
                "risk_category": risk_category
            })

        return jsonify({"predictions": recommendations})

    except Exception as e:
        print("Error:", str(e))
        return jsonify({"error": str(e)})

"""

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()

    try:
        risk_category = int(data['risk_category'])
        dietary_preference = data['dietary_preference']

        # Fetch recipes from external API based on predicted category and dietary preference
        api_url = f"https://api.edamam.com/search?q={risk_category}+{dietary_preference}&app_id={APP_ID}&app_key={APP_KEY}"
        print(f"Requesting API: {api_url}")
        response = requests.get(api_url)
        print(f"API Response status code: {response.status_code}")
        if response.status_code != 200:
            print(f"Error: Received status code {response.status_code} from Edamam API")
            print("Response content:", response.content)
            raise Exception("Error fetching data from external API")

        recipes = response.json().get('hits', [])

        # Format the recommendations
        recommendations = []
        for recipe in recipes:
            recipe_data = recipe['recipe']
            recipe_label = recipe_data.get('label', 'Unknown Recipe')
            recipe_image = recipe_data.get('image', '')
            recipe_source = recipe_data.get('source', 'Unknown Source')
            recipe_ingredients = recipe_data.get('ingredients', [])
            recipe_calories = recipe_data.get('calories', 'N/A')
            recipe_yield = recipe_data.get('yield', 'N/A')
            recipe_url = recipe_data.get('url', 'N/A')
            recipe_nutrients = recipe_data.get('totalNutrients', {})
            recommendations.append({
                "recipe_name": recipe_label,
                "image": recipe_image,
                "recipe_source": recipe_source,
                "ingredients": recipe_ingredients,
                "calories": recipe_calories,
                "yield": recipe_yield,
                "url" : recipe_url,
                "totalNutrients": recipe_nutrients,
                "dietary_preference": dietary_preference,
                "risk_category": risk_category
            })

        return jsonify({"predictions": recommendations})

    except Exception as e:
        print("Error:", str(e))
        return jsonify({"error": str(e)})


if __name__ == '__main__':
    app.run(debug=True, port=5000)
