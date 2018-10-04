# Restaurant Review App - Stage 1

## Project Overview

For the **Restaurant Reviews** projects, you will incrementally convert a static webpage to a mobile-ready web application. In **Stage One**, you will take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. You will also add a service worker to begin the process of creating a seamless offline experience for your users.

### Specification

You have been provided the code for a restaurant reviews website. The code has a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. Your job is to update the code to resolve these issues while still maintaining the included functionality. 

### What did I do from here?

1. To run this project, I used Python to create a local server.

2. To utilize the free map, I registered on [Mapbox](https://www.mapbox.com/) and assigned my personal token to the JS code.

3. I used relative positions in order to make the website responsive. I also took advantage of flex box and set a viewport. Finally, I used a media query to change to design for mobile devices.

4. For enhanced accessibility I manually changed the tab index and created aria-labels.

5. In the end, I installed a Service Worker that loads relevant data to the cache to enable a positive offline experience. After loading the page once, the user would be able to see content even while being offline.

### Installation

1. Clone my repository by typing the following to your command line:

$ git clone https://github.com/bnlchris/mws-restaurant-stage-1.git

2. You should load this project on a local server. In order so do this, install [Python](https://www.python.org/) on your local machine.

3. Enter $ python -m http.server 8000 in your command line. Afterwards, open your browser and type localhost:8000.

4. You should see the project in your browser.

### Resources

[Udacity's Front-End Nandegree](https://eu.udacity.com/course/front-end-web-developer-nanodegree--nd001) provides all relevant information to be successful in this project. However, I got some extra help using additional guiding for handling the Service Worker on this page:

[Service Workers: an Introduction](https://developers.google.com/web/fundamentals/primers/service-workers/)