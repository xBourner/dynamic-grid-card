import { version } from "../package.json";
import "./dynamic-grid-card";

console.info(
  `%c DYNAMIC-GRID-CARD %c v${version} `,
  "color: steelblue; background: black; font-weight: bold;",
  "color: white ; background: dimgray; font-weight: bold;"
);

// Register custom card
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
    type: 'dynamic-grid-card',
    name: 'Dynamic Grid Card',
    description: 'A dynamic grid card inspired by CarPlay',
});
