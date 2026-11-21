<div align="center">
  <img src="icons/icon.svg" alt="Pomodoro Ultimate Logo" width="88" height="88" />
  <h1>Pomodoro Ultimate</h1>
  <p>
    <strong>A tactile, distraction-free, offline-first Pomodoro timer built with kinetic variable typography and procedural Web Audio.</strong>
  </p>

  <p>
    <a href="https://TON-LIEN-ICI.pages.dev"><strong>Launch Live App →</strong></a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/PWA-Offline--First-000000?style=flat-square" alt="PWA Offline-First" />
    <img src="https://img.shields.io/badge/Dependencies-Zero-1c1c1e?style=flat-square" alt="Zero Dependencies" />
    <img src="https://img.shields.io/badge/Audio-Web_Audio_API-1c1c1e?style=flat-square" alt="Web Audio API" />
    <img src="https://img.shields.io/badge/License-PolyForm_Noncommercial_1.0-1c1c1e?style=flat-square" alt="License" />
  </p>
</div>

<br />

<div align="center">
  <img src="assets/preview-focus.png" alt="Pomodoro Ultimate — Focus Mode" width="100%" />
</div>

---

### Visual Overview

| Nature Break (Luminous Text Mask) | Minimalist Settings & Controls |
| :---: | :---: |
| <img src="assets/preview-break.png" alt="Nature Break Mode" width="100%" /> | <img src="assets/preview-settings.png" alt="Settings & Credits" width="100%" /> |
| *Blurred landscape backdrop (+33% brightness) clipped inside the timer digits.* | *Hidden top pill revealing audio, duration, stats, and credits on hover.* |

---

### Why Pomodoro Ultimate?

- **Kinetic Variable Typography** — Powered by *Google Sans Flex*, the timer continuously interpolates weight (`wght`), width (`wdth`), and roundness (`ROND`) so the digits physically breathe between active focus and paused states.
- **Synthesized Web Audio Engine** — Real-time procedural **brown noise** generator and mechanical **watch tick** synthesized directly via the Web Audio API. Zero audio files to download.
- **Intentional Friction** — Holding for **3 seconds** to pause (and **1 second** to resume) prevents accidental interruptions, while all settings stay hidden until you hover the top pill.
- **Dynamic Live Favicon** — The browser tab icon updates in real time as a minimal white pie chart tracking your remaining session.
- **100% Offline & Private** — Installable as a native-like PWA on desktop and mobile via Service Worker caching. Daily and 7-day focus stats stay strictly on your device.

---

### Controls & Shortcuts

| Action | Mouse / Touch | Keyboard |
| :--- | :--- | :--- |
| **Start session** | Click timer | `Space` |
| **Pause / Resume** | Hold timer (`3s` / `1s`) | Hold `Space` (`3s` / `1s`) |
| **Adjust volume** | Scroll wheel | — |
| **Mute / Unmute** | Settings slider | `M` |
| **Toggle brown noise** | Settings switch | `N` |
| **Open / Close settings** | Hover or tap top pill | `Esc` |

---

### Run Locally

No build tools, bundlers, or package managers required.

```bash
git clone [https://github.com/TON-PSEUDO/Pomodoro-Ultimate.git](https://github.com/TON-PSEUDO/Pomodoro-Ultimate.git)
cd Pomodoro-Ultimate
python3 -m http.server 8080
