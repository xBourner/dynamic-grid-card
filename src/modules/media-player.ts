import { LovelaceCardConfig } from "../ha/types";
import { RenderParams } from "./types";

export const getMediaPlayerDefaultConfig = (entity: string): LovelaceCardConfig => {
    return {
        type: "media-control",
        entity: entity
    };
};

export const shouldRenderMediaPlayer = (params: RenderParams): boolean => {
    // Logic from previous implementation: only show if playing or forced
    if (params.config.always_show) return true;
    
    // If we have a configured card with an entity, check that entity
    const entityId = params.config.card?.entity || params.config.entity;

    if (!entityId || !params.hass.states[entityId]) return false;

    const state = params.hass.states[entityId];
    return state.state === 'playing' || state.state === 'paused';
}
