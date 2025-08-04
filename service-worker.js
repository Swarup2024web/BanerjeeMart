const CACHE_NAME = "swarup-academy-v1";

const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/books.html",
  "/notes.html",
  "/manifest.json",
  "/icon.png"
];

// Install event – cache files
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

// Activate event – clean up old caches
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keyList =>
      Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// Fetch event – serve from cache if available
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response =>
        response || fetch(event.request)
      )
  );
});
