# swamphacks2020

Inspiration

According to the New York Times, The United States wastes more than $160 billion in food each year. We want to help people, especially busy college students, to make the most of what's in their pantry. Food often goes bad when we can't match recipes to the smattering of ingredients in our kitchens. We aim to help people find recipes for the often random assortment of food in their pantry, reduce waste, and ultimately help everyone's dollar go farther.

What We Made

We created a single-page web application that ingests multiple user-input images of food items, creates a list of ingredients from the images using a convolutional neural network (CNN) classifier, and then provides that information to an API that returns recipe suggestions to the user. User-uploaded photos are stored in our MongoDB database.

Build Process

RecipEasy was built with a React.js front-end and Node.js + Express.js back-end. Bootstrap was also used in our front-end development (HTML, CSS, React.js) to make our design layout simple and clean. With our user-input images, we run a custom CNN using Python and TensorFlow that was trained on 127 common food items. The network is hosted on our server, which calls an API that translates the listed ingredients into recipes. Recipes are then displayed to users within the same web-page. Our application has been converted into a Docker image, meaning that our solution is easily accessible and readily available to interested users.

Challenges

Issues working with the TensorFlow Object Detection API - we moved to an image-based classifier instead. Implementing an API into our project was tricky as well since we didn't have much experience. React.js, file and code structure/best practices, as well as working with a back-end was new to half of us, so there was a lot of constant learning and questioning as the project was getting developed.

Accomplishments

First-time events: training and deploying a TensorFlow classifier. We're proud of building a functional web application with many different functional aspects - full-stack web development, implementing a database, connecting an API, applying deep-learning to a computer vision problem, web scraping, and Dockerizing our project.

Lessons Learned

A lot was learned involving building, training, and running CNNs in TensorFlow. Docker was new to most of us as well as some of the web technologies we used, which we now have a solid grasp of for the future.

What's Next

We would, most importantly, go back to clean up some of the code and ensure that we're following best practices to help make development easier and more organized.

There are many ways that we could continue to grow RecipEasy. We would be interested in replacing our CNN classifier with a CNN-based object detector, which would be more powerful and convenient to the end-user. We'd like to clean up the back-end (possibly deploy it to a Google Cloud project), improve on the website's design, test on mobile devices with different display resolutions, allow the option to sort and filter recipes e.g. cheapest to match or vegetarian/vegan equivalents. We'd also like to turn the project into a mobile app with easy recipe-export options and allow users to create accounts and save favorite recipes.
