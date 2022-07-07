const CACHE_NAME = 'v1';

// Install Service Worker
self.addEventListener('install', (e) => {
	e.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			console.log('Opened service worker cache');
			return cache.addAll(['index.html', 'offline.html']);
		})
	);
});

// Listen for requests
self.addEventListener('fetch', (e) => {
	e.respondWith(
		caches.match(e.request).then(async () => {
			try {
				return await fetch(e.request);
			} catch {
				return await caches.match('offline.html');
			}
		})
	);
});

// Activate the Service Worker
self.addEventListener('activate', (e) => {
	const cacheWhitelist = [];
	cacheWhitelist.push(CACHE_NAME);

	e.waitUntil(
		caches.keys().then((cacheNames) =>
			Promise.all(
				cacheNames.map((cacheName) => {
					if (!cacheWhitelist.includes(cacheName)) {
						return caches.delete(cacheName);
					}
				})
			)
		)
	);
});
