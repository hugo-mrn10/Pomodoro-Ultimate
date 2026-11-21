const CACHE_NAME = "pomodoro-ultimate-v1795285780";
const REMOTE_BG_CACHE = "pomodoro-remote-bg-v1";
const MAX_REMOTE_BGS = 8;

const STATIC_ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./fonts/font-02.woff2",
  "./fonts/font-11.woff2",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k !== CACHE_NAME && k !== REMOTE_BG_CACHE)
          .map((k) => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

async function cacheRemoteImage(request, response) {
  if (!response || (!response.ok && response.type !== "opaque")) return;
  try {
    const cache = await caches.open(REMOTE_BG_CACHE);
    await cache.put(request, response.clone());
    const keys = await cache.keys();
    if (keys.length > MAX_REMOTE_BGS) {
      const excess = keys.slice(0, keys.length - MAX_REMOTE_BGS);
      await Promise.all(excess.map((req) => cache.delete(req)));
    }
  } catch (e) {}
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Cache FIFO dédié pour les paysages distants (Wikimedia / Bing)
  const isRemoteImage =
    url.origin !== self.location.origin &&
    (req.destination === "image" ||
      url.hostname.includes("wikimedia.org") ||
      url.hostname.includes("bing.com"));

  if (isRemoteImage) {
    event.respondWith(
      caches.open(REMOTE_BG_CACHE).then(async (cache) => {
        const cached = await cache.match(req);
        if (cached) return cached;
        try {
          const networkRes = await fetch(req);
          event.waitUntil(cacheRemoteImage(req, networkRes));
          return networkRes;
        } catch (err) {
          const keys = await cache.keys();
          if (keys.length) return cache.match(keys[keys.length - 1]);
          throw err;
        }
      })
    );
    return;
  }

  // Ressources locales de l'application (Cache First + mise à jour réseau)
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) return cached;
        return fetch(req).then((networkRes) => {
          if (networkRes && networkRes.ok) {
            const copy = networkRes.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          }
          return networkRes;
        });
      })
    );
  }
});
