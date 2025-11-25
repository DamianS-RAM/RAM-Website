import time
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"]) # Allows requests only from your React app’s origin.

@app.route('/api/time')
def get_current_time():
    return {"message": "Hello"}

#Cambios para prueba de deploy