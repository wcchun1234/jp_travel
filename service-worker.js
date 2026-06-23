const CACHE_NAME = "tokyo-trip-v12-7-clean-version-labels";
const CACHE_PREFIX = "tokyo-trip-";
const MANUAL_CACHE_PREFIX = "tokyo-trip-manual-offline-pack";
const APP_SHELL = [
  "./",
  "./index.html",
  "./tokyo_itinerary.html",
  "./tokyo_itineray.html",
  "./offline.html",
  "./manifest.webmanifest",
  "./service-worker.js",
  "./sw.js",
  "./assets/css/style.css",
  "./assets/js/app.js",
  "./assets/icons/icon-180.png",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
  "./assets/icons/maskable-512.png",
  "./assets/offline/offline-data.json",
  "./assets/offline/hotel-akihabara.md",
  "./assets/offline/hotel-nihonbashi.md",
  "./assets/offline/airport-return.md",
  "./assets/offline/disneysea.md",
  "./assets/offline/emergency.md",
  "./assets/offline/map-notes.md",
  "./assets/offline/maps/akihabara-hotel-area.webp",
  "./assets/offline/maps/nihonbashi-hotel-area.webp",
  "./assets/offline/maps/narita-return-summary.webp",
  "./assets/offline/maps/disneysea-arrival-summary.webp"
];

self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      for (const asset of APP_SHELL) {
        try {
          await cache.add(asset);
        } catch (error) {
          console.warn("離線快取失敗：", asset, error);
        }
      }
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key =>
            key.startsWith(CACHE_PREFIX) &&
            key !== CACHE_NAME &&
            !key.startsWith(MANUAL_CACHE_PREFIX)
          )
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) {
    event.respondWith(fetch(event.request));
    return;
  }
  if (
    event.request.mode === "navigate" ||
    url.pathname.endsWith(".html") ||
    url.pathname.endsWith(".js") ||
    url.pathname.endsWith(".css") ||
    url.pathname.endsWith(".webmanifest")
  ) {
    event.respondWith(
      fetch(event.request).then(response => {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        }
        return response;
      }).catch(() =>
        caches.match(event.request, { ignoreSearch: true }).then(response => {
          if (response) return response;
          if (event.request.mode === "navigate") {
            return caches.match("./tokyo_itinerary.html").then(fallback => fallback || caches.match("./offline.html"));
          }
          return caches.match("./offline.html");
        })
      )
    );
    return;
  }
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then(cached =>
      cached || fetch(event.request).then(response => {
        if (!response || !response.ok) return response;
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        return response;
      }).catch(() => {
        if (event.request.mode === "navigate") {
          return caches.match("./tokyo_itinerary.html").then(response => response || caches.match("./offline.html"));
        }
        if (url.pathname.endsWith(".json")) {
          return caches.match("./assets/offline/offline-data.json");
        }
        if (url.pathname.endsWith(".md")) {
          return caches.match("./assets/offline/emergency.md");
        }
        return caches.match(event.request, { ignoreSearch: true });
      })
    )
  );
});
