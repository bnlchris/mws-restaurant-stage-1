// Install Service Worker
self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open('myCache')
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Array for files to be cached
let urlsToCache = [
    '/',
    '/restaurant.html',
    '/css/styles.css',
    '/data/restaurants.json',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg',
    '/js/main.js',
    '/js/restaurant_info.js',
    '/js/dbhelper.js',
];

// Service Worker should return requests with cache, otherwise fetch data from network
self.addEventListener('fetch', function(event) {
    // prevent default fetch event
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // if request URL in cache, use it
                if (response) {
                    console.log('URL used from cache')
                    return response;
                }
                // if not, fetch from network
                else {
                    console.log('URL not in cache, have to fetch')
                    
                    // Since request is a stream it has to be cloned
                    let fetchRequest = event.request.clone();
                    return fetch(fetchRequest).then(
                        // add new fetch to cache
                        function(response) {
                            // is response valid
                            if(!response || response.status !== 200 || response.type !== 'basic') {
                                return response;
                            }

                            // response is a stream as well and needs to be consumed by the cache as well as the browser. It has to be cloned
                            let responseToCache = response.clone();

                            caches.open('myCache')
                            .then(function(cache) {
                                cache.put(event.request, responseToCache);
                            })
                            return response;
                        }
                    )
                }
            })
        )
})