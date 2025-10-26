# 🪙 Glint — Mobile Remittance App (MVP)

**Glint** is a mobile‑first, client‑side demo that simulates an international remittance flow with premium fintech polish.  
No real money moves — the goal is to showcase UX, **transparent costs**, and smooth, modern motion with a **neoglassmorphism** aesthetic.

> Hosting target: **GitHub Pages** (configured).

---

## ✨ Highlights

- **Mobile-first** layout (375px base) with responsive scaling
- **Neoglassmorphism** UI (frosted glass surfaces, glow edges, gradient borders)
- **Transparent fee breakdown** (on‑ramp 1.0%, off‑ramp 1.5%, FX spread 1.0% — 3.5% total)
- **Map-based corridor selection** (Mexico & India) with glowing hotspots
- **Recipient modal**, micro‑interactions, and **transfer animation** (Framer Motion)
- **Clean architecture**: `/components`, `/pages`, `/utils`, `/data`
- **Branding**: Midnight Blue base, Gold Gradient CTAs, Electric Teal accents
- **Tech**: React + Vite + TypeScript + Tailwind + Framer Motion + React Router (HashRouter)

---

## 🧱 Project Structure

See the repo for the full tree; key areas:

- `public/assets/…` — logo placeholder + icons (flags, profile)
- `src/styles/theme.css` — **neoglass** styles (cards, buttons, focus rings)
- `src/components/ui/Card.tsx` — glass cards
- `src/components/TransferAnimation.tsx` — coin streaks path animation
- `src/pages/{Home,Map,Send,Transfer,Success}.tsx` — end‑to‑end flow

---

## 🎨 Branding

| Token | Value | Usage |
|------|-------|------|
| **Gold Gradient** | `#FFD700 → #FFB300` | Buttons, highlights, coin streaks |
| **Midnight Blue** | `#0A2540` | App background |
| **Electric Teal** | `#00D1C1` | Accents, focus rings |
| **Soft White** | `#F8F9FA` | Text and surfaces |

Typography: **Inter** (Google Fonts).  
Replace `/public/assets/logo-placeholder.svg` with your final **Glint** logo.

---

## 🧮 Fee Model

- On‑ramp: **1.0%**
- Off‑ramp: **1.5%**
- FX spread: **1.0%**
- **Total**: 3.5%

Fees are computed in USD and displayed in local currency (using the corridor FX rate).  
Recipient receives `USD * (1 - 0.035) * fx_rate` in local currency.

---

## 🚀 Getting Started (Local)

```bash
npm install
npm run dev
```

Open http://localhost:5173 (Vite will print the exact port).

---

## 🌍 Deploy to GitHub Pages

This project is pre-configured for **GitHub Pages**:

- **Router:** `HashRouter` so deep links work without server rewrites.
- **Vite base:** `base: './'` for relative asset URLs (works at `/<repo>/`).
- **404:** `public/404.html` redirects to `./` (not strictly needed with HashRouter).

### Steps
1. Push to a GitHub repository.
2. In GitHub → **Settings** → **Pages** → Source: **GitHub Actions** or **Deploy from branch** (gh-pages).
3. From your local machine, publish the production build to the `gh-pages` branch:

```bash
npm run build
npm run deploy
```

This runs `gh-pages -d dist` and serves at `https://<username>.github.io/<repo>/`.

---

## 🧭 App Flow

1. **Landing / Sign‑In** → gold glass button to start
2. **Map** → tap **Mexico** or **India**
3. **Send** → enter USD → see breakdown and recipient receive value
4. **Transfer** → animated coins across a glowing path (~3s)
5. **Success** → “Money Received!” with recipient + country. Send more or Sign out.

Optional: open **Recipient** modal to add name / account / note before sending.

---

## 📁 Where to add your logo

Replace: `public/assets/logo-placeholder.svg`  
Referenced in `Header.tsx` and `Home.tsx`.

---

## © License

MIT — do anything, attribution appreciated.
