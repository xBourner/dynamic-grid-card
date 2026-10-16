import { HomeAssistant } from "../../ha/types";
import { html, TemplateResult } from "lit";
import { ModuleConfig } from "../types";

export interface PersonModuleConfig {
    show_only_home?: boolean;
    include_entities?: string[]; // If undefined, show all. If array, show only these.
    use_grayscale?: boolean;     // If true, grayscale when not home
    show_badge?: boolean;        // If true, show status badge
}

export function renderPersonModule(hass: HomeAssistant, module: ModuleConfig): TemplateResult {
    const config = module.module_config as PersonModuleConfig || {};
    
    // 1. Find Person Entities
    let persons = Object.keys(hass.states)
        .filter(eid => eid.startsWith('person.'))
        .map(eid => hass.states[eid]);

    // 2. Filter by Specific Entities (if configured)
    if (config.include_entities && config.include_entities.length > 0) {
        persons = persons.filter(p => config.include_entities!.includes(p.entity_id));
    }

    // 3. Filter by State (if configured)
    if (config.show_only_home) {
        persons = persons.filter(stateObj => stateObj.state === 'home');
    }

    if (persons.length === 0) {
        return html``; 
    }

    // 4. Render Avatars
    return html`
        <style>
            .person-container {
                display: flex;
                flex-wrap: wrap;
                gap: 12px;
                padding: 12px;
                align-items: center;
                justify-content: center;
                height: 100%;
                box-sizing: border-box;
            }
            .person-item {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 4px;
                cursor: pointer;
                position: relative;
            }
            .avatar {
                width: 48px;
                height: 48px;
                border-radius: 50%;
                background-size: cover;
                background-position: center;
                background-color: var(--secondary-background-color);
                display: flex;
                align-items: center;
                justify-content: center;
                transition: border-color 0.2s, filter 0.2s;
                position: relative;
            }
            .avatar.home {
                border-color: var(--primary-color, #03a9f4);
            }
            .avatar.not_home {
                border-color: var(--disabled-text-color, #bdbdbd);
                opacity: 0.9;
            }
            .avatar.grayscale {
                filter: grayscale(100%);
            }
            .person-name {
                font-size: 12px;
                color: var(--primary-text-color);
                text-align: center;
                max-width: 60px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .icon-placeholder {
                --mdc-icon-size: 24px;
                color: var(--primary-text-color);
            }
            .state-badge {
                position: absolute;
                top: -2px;
                right: -2px;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 1px 3px rgba(0,0,0,0.2);
                color: white;
            }
            .state-badge ha-icon {
                --mdc-icon-size: 12px;
            }
            .state-badge.home {
                background-color: var(--green-color, #4caf50);
            }
            .state-badge.not_home {
                background-color: var(--red-color, #f44336);
            }
        </style>
        <div class="person-container">
            ${persons.map(person => {
                const isHome = person.state === 'home';
                const picture = person.attributes.entity_picture;
                
                // Determine CSS classes
                const classes = ['avatar'];
                classes.push(isHome ? 'home' : 'not_home');
                if (config.use_grayscale && !isHome) {
                    classes.push('grayscale');
                }

                return html`
                    <div class="person-item" @click=${() => _handlePersonClick(person.entity_id)}>
                        <div class="${classes.join(' ')}" 
                             style=${picture ? `background-image: url(${picture})` : ''}>
                             ${!picture ? html`<ha-icon icon="mdi:account" class="icon-placeholder"></ha-icon>` : ''}
                             
                             ${config.show_badge ? html`
                                <div class="state-badge ${isHome ? 'home' : 'not_home'}">
                                    <ha-icon icon="${isHome ? 'mdi:home' : 'mdi:home-export-outline'}"></ha-icon>
                                </div>
                             ` : ''}
                        </div>
                        <div class="person-name">${person.attributes.friendly_name || person.entity_id}</div>
                    </div>
                `;
            })}
        </div>
    `;
}

function _handlePersonClick(entityId: string) {
    const event = new CustomEvent('hass-more-info', {
        bubbles: true,
        composed: true,
        detail: { entityId }
    });
    document.querySelector('home-assistant')?.dispatchEvent(event);
}
