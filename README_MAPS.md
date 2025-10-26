# Enabling Google Maps (optional)

To use live Google Maps in the destination screen:
1. Get an API key for **Maps JavaScript API**.
2. Edit `index.html` and uncomment the script tag, replacing `YOUR_GOOGLE_MAPS_API_KEY` with your key:
   ```html
   <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=maps,marker"></script>
   ```
3. Commit. GitHub Pages will rebuild. The map now appears with Mexico and India markers.

If the script is not present, the app falls back to the abstract map.
