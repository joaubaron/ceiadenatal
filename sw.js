const CACHE_VERSION = '17.11.2026-0829';
const CACHE_NAME = `meuchef-${CACHE_VERSION}`;
const BASE = '/ceiadenatal/';
const ARQUIVOS = [
BASE,
BASE + 'index.html',
BASE + 'manifest.json',
BASE + 'icon-192.png',
BASE + 'icon-512.png',
BASE + 'fotos/foto1.webp',
BASE + 'fotos/foto2.webp',
BASE + 'fotos/foto3.webp',
BASE + 'fotos/foto4.webp',
BASE + 'fotos/foto5.webp',
BASE + 'fotos/foto6.webp',
BASE + 'fotos/foto7.webp',
BASE + 'fotos/foto8.webp'
];

self.addEventListener('install', (e) => {
e.waitUntil(
caches.open(CACHE).then((c) =>
Promise.all(ARQUIVOS.map((u) => c.add(u).catch(() => {})))
).then(() => self.skipWaiting())
);
});

self.addEventListener('activate', (e) => {
e.waitUntil(
caches.keys().then((ks) =>
Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
).then(() => self.clients.claim())
);
});

self.addEventListener('fetch', (e) => {
if (e.request.method !== 'GET') return;
e.respondWith(
caches.match(e.request).then((r) => r || fetch(e.request).then((res) => {
if (res && res.ok && new URL(e.request.url).origin === location.origin) {
const copia = res.clone();
caches.open(CACHE).then((c) => c.put(e.request, copia));
}
return res;
}).catch(() => caches.match(BASE + 'index.html')))
);
});
