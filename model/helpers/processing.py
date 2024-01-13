import tensorflow as tf
import time
import numpy as np
import warnings
import cv2
warnings.filterwarnings('ignore')
from PIL import Image
from matplotlib.patches import Circle

from model.object_detection.utils import label_map_util
from model.object_detection.utils import visualization_utils as viz_utils
from model.helpers.Positions import Positions, Ball
import matplotlib
# matplotlib.use('TkAgg')

def load_image_into_numpy_array(path):

    return np.array(Image.open(path))


def process_image(image_path, model):
    "Detects objects in an image and returns data about them."
    PATH_TO_SAVED_MODEL = model
    print('Loading model...', end='')
    detect_fn=tf.saved_model.load(PATH_TO_SAVED_MODEL)
    print('Done!')


    image_np = load_image_into_numpy_array(image_path)

    # The input needs to be a tensor, convert it using `tf.convert_to_tensor`.
    input_tensor = tf.convert_to_tensor(image_np)
    # The model expects a batch of images, so add an axis with `tf.newaxis`.
    input_tensor = input_tensor[tf.newaxis, ...]

    detections = detect_fn(input_tensor)
    return image_np, detections

def process_detections(detections):
      num_detections = int(detections.pop('num_detections'))
      detections = {key: value[0, :num_detections].numpy()
                        for key, value in detections.items()}
      detections['num_detections'] = num_detections
      detections['detection_classes'] = detections['detection_classes'].astype(np.int64)
      return detections


def detection_coordinates(detections, image_np, category_index):
      positions = Positions()
      
      viz_utils.visualize_boxes_and_labels_on_image_array(
            image_np,
            detections['detection_boxes'],
            detections['detection_classes'],
            detections['detection_scores'],
            category_index,
            positions,
            use_normalized_coordinates=True,
            max_boxes_to_draw=200,
            min_score_thresh_ball=.2,
            min_score_thresh_pocket=0.2,
            # Adjust this value to set the minimum probability boxes to be classified as True
            agnostic_mode=False)
      return positions


def create_output_image(image_np, positions):
      matplotlib.pyplot.switch_backend('Agg') # Do not show image in window
      IMAGE_SIZE = (12, 8)
      img = matplotlib.image.imread('model/table/table.jpg')

      # Create a figure. Equal aspect so circles look circular
      fig,ax = matplotlib.pyplot.subplots(1)
      ax.set_aspect('equal')

      imgplot = matplotlib.pyplot.imshow(img)
      pocket_coords = [(40,60), (40, 1167), (2230, 60), (2230, 1167)]

      mtx = positions.initialTransform(pocket_coords)

      balls, colors = positions.separateBallsAndColors()

      original = np.array([tuple(balls)], dtype=np.float32)
      converted = cv2.perspectiveTransform(original, mtx)
      for ball in range(len(converted[0])):
            circ = Circle(converted[0][ball],15, color=colors[ball])
            ax.add_patch(circ)
      
      matplotlib.pyplot.savefig("output_image.png", bbox_inches="tight", pad_inches=0)

      

def get_birdseye_view(image, model):
    

    image_np, detections = process_image(image, model)

    detections = process_detections(detections)

    

    category_index=label_map_util.create_category_index_from_labelmap("model/labelmap/label_map.pbtxt",use_display_name=True)

    positions = detection_coordinates(detections, image_np, category_index)

    create_output_image(image_np, positions)