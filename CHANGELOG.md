# Changelog

## 1.1.0 - 2026-11-02

- Canlı look: new panel with a 200 px progress ring, large tabular timer, round tonal controls with a filled play/pause button, ambience sounds as chips, Material Symbols Rounded icons, no glow or gradients. Pause/resume added. Esc closes the panel.
- Bar tile: `ring` template (progress, mm:ss value, pause icon, localised "N min left" label), updated once per second and only while the item is visible. Ignored on KoBar versions without tile support.
- Redesigned from its functions: preset chips 10 / 25 / 45 / 60 min under the ring; when the session ends the tile shows "Session over" and a click silences the alarm.
- QA fix: a trailing bar-tile update after the throttle window.

## 1.0.4

- Panel content is centred and no longer pushed to the right. Bar icon matches other bar icons.
