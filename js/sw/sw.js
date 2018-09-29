console.log("Service Worker registered");

// Array for files to be cached
const filesToCache = [
	'/',
	'./restaurant.html',
    './css/styles.css',
    './js/main.js',
    './js/restaurant_info.js',
    './js/dbhelper.js',
    './data/restaurants.json',
    './img/1.jpg',
    './img/2.jpg',
    './img/3.jpg',
    './img/4.jpg',
    './img/5.jpg',
    './img/6.jpg',
    './img/7.jpg',
    './img/8.jpg',
    './img/9.jpg',
    './img/10.jpg',
];

// install Service Worker
self.addEventListener('install', function(event) {

    // wait until installation is done
    event.waitUntil(
        caches.open('myCache').then(function(cache) {
            return cache.addAll(filesToCache);
        })
    )
})