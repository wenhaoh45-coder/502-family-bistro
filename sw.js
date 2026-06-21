const CACHE_NAME = "family-bistro-v7";
const DISH_IMAGES = [
  "stir-fried-beef",
  "pepper-pork",
  "red-braised-pork",
  "stir-fried-ribs",
  "tea-oil-chicken",
  "sizzling-chicken",
  "sizzling-ribs",
  "chopped-chili-fish-head",
  "dry-pot-beef-radish",
  "pork-ball-pea-shoot-soup",
  "chili-cured-pork",
  "stir-fried-sausage",
  "tomato-beef-brisket",
  "sweet-sour-ribs",
  "green-pepper-pork",
  "pickled-cabbage-beef-mince",
  "double-pepper-beef-mince",
  "ants-climbing-tree",
  "poached-shrimp",
  "cold-pig-ear",
  "steamed-egg",
  "hand-torn-cabbage",
  "sizzling-cauliflower",
  "seasonal-greens",
  "stir-fried-eggplant",
  "stir-fried-yardlong-beans",
  "mapo-tofu",
  "pork-bone-soup",
  "coconut-chicken",
  "sour-soup-beef-hotpot",
  "mashed-pepper-century-egg",
  "tiger-skin-pepper",
  "tofu-ball-soup",
  "tomato-egg-soup",
  "chive-yellow-eggs",
  "dumplings",
  "luosifen",
  "instant-noodles",
  "changde-beef-noodles",
].map((id) => `./assets/dishes/${id}.webp`);

const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./cloud-config.js",
  "./manifest.webmanifest",
  "./assets/app-icon.svg",
  ...DISH_IMAGES,
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then(
      (cached) =>
        cached ||
        fetch(event.request)
          .then((response) => {
            if (response.ok && new URL(event.request.url).origin === location.origin) {
              const copy = response.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
            }
            return response;
          })
          .catch(() => caches.match("./index.html")),
    ),
  );
});
