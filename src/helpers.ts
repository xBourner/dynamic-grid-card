import { HomeAssistant, LovelaceCardConfig, LovelaceCard } from "./ha/types";

declare global {
  interface Window {
    loadCardHelpers(): Promise<any>;
  }
}

let cachedHelpers: any = null;

export async function loadCardHelpers() {
  if (cachedHelpers) return cachedHelpers;
  
  if (window.loadCardHelpers) {
      cachedHelpers = await window.loadCardHelpers();
      return cachedHelpers;
  }
  return null;
}

export async function createCardElement(
  hass: HomeAssistant,
  config: LovelaceCardConfig
): Promise<LovelaceCard | undefined> {
  const helpers = await loadCardHelpers();
  if (!helpers) return undefined;

  try {
    const element = await helpers.createCardElement(config);
    element.hass = hass;
    return element;
  } catch (e) {
    console.error("Error creating card element", e);
    return undefined;
  }
}
