# Tokyo Travel Dashboard

A mobile-first Tokyo travel command centre for a 16-day Japan trip from **2026年6月27日 to 2026年7月12日**.

The app is designed for real trip usage: open phone, see Today Mode, tap the route, check tasks, switch the weather plan, and return to a hotel or airport quickly.

## Features

- Today Mode with auto trip-day detection and manual Day 1-16 switching
- Sticky mobile bottom navigation: Today, Map, Hotel, Weather, Return
- Dedicated Hotel quick card with current-stay detection and direct Google Maps return links
- Google Maps route buttons for daily transport, hotels, shopping, food, and airport return
- Return / Help panic screen for hotel return, Narita T2 route, flight info, and stress checks
- Offline survival pack with hotel addresses, taxi text, airport return notes, route diagrams, and an offline status banner
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
/assets/offline/*
/manifest.webmanifest
/service-worker.js
/sw.js                      # legacy service worker shim
/offline.html
/README.md
```

## Pages

- `index.html` - app entrance page
- `tokyo_itinerary.html` - main trip dashboard
- `tokyo_itineray.html` - redirect kept for already shared links

## Mobile Usage

Open the GitHub Pages site on a phone and add it to the home screen. During the trip, start from Today Mode, tap the route button, check the short task list, use Weather Plan when rain changes the schedule, and use Return / Help if you need to get back to a hotel or airport quickly.

## Offline Prep

Before departure, open the app on stable Wi-Fi, go to **Return / Help**, and tap **Download Offline Pack**. Then test once with Airplane Mode:

- Today Mode loads
- Hotel quick card loads
- Return / Help loads
- Offline hotel addresses and taxi text are visible
- Offline route diagrams are visible

Google Maps, weather, live train changes, and business hours still need internet. The offline pack is for survival information: where to stay, how to return, airport route, flight info, emergency notes, and checklist state.
