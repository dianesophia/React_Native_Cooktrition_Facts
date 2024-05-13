import json
import numpy as np
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import StratifiedKFold
from sklearn.decomposition import TruncatedSVD
from imblearn.over_sampling import RandomOverSampler  # Import RandomOverSampler for handling class imbalance
import requests

# Load the new dataset from the provided link
url = "https://raw.githubusercontent.com/dianesophia/Cooktrition_Facts-Dataset/main/Dataset.json"
response = requests.get(url)

try:
    data = response.json()
except json.decoder.JSONDecodeError as e:
    print("JSONDecodeError:", e)
    print("Failed to parse JSON. Please check the data format or URL.")
    exit()

# Extract features and labels for each risk category
risk_categories = {
    'Diabetes': 1,
    'Cholesterol': 2,
    'Hypertension': 3,
    'Osteoarthritis': 4,
    'Kidney Disease': 5,
    'Liver Disease': 6,
    'Heart Disease': 7
}

X = []
y = []

for category, label in risk_categories.items():
    X_category = []
    for recipe in data:
        if recipe['Risk Category'] == category:
            X_category.append([recipe['Calories per serving'],
                                recipe['Saturated Fat (g) per serving'],
                                recipe['Fiber (g) per serving'],
                                recipe['Trans Fat (g) per serving'],
                                recipe['Cholesterol (mg) per serving'],
                                recipe['Potassium (mg) per serving'],
                                recipe['Calcium (mg) per serving'],
                                recipe['Phosphorus (mg) per serving'],
                                recipe['Iron (mg) per serving'],
                                recipe['Vitamin D (IU) per serving'],
                                recipe['Folate (mcg) per serving']])
            y.append(label)
    X.extend(X_category)

X = np.array(X)
y = np.array(y)

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Apply data preprocessing
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Apply matrix factorization using Truncated SVD
svd = TruncatedSVD(n_components=10)
X_train_svd = svd.fit_transform(X_train_scaled)
X_test_svd = svd.transform(X_test_scaled)

# Apply oversampling to handle class imbalance
oversampler = RandomOverSampler(random_state=42)
X_train_resampled, y_train_resampled = oversampler.fit_resample(X_train_svd, y_train)

# Define parameter grid for hyperparameter tuning
param_grid = {
    'n_estimators': [100, 200, 300],
    'max_depth': [10, 20, 30],
    'min_samples_split': [5, 10, 15]
}

# Define the cross-validation strategy
cv_strategy = StratifiedKFold(n_splits=5)

# Perform grid search with cross-validation
grid_search = GridSearchCV(RandomForestClassifier(random_state=42), param_grid, cv=cv_strategy, n_jobs=-1)
grid_search.fit(X_train_resampled, y_train_resampled)

# Evaluate the best model
best_model = grid_search.best_estimator_
y_pred = best_model.predict(X_test_svd)
accuracy = accuracy_score(y_test, y_pred)
print("Model Accuracy:", accuracy)
print("Best Parameters:", grid_search.best_params_)
print("Classification Report:")
print(classification_report(y_test, y_pred, zero_division=0))

# Prompt user to choose risk category
print("Choose your risk category:")
for category, label in risk_categories.items():
    print(f"{label}. {category}")

user_input = input("Enter the number corresponding to your risk category: ")

try:
    user_category = int(user_input)
    if user_category in risk_categories.values():
        risk_category_name = next(key for key, value in risk_categories.items() if value == user_category)

        # Prompt user to choose dietary preference
        print("Choose your dietary preference:")
        dietary_preferences = {
            'Vegan': 1,
            'Vegetarian': 2,
            'Pescatarian': 3,
            'Eat everything': 4
        }
        for preference, label in dietary_preferences.items():
            print(f"{label}. {preference}")

        user_input = input("Enter the number corresponding to your dietary preference: ")

        user_preference = int(user_input)
        if 1 <= user_preference <= 4:
            dietary_preference = list(dietary_preferences.keys())[user_preference - 1]

            # Use the trained model to recommend a recipe
            new_recipe_features = np.array([[220, 1.5, 5, 0, 10, 400, 300, 200, 2, 400, 50]])
            new_recipe_features_scaled = scaler.transform(new_recipe_features)

            print(f"Recommended recipe(s) for a {dietary_preference} person with {risk_category_name}:")
            app_id = "e5d24714"
            app_key = "e6e405f1dfc8c0a4ecfdfa24dc5d91b3"
            url = f"https://api.edamam.com/search?q={risk_category_name}+{dietary_preference}&app_id={app_id}&app_key={app_key}"
            response = requests.get(url)
            recipes = response.json().get('hits', [])
            for i, recipe in enumerate(recipes[:15], 1):
                print(f"{i}. Recipe Name:", recipe['recipe']['label'])
        else:
            print("Invalid dietary preference number. Please enter a number between 1 and 4.")
    else:
        print("Invalid risk category number. Please enter a number between 1 and 7.")
except ValueError:
    print("Invalid input. Please enter a valid number.")