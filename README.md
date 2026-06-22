# Tokyo Travel Dashboard

A mobile-first Tokyo travel command centre for a 16-day Japan trip from **2026年6月27日 to 2026年7月12日**.

The app is designed for real trip usage: open phone, see Today Mode, tap the route, check tasks, switch the weather plan, and return to a hotel or airport quickly.

## Features

- Today Mode with auto trip-day detection and manual Day 1-16 switching
- Sticky mobile bottom navigation: Today, Map, Hotel, Weather, Return
- Dedicated Hotel quick card with current-stay detection and direct Google Maps return links
- Google Maps route buttons for daily transport, hotels, shopping, food, and airport return
- Return / Help panic screen for hotel return, Narita T2 route, flight info, and stress checks
- DisneySea day guide with route and App/DPA flow
- Weather backup simulator for Day 11-14 swaps
- Local checklist saving in the browser
- PWA manifest and service worker for poor-signal loading

## Structure

```text
/index.html
/tokyo_itinerary.html
/tokyo_itineray.html        # legacy misspelled redirect
/assets/css/style.css
/assets/js/app.js
/assets/icons/*.png
/manifest.webmanifest
/service-worker.js
/sw.js                      # legacy service worker shim
/README.md
```

## Pages

- `index.html` - app entrance page
- `tokyo_itinerary.html` - main trip dashboard
- `tokyo_itineray.html` - redirect kept for already shared links

## Mobile Usage

Open the GitHub Pages site on a phone and add it to the home screen. During the trip, start from Today Mode, tap the route button, check the short task list, use Weather Plan when rain changes the schedule, and use Return / Help if you need to get back to a hotel or airport quickly.
