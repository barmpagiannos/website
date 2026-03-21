from flask import Flask, send_from_directory
import os

app = Flask(__name__)

# Σερβίρουμε τα αρχεία από τον τρέχοντα φάκελο
@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/<path:path>')
def static_files(path):
    return send_from_directory('.', path)

if __name__ == '__main__':
    print("Server running at http://127.0.0.1:5000")
    app.run(debug=True, port=5000)
