self.addEventListener("install", event => {
    console.log("🟢 Service worker installé");
    self.skipWaiting();
});

self.addEventListener("activate", event => {
    console.log("🟢 Service worker activé");
});

self.addEventListener("fetch", event => {
    // Ne pas interférer avec le flux audio
    if (event.request.url.includes("radio.mp3")) return;

    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
