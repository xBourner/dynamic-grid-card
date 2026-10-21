<h1 id="top" align="center">Dynamic Grid Card</h1>

<p align="center">
  <a href="https://github.com/hacs/integration">
    <img src="https://img.shields.io/badge/hacs-custom-orange.svg?style=for-the-badge" alt="HACS">
  </a>
  <a href="https://github.com/xBourner/dynamic-grid-card/releases/">
    <img src="https://img.shields.io/github/release/xBourner/dynamic-grid-card?style=for-the-badge" alt="GitHub release">
  </a>
  <a href="https://github.com/xBourner/dynamic-grid-card/issues">
    <img src="https://img.shields.io/github/issues/xBourner/dynamic-grid-card?style=for-the-badge" alt="Issues">
  </a>
</p>

## Overview

**Dynamic Grid Card** is a layout card for Home Assistant dashboards, inspired by the
Apple CarPlay dashboard. It arranges any cards in columns that share the available
height – modules can hide themselves when they have nothing to show, so the others
grow into the free space. Comes with smart modules for people, calendar events and
security.

## 📖 Documentation

Installation, configuration and troubleshooting:
**[xbourner.github.io/card-docu/dynamic-grid-card](https://xbourner.github.io/card-docu/dynamic-grid-card/)**

## 📥 Installation

### HACS

[![Open in HACS](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=xBourner&repository=dynamic-grid-card&category=plugin)

Add `https://github.com/xBourner/dynamic-grid-card` as a custom repository (category
**Dashboard**), install the card and clear your browser cache.

### Manual

Copy `dist/dynamic-grid-card.js` to `config/www/` and register it as a resource
(`/local/dynamic-grid-card.js`, type **JavaScript Module**).

Then add the card via **Edit dashboard → Add card → Dynamic Grid Card**.

## 🛠️ Development

```bash
npm install
npm run build   # → dist/dynamic-grid-card.js
```

## License

MIT – see [LICENSE](LICENSE).
