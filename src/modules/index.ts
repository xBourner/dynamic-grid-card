import { RenderParams } from "./types";
import { shouldRenderMediaPlayer } from "./media-player";
import { shouldRenderCalendar } from "./calendar";

// Registry now mainly handles conditional logic, as rendering is done by standard HA cards
export const MODULE_CONDITIONS: Record<string, (params: RenderParams) => boolean> = {
    'media-player': shouldRenderMediaPlayer,
    'calendar': shouldRenderCalendar,
};

// Helper to check if a module type has specific condition logic
export function shouldRenderModule(type: string, params: RenderParams): boolean {
    const condition = MODULE_CONDITIONS[type];
    if (condition) {
        return condition(params);
    }
    return true; // Default to always showing if no specific logic
}
