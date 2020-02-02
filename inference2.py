# script to run inference on input image and model paths

import tensorflow as tf
import numpy as np
from PIL import Image
import sys

# show an image and run inference
def inference(img):
    classes = ['Apple Braeburn','Apple Crimson Snow','Apple Golden 1','Apple Golden 2','Apple Golden 3','Apple Granny Smith','Apple Pink Lady','Apple Red 1','Apple Red 2','Apple Red 3','Apple Red Delicious','Apple Red Yellow 1','Apple Red Yellow 2','Apricot','Avocado','Avocado ripe','Banana','Banana Lady Finger','Banana Red','Beetroot','Blueberry','broccoli','Cactus fruit','Cantaloupe 1','Cantaloupe 2','Carambula','Cauliflower','cheese','Cherry 1','Cherry 2','Cherry Rainier','Cherry Wax Black','Cherry Wax Red','Cherry Wax Yellow','Chestnut','chicken','Clementine','Cocos','Dates','Eggplant','eggs','Ginger Root','Granadilla','Grape Blue','Grape Pink','Grape White','Grape White 2','Grape White 3','Grape White 4','Grapefruit Pink','Grapefruit White','Guava','Hazelnut','Huckleberry','Kaki','Kiwi','Kohlrabi','Kumquats','Lemon','Lemon Meyer','Limes','Lychee','Mandarine','Mango','Mango Red','Mangostan','Maracuja','Melon Piel de Sapo','Mulberry','Nectarine','Nectarine Flat','Nut Forest','Nut Pecan','Onion Red','Onion Red Peeled','Onion White','Orange','Papaya','Passion Fruit','pasta','Peach','Peach 2','Peach Flat','Pear','Pear Abate','Pear Forelle','Pear Kaiser','Pear Monster','Pear Red','Pear Williams','Pepino','Pepper Green','Pepper Red','Pepper Yellow','Physalis','Physalis with Husk','Pineapple','Pineapple Mini','Pitahaya Red','Plum','Plum 2','Plum 3','Pomegranate','Pomelo Sweetie','Potato Red','Potato Red Washed','Potato Sweet','Potato White','Quince', 'Rambutan','Raspberry','Redcurrant','rice','Salak','salt','Strawberry','Strawberry Wedge','Tamarillo','Tangelo','Tomato 1','Tomato 2','Tomato 3','Tomato 4','Tomato Cherry Red','Tomato Maroon','Tomato Yellow','Walnut']

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