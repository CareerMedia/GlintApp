# Design notes — Glint

## Full-bleed Home background
Replace the hero image at:
```
public/assets/images/hero-placeholder.svg
```
Or set a custom path by changing the CSS variable in `src/styles/theme.css`:
```css
:root { --bg-image-url: url('assets/images/your-photo.jpg'); }
```
Keep your image large (e.g., 2000px wide) for crisp results.
