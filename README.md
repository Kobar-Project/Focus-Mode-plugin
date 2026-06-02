<div align="center">
  <img src="https://github.com/Kobar-Project/KoBar/raw/master/build/icon.png" alt="KoBar Logo" width="120"/>
  <h1>Focus Mode - KoBar Plugin</h1>
  <p><em>Pomodoro-style focus timer to boost your productivity.</em></p>
  
  [![KoBar Ecosystem](https://img.shields.io/badge/KoBar-Ecosystem-f4a125?style=for-the-badge&logo=electron&logoColor=white)](https://github.com/Kobar-Project)
  [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
</div>

---

## 📌 Overview

**Focus Mode** is a dedicated productivity plugin for the [KoBar](https://github.com/Kobar-Project/KoBar) ecosystem. It introduces a highly integrated, Pomodoro-style timer directly into your always-on-top sidebar. Designed to minimize distractions, it helps users maintain deep concentration through structured work sessions and customizable breaks.

## ✨ Features

- **Integrated Timer:** Unobtrusive focus timer right inside your sidebar.
- **Visual Status Indicator:** Dynamic button that displays an hourglass icon when idle, remaining time when active, and pulses when finished.
- **Custom Notifications:** Choose from multiple built-in melodies (*Alarm, Bells, Calming, Cosmic, Guitar, Hiphop, Ringtones*) or rely on native OS desktop notifications.
- **Persistent State:** Timer runs seamlessly in the background via a global event loop, even when UI components are unmounted.
- **Smart UI Positioning:** The configuration popup dynamically positions itself to stay within screen bounds, supporting horizontal/vertical and edge orientations.
- **Draggable Interface:** The settings panel can be detached and moved anywhere on the screen.
- **Multi-Language Support:** Fully localized out of the box (English, German, Arabic, Chinese, French, Hindi, Spanish, Japanese, Russian, Turkish).

## 🛠️ Technical Architecture

This plugin is built leveraging KoBar's plugin architecture and integrates deeply with the main application state:

- **State Management:** Uses global state (`Zustand`) to ensure the timer persists across UI mounts/unmounts.
- **Event Loop:** Implements a central interval that manages time tracking independent of React renders.
- **Native IPC Bridge:** Utilizes KoBar's exposed `window.api` for secure access to desktop notifications and playing local audio assets.
- **Clean UI:** Built with React and styled via Tailwind CSS, adhering to KoBar's clean architecture guidelines.

> 📖 **Developer Note:** For an in-depth look at the architecture, state tracking, and UI lifecycle, refer to the [Technical Documentation](focus-mode-technical-doc.md) included in this repository.

## 🚀 Installation

As part of the KoBar ecosystem, this plugin is designed to be loaded dynamically.

1. Ensure you have the latest version of **KoBar** installed.
2. Download the plugin package.
3. Place the plugin folder into your KoBar `plugins` directory.
4. Restart KoBar or reload the plugin registry.

---

## ✉️ Contact

For support or inquiries, you can contact us at [hello@kobar.org](mailto:hello@kobar.org).

[KoBar.org](https://kobar.org)

---

## 💛 Sponsors & Backers

If you find KoBar useful and want to support its ongoing development, consider backing the project through any of the platforms below:

<p align="center">
  <a href="https://www.patreon.com/kobarproject" target="_blank">
    <img src="https://img.shields.io/badge/Patreon-F96854?style=for-the-badge&logo=patreon&logoColor=white" alt="Become a Patron" />
  </a>
  <a href="https://opencollective.com/kobar" target="_blank">
    <img src="https://img.shields.io/badge/Open_Collective-7FADF2?style=for-the-badge&logo=open-collective&logoColor=white" alt="Open Collective" />
  </a>
</p>