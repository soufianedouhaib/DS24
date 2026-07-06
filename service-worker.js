/* ============ DS24 SERVICE WORKER ============ */
/* Bump this version string whenever site files change, so old caches get cleared */
const CACHE_NAME = "ds24-cache-v1";

const APP_SHELL = [
  "./",
  "./index.html",
  "./article.html",
  "./politique.html",
  "./economie.html",
  "./societe.html",
  "./sport.html",
  "./regions.html",
  "./culture.html",
  "./sante.html",
  "./tech.html",
  "./about.html",
  "./contact.html",
  "./team.html",
  "./style.css",
  "./app.js",
  "./data-core.js",
  "./data-articles-1.js",
  "./data-articles-2.js",
  "./data-articles-3.js",
  "./logo-icon.svg",
  "./logo-horizontal-reveal.gif",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

// Install: pre-cache the app shell so the site works offline immediately after first visit
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

// Activate: clear out old cache versions
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: try the network first (so visitors get fresh news when online),
// fall back to cache if offline
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
