<div align="center">
  <img src="icons/icon.svg" alt="Pomodoro Ultimate" width="84" height="84" />
  <h1>Pomodoro Ultimate</h1>
  <p>Minimalist, offline-first Pomodoro timer with variable typography and procedural Web Audio.</p>

  <p>
    <a href="https://hugo-mrn10.github.io/Pomodoro-Ultimate/">
      <img src="https://img.shields.io/badge/Launch_App-%E2%86%97-ffffff?style=for-the-badge" alt="Launch App" />
    </a>
  </p>
  <p><a href="https://hugo-mrn10.github.io/Pomodoro-Ultimate/">hugo-mrn10.github.io/Pomodoro-Ultimate</a></p>

  <p>
    <img src="https://img.shields.io/badge/PWA-Offline--First-000000?style=flat-square" alt="PWA Offline" />
    <img src="https://img.shields.io/badge/Dependencies-Zero-1c1c1e?style=flat-square" alt="Zero Dependencies" />
    <img src="https://img.shields.io/badge/Audio-Web_Audio_API-1c1c1e?style=flat-square" alt="Web Audio API" />
    <img src="https://img.shields.io/badge/License-PolyForm_Noncommercial_1.0-1c1c1e?style=flat-square" alt="License" />
  </p>
</div>

<p align="center">
  <img src="screenshots/Capture%20d%E2%80%99%C3%A9cran%20du%202026-11-21%2018-26-14.png" alt="Focus mode" width="100%" />
</p>

| Nature Break | Settings & Controls |
| :---: | :---: |
| <img src="screenshots/Capture%20d%E2%80%99%C3%A9cran%20du%202026-11-21%2018-27-56.png" alt="Nature Break" width="100%" /> | <img src="screenshots/Capture%20d%E2%80%99%C3%A9cran%20du%202026-11-21%2018-26-48.png" alt="Settings" width="100%" /> |
| **Active Focus** | **Session Intention & Cycle** |
| <img src="screenshots/Capture%20d%E2%80%99%C3%A9cran%20du%202026-11-21%2018-26-27.png" alt="Active Focus" width="100%" /> | <img src="screenshots/Capture%20d%E2%80%99%C3%A9cran%20du%202026-11-21%2018-27-41.png" alt="Session Intention & Cycle" width="100%" /> |

<p align="center">
  <img src="screenshots/Image%20coll%C3%A9e.png" alt="Controls & Credits" width="49%" />
</p>

### Highlights

| | |
| :--- | :--- |
| **Variable Typography**<br>Google Sans Flex animates weight, width, and roundness between focus and pause states. | **Procedural Web Audio**<br>Brown noise and mechanical watch tick synthesized in real time. Zero audio files. |
| **Hold to Pause**<br>Hold 3s to pause (1s to resume) to prevent accidental interruptions. | **Hidden Controls**<br>All settings stay invisible until you hover or tap the top pill. |
| **Curated Nature Breaks**<br>High-resolution landscapes from Wikimedia Commons, Bing Archive, or local offline storage with adaptive contrast. | **Focus Intention & Stats**<br>Optional session intention display, cycle progress dots, and rolling 7-day focus history. |
| **Live Tab Favicon**<br>The browser tab icon updates in real time as a pie chart of remaining session time. | **Offline-First PWA**<br>Service Worker caching, Media Session controls, and Screen Wake Lock. Works completely offline. |

### Controls

| Action | Pointer / Touch | Keyboard |
| :--- | :--- | :--- |
| **Start** | Click timer | `Space` |
| **Pause / Resume** | Hold `3s` / `1s` | Hold `Space` (`3s` / `1s`) |
| **Volume** | Scroll wheel | Settings slider |
| **Mute** | Settings slider | `M` |
| **Brown noise** | Settings switch | `N` |
| **Settings** | Hover or tap top pill | `Esc` |

### Run locally

```bash
git clone [https://github.com/hugo-mrn10/Pomodoro-Ultimate.git](https://github.com/hugo-mrn10/Pomodoro-Ultimate.git)
cd Pomodoro-Ultimate
python3 -m http.server 8080
```
