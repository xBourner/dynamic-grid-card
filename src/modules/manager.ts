import { HomeAssistant } from "../ha/types";
import { TemplateResult, html } from "lit";
import { ModuleConfig } from "./types";
import { renderPersonModule } from "./person/index";
import { renderCalendarModule } from "./calendar";
import { renderSecurityModule } from "./security/index";

export class ModuleManager {
    static renderModule(hass: HomeAssistant, module: ModuleConfig): TemplateResult {
        switch (module.module_type) {
            case 'person':
                return renderPersonModule(hass, module);
            case 'calendar':
                return renderCalendarModule(hass, module);
            case 'security':
                return renderSecurityModule(hass, module);
            default:
                console.warn(`Unknown module type: ${module.module_type}`);
                return html`<div style="padding: 10px; color: red;">Unknown Module: ${module.module_type}</div>`;
        }
    }
}
