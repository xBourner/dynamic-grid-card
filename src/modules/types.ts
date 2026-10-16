import { HomeAssistant, LovelaceCardConfig } from "../ha/types";

export interface Condition {
    entity: string;
    state?: string;
    state_not?: string;
}

export interface ModuleConfig {
    type?: 'card' | 'smart';
    card?: LovelaceCardConfig;

    // Smart Module Config
    module_type?: string;
    module_config?: any;

    conditions?: Condition[];
    height?: string;
    min_height?: string;
    flex?: string;
    [key: string]: any;
}

export interface RenderParams {
    hass: HomeAssistant;
    config: ModuleConfig;
}

export interface ColumnConfig {
    modules: ModuleConfig[];
}
