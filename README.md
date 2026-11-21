<div align="center">
  <img src="icons/icon.svg" alt="Pomodoro Ultimate" width="80" height="80" />
  <h1>Pomodoro Ultimate</h1>
  <p>Offline-first Pomodoro timer with variable typography and synthesized Web Audio.</p>
  <p><a href="https://TON-LIEN.pages.dev"><strong>Open App</strong></a></p>
  <p>
    <img src="https://img.shields.io/badge/PWA-Offline-000000?style=flat-square" alt="PWA Offline" />
    <img src="https://img.shields.io/badge/Dependencies-None-1c1c1e?style=flat-square" alt="No Dependencies" />
    <img src="https://img.shields.io/badge/Audio-Web_Audio_API-1c1c1e?style=flat-square" alt="Web Audio API" />
    <img src="https://img.shields.io/badge/License-PolyForm_Noncommercial_1.0-1c1c1e?style=flat-square" alt="License" />
  </p>
</div>

<p align="center">
  <img src="assets/preview-focus.png" alt="Focus mode" width="100%" />
</p>

| Break mode | Settings |
| :---: | :---: |
| <img src="assets/preview-break.png" alt="Break mode" width="100%" /> | <img src="assets/preview-settings.png" alt="Settings" width="100%" /> |

### Features

- **Variable typography:** Google Sans Flex animates weight, width, and roundness between running and paused states.
- **Procedural audio:** Brown noise and watch tick generated in real time via the Web Audio API (no external audio files).
- **Hold to pause:** Hold for 3 seconds to pause (1 second to resume) to avoid accidental stops.
- **Hidden controls:** Settings appear only when hovering or tapping the top pill.
- **Live favicon:** The tab icon displays remaining session time as a pie chart.
- **Offline and local:** Installable PWA with Service Worker caching; daily and 7-day stats stay in local storage.

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
git clone [https://github.com/TON-PSEUDO/Pomodoro-Ultimate.git](https://github.com/TON-PSEUDO/Pomodoro-Ultimate.git)
cd Pomodoro-Ultimate
python3 -m http.server 8080
