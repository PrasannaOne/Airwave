/* AIRWAVE · SERVICE WORKER
 * Silent PWA updates + offline app shell and station catalogue.
 * Radio streams are never cached or interrupted by an update.
 */
"use strict";

const CACHE_NAME = "airwave-pwa-v2";
const CACHE_PREFIX = "airwave-pwa-";
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./apple-touch-icon.png"
];
const CATALOGUE_URL = new URL("./stations.json.gz", self.registration.scope).href;

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);

    // Cache the core app shell. A missing optional icon must not block updates.
    await Promise.all(APP_SHELL.map(async (path) => {
      const url = new URL(path, self.registration.scope).href;
      try {
        const response = await fetch(new Request(url, { cache: "reload" }));
        if (response.ok && response.type === "basic") {
          await cache.put(url, response);
        }
      } catch (error) {
        console.warn("Airwave app-shell cache skipped:", path, error);
      }
    }));

    // The catalogue is optional during installation and refreshes when requested.
    try {
      const response = await fetch(new Request(CATALOGUE_URL, { cache: "reload" }));
      if (response.ok) await cache.put(CATALOGUE_URL, response);
    } catch (_) {
      // Keep installation usable when the catalogue is temporarily unreachable.
    }

    // Activate the new worker silently. Do not reload existing pages.
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys
        .filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
        .map((key) => caches.delete(key))
    );

    // Existing pages continue running. No controllerchange reload is triggered.
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  const scope = self.registration.scope;

  // Never intercept cross-origin requests or live audio/video streams.
  if (url.origin !== self.location.origin || !url.href.startsWith(scope)) return;
  if (request.destination === "audio" || request.destination === "video") return;

  if (url.href === CATALOGUE_URL) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(CATALOGUE_URL);

      const refresh = fetch(request).then(async (response) => {
        if (response.ok) await cache.put(CATALOGUE_URL, response.clone());
        return response;
      });

      if (cached) {
        event.waitUntil(refresh.catch(() => undefined));
        return cached;
      }

      try {
        return await refresh;
      } catch (_) {
        return new Response(
          "Airwave's station catalogue is not available offline yet.",
          { status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" } }
        );
      }
    })());
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith((async () => {
      try {
        // Network-first means a newly deployed HTML version is used on navigation.
        const response = await fetch(request);
        if (response.ok) {
          const cache = await caches.open(CACHE_NAME);
          await cache.put(new URL("./index.html", scope).href, response.clone());
        }
        return response;
      } catch (_) {
        const cache = await caches.open(CACHE_NAME);
        return (
          await cache.match(request) ||
          await cache.match(new URL("./index.html", scope).href) ||
          await cache.match(new URL("./", scope).href) ||
          new Response("Airwave is offline and its app shell has not been cached yet.", { status: 503 })
        );
      }
    })());
    return;
  }

  event.respondWith((async () => {
    try {
      const response = await fetch(request);
      if (response.ok) {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(request, response.clone());
      }
      return response;
    } catch (_) {
      const cache = await caches.open(CACHE_NAME);
      return (await cache.match(request)) || Response.error();
    }
  })());
});
