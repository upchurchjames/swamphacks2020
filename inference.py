# script to run inference on input image and model paths

import tensorflow as tf
import matplotlib.image as mpimg
import matplotlib.pyplot as plt
import matplotlib
import numpy as np
from PIL import Image
import sys

# show an image and run inference
def inference(img):
    classes = ["broccoli","cheese","chicken","eggs","pasta","rice","salt"]
    # run model for prediction
    class_indx = model.predict_classes(img)
    # get class label
    class_label = classes[class_indx[0]]
    return class_label

# pre-process input image
def preprocessing(img_path):
    img = Image.open(img_path)    
    img = img.resize((150, 150), Image.ANTIALIAS)
    img = np.expand_dims(img, 0)
    img = tf.cast(img, tf.float32)
    return img

if __name__ == "__main__":
    
    # parse inputs
    img_path = sys.argv[1]
    model_path = sys.argv[2]

    # read and resize image
    img = preprocessing(img_path)
    
    # load model
    model = tf.keras.models.load_model(model_path)

    # run inference
    class_label = inference(img)

    # print confidence values
    print(class_label)