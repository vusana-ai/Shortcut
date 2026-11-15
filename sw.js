// 간단한 서비스 워커 (PWA 설치 감지용)
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // 기본 네트워크 요청 통과
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});