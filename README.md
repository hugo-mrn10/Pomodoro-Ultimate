<div align="center">
  <img src="icons/icon.svg" alt="Pomodoro Ultimate" width="84" height="84" />
  <h1>Pomodoro Ultimate</h1>
  <p>Minimalist, offline-first Pomodoro timer with variable typography and procedural Web Audio.</p>

  <p>
    <a href="https://hugo-maurin-zh.github.io/Pomodoro-Ultimate/">
      <img src="https://img.shields.io/badge/Launch_App-%E2%86%97-ffffff?style=for-the-badge" alt="Launch App" />
    </a>
  </p>
  <p><a href="https://hugo-maurin-zh.github.io/Pomodoro-Ultimate/">hugo-maurin-zh.github.io/Pomodoro-Ultimate</a></p>

  <p>
    <img src="https://img.shields.io/badge/PWA-Offline--First-000000?style=flat-square" alt="PWA Offline" />
    <img src="https://img.shields.io/badge/Dependencies-Zero-1c1c1e?style=flat-square" alt="Zero Dependencies" />
    <img src="https://img.shields.io/badge/Audio-Web_Audio_API-1c1c1e?style=flat-square" alt="Web Audio API" />
    <img src="https://img.shields.io/badge/License-PolyForm_Noncommercial_1.0-1c1c1e?style=flat-square" alt="License" />
  </p>
</div>

<p align="center">
  <img src="assets/preview-focus.png" alt="Focus mode" width="100%" />
</p>

| Nature Break | Settings & Controls |
| :---: | :---: |
| <img src="assets/preview-break.png" alt="Break mode" width="100%" /> | <img src="assets/preview-settings.png" alt="Settings" width="100%" /> |

### Highlights

| | |
| :--- | :--- |
| **Variable Typography**<br>Google Sans Flex animates weight, width, and roundness between focus and pause states. | **Procedural Web Audio**<br>Brown noise and mechanical watch tick synthesized in real time. Zero audio files. |
| **Hold to Pause**<br>Hold 3s to pause (1s to resume) to prevent accidental interruptions. | **Hidden Controls**<br>All settings stay invisible until you hover or tap the top pill. |
| **Live Tab Favicon**<br>The browser tab icon updates in real time as a pie chart of remaining session time. | **Offline-First PWA**<br>Service Worker caching and local storage stats. Works completely offline. |

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
git clone [https://github.com/hugo-maurin-zh/Pomodoro-Ultimate.git](https://github.com/hugo-maurin-zh/Pomodoro-Ultimate.git)
cd Pomodoro-Ultimate
python3 -m http.server 8080
