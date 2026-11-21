cat <<'EOF' > /home/hugo/Documents/GitHub/Pomodoro-Ultimate/README.md
# Pomodoro Ultimate

A minimalist, fullscreen, offline-first Pomodoro timer built as a zero-dependency Progressive Web App (PWA). Designed around fluid variable typography, procedural Web Audio synthesis, and curated landscape breaks.

---

## Screenshots

| Focus Mode | Running State |
| :---: | :---: |
| ![Focus Mode](screenshots/Capture%20d%E2%80%99%C3%A9cran%20du%202026-11-21%2018-26-14.png) | ![Running State](screenshots/Capture%20d%E2%80%99%C3%A9cran%20du%202026-11-21%2018-26-27.png) |

| Settings Panel | Session Intention & Cycle Dots |
| :---: | :---: |
| ![Settings Panel](screenshots/Capture%20d%E2%80%99%C3%A9cran%20du%202026-11-21%2018-26-48.png) | ![Session Intention](screenshots/Capture%20d%E2%80%99%C3%A9cran%20du%202026-11-21%2018-27-41.png) |

| Nature Break | Controls & Shortcuts |
| :---: | :---: |
| ![Nature Break](screenshots/Capture%20d%E2%80%99%C3%A9cran%20du%202026-11-21%2018-27-56.png) | ![Controls and Shortcuts](screenshots/Image%20coll%C3%A9e.png) |

---

## Key Features

- **Fluid Variable Typography (`Google Sans Flex`)**: Dynamically solves font width (`wdth`), weight (`wght`), optical size (`opsz`), and roundness (`ROND`) to fill the viewport at any aspect ratio, smoothly morphing between paused and active states.
- **Procedural Web Audio Engine**: Zero external audio assets. Generates seamless looping brown noise (`600 Hz` low-pass filtered), mechanical watch-tick acoustics, and harmonic phase chimes directly via the Web Audio API.
- **Curated Nature Breaks**: Displays high-resolution landscapes during breaks with adaptive luminance contrast and a blurred `background-clip: text` fill inside the timer digits. Supports **Automatic**, **Local (Offline)**, **Wikimedia Commons Featured Landscapes**, and **Bing Archive** sources.
- **Intentional Gesture Protection**: Prevents accidental interruptions with progressive hold-to-confirm gauges (`3s` to pause, `1s` to resume, `5s` to skip or reset, `6s` for factory reset).
- **Native System Integration**:
  - Live pie-chart favicon adapting automatically to system light/dark themes.
  - **Media Session API** support for OS lock-screen controls and hardware media keys.
  - **Screen Wake Lock API** to keep the display awake during active sessions.
  - Desktop notifications, session intention display, cycle progress dots, and rolling 7-day focus statistics stored locally.
- **Offline-First PWA**: Installable on desktop and mobile with full offline caching via Service Worker (`sw.js`).

---

## Controls & Shortcuts

| Action | Gesture / Shortcut |
| :--- | :--- |
| **Start session** | `Click` on timer or `Space` |
| **Pause / Resume** | `Hold 3s` (pause) / `Hold 1s` (resume) via pointer or `Space` |
| **Adjust volume** | Mouse `Scroll` wheel or settings slider |
| **Mute / Unmute** | `M` |
| **Toggle brown noise** | `N` |
| **Open / Close settings** | Hover/tap top pill or `Esc` |

---

## Default Cycle

1. **Focus** — `25 min`
2. **Short Break** — `5 min`
3. **Focus** — `25 min`
4. **Short Break** — `5 min`
5. **Focus** — `25 min`
6. **Long Break** — `15 min`

All durations are customizable from the top settings drawer (`1` to `480` minutes).

---

## Running Locally

Because Service Workers and ES/Web Workers require an HTTP context, serve the repository with any static server:

```bash
python3 -m http.server 8080
