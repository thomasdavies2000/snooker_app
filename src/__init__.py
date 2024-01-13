# src/__init__.py


from flask import Flask, jsonify
from flask_restx import Resource, Api
from model.helpers.processing import get_birdseye_view
# instantiate the app
app = Flask(__name__)

api = Api(app)

# set config
app.config.from_object('src.config.DevelopmentConfig')  # new


class Ping(Resource):
    def get(self):
        get_birdseye_view("model/images_to_detect/chin.jpg", "model/saved_model")
        return {
            'status': 'success',
            'message': 'ponggg!'
        }


api.add_resource(Ping, '/ping')