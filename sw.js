/* Service worker — cache shell + library ZIP agar web app bisa dibuka & dipakai offline setelah kunjungan pertama */
var CACHE = "vector-massal-v10";
var CORE = [
  "./index.html",
  "manifest.webmanifest",
  "icon-192.png",
  "icon-512.png",
  "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"
];
self.addEventListener("install", function(e){
  e.waitUntil(
    caches.open(CACHE).then(function(c){
      return Promise.all(CORE.map(function(u){
        return fetch(u).then(function(res){ if(res && (res.status===200 || res.type==="opaque")) return c.put(u, res); }).catch(function(){});
      }));
    }).then(function(){ return self.skipWaiting(); })
  );
});
self.addEventListener("activate", function(e){
  e.waitUntil(caches.keys().then(function(keys){ return Promise.all(keys.map(function(k){ if(k!==CACHE) return caches.delete(k); })); }).then(function(){ return self.clients.claim(); }));
});
self.addEventListener("fetch", function(e){
  if(e.request.method!=="GET") return;
  e.respondWith(
    caches.match(e.request, {ignoreSearch:true}).then(function(hit){
      var net = fetch(e.request).then(function(res){
        if(res && (res.status===200 || res.type==="opaque")){ var copy=res.clone(); caches.open(CACHE).then(function(c){ c.put(e.request, copy); }); }
        return res;
      }).catch(function(){ return hit; });
      return hit || net;
    })
  );
});
