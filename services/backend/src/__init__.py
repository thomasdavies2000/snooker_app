# src/__init__.py


from flask import Flask, jsonify
from flask_restx import Resource, Api
from model.helpers.processing import get_birdseye_view
from flask_cors import CORS  # new
import os
# instantiate the app
app = Flask(__name__)

api = Api(app)

cors = CORS()
# set config
app.config.from_object('src.config.DevelopmentConfig')  # new
cors.init_app(app, resources={r"*": {"origins": "*"}})  # new

class Ping(Resource):
    def get(self):
        output_directory = os.path.join(os.path.dirname(__file__), 'output')


        get_birdseye_view("model/images_to_detect/chin.jpg", "model/saved_model")
        
        

            # Check if the output directory exists
        if os.path.exists(output_directory) and os.path.isdir(output_directory):
            # List the files in the output directory
            files_in_output = os.listdir(output_directory)
            
            # Print the list of files
            print("Files in 'output' directory:")
            for file_name in files_in_output:
                print(file_name)
        else:
            print("The 'output' directory does not exist.")
            files_in_output = []
        return {
            'status': 'success',
            'message': 'pongggo!',
            
            'files_in_output_end': files_in_output

        }


api.add_resource(Ping, '/ping')