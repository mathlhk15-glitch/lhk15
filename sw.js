const CACHE_NAME = 'counsel-pwa-v1';

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Basic core files
      return cache.addAll([
        './',
        './index.html',
        './진로상담시스템.html',
        './manifest.json',
        './icon-192.png',
        './icon-512.png'
      ]).catch((err) => {
        console.warn('Failed to cache during install', err);
      });
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request).catch(() => {
        // Fallback for offline mode if necessary
      });
    })
  );
});
