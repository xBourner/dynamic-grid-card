import { LovelaceCardConfig } from "../ha/types";

export const getMapDefaultConfig = (entity?: string): LovelaceCardConfig => {
    return {
        type: "map",
        entities: entity ? [entity] : [],
        aspect_ratio: "50%",
        dark_mode: true
    };
};
