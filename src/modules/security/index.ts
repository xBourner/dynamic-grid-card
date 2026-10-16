import { HomeAssistant } from "../../ha/types";
import { html, TemplateResult } from "lit";
import { ModuleConfig } from "../types";

export interface SecurityModuleConfig {
    exclude_groups?: string[]; // 'lock', 'window', 'door', 'motion', 'safety'
    exclude_entities?: string[];
}

interface SecurityEntity {
    entity_id: string;
    state: string;
    attributes: any;
    domain: string;
    device_class?: string;
    type: 'lock' | 'window' | 'door' | 'motion' | 'safety';
}

export function renderSecurityModule(hass: HomeAssistant, module: ModuleConfig): TemplateResult {
    const config = module.module_config as SecurityModuleConfig || {};
    const activeEntities = getActiveSecurityEntities(hass, config);

    if (activeEntities.length === 0) {
        return html``;
    }

    // Render
    // Render
    const activeCount = activeEntities.length;
    let title: string;
    let subtitle: string;
    let tooltip = '';

    // Collect active groups
    const activeGroups = new Set<string>();
    activeEntities.forEach(e => activeGroups.add(e.type));
    
    // Define group meta
    const groups = [
        { type: 'safety', icon: 'mdi:alert-circle', color: 'var(--red-color, #f44336)', pulse: true },
        { type: 'lock', icon: 'mdi:lock-open-alert', color: 'var(--red-color, #f44336)', pulse: true },
        { type: 'door', icon: 'mdi:door-open', color: 'var(--red-color, #f44336)', pulse: true },
        { type: 'window', icon: 'mdi:window-open-variant', color: 'var(--red-color, #f44336)', pulse: true },
        { type: 'motion', icon: 'mdi:motion-sensor', color: 'var(--orange-color, #ff9800)', pulse: false }
    ];

    const currentIcons = groups.filter(g => activeGroups.has(g.type));

    if (activeCount === 1) {
        const ent = activeEntities[0];
        title = ent.attributes.friendly_name || ent.entity_id;
        
        if (ent.type === 'lock') subtitle = 'Unlocked';
        else if (ent.type === 'motion') subtitle = 'Motion Detected';
        else subtitle = 'Open';

        tooltip = `${title}: ${subtitle}`;
    } else {
        // Multiple
        const lockCount = activeEntities.filter(e => e.type === 'lock').length;
        const openCount = activeEntities.filter(e => e.type === 'window' || e.type === 'door').length;
        const motionCount = activeEntities.filter(e => e.type === 'motion').length;
        const safetyCount = activeEntities.filter(e => e.type === 'safety').length;

        const parts: string[] = [];
        if (safetyCount > 0) parts.push(`${safetyCount} Safety`);
        if (lockCount > 0) parts.push(`${lockCount} Unlocked`);
        if (openCount > 0) parts.push(`${openCount} Open`);
        if (motionCount > 0) parts.push(`${motionCount} Motion`);

        title = 'Security Alert';
        subtitle = parts.join(', ');

        tooltip = activeEntities.map(e => `${e.attributes.friendly_name} (${e.state})`).join('\n');
    }

    return html`
        <style>
             .security-container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                height: 100%;
                padding: 0 12px;
                box-sizing: border-box;
            }
            .security-item {
                display: flex;
                align-items: center;
                gap: 12px;
                cursor: pointer;
            }
            .icons-container {
                display: flex;
                align-items: center;
                gap: -8px; /* Slight overlap for compact look, or positive for spacing */
            }
            .security-icon {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-color: var(--red-color, #f44336);
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                flex-shrink: 0;
                animation: pulse 2s infinite;
                margin-right: 4px; /* Space between icons */
            }
            .security-icon:last-child {
                margin-right: 0;
            }
            .security-icon.no-pulse {
                animation: none;
            }
            .security-icon ha-icon {
                --mdc-icon-size: 20px;
            }
            .security-content {
                display: flex;
                flex-direction: column;
                overflow: hidden;
                flex: 1;
            }
            .security-title {
                font-size: 14px;
                font-weight: 500;
                color: var(--primary-text-color);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .security-subtitle {
                font-size: 12px;
                color: var(--secondary-text-color);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            
            @keyframes pulse {
                0% { box-shadow: 0 0 0 0 rgba(244, 67, 54, 0.4); }
                70% { box-shadow: 0 0 0 10px rgba(244, 67, 54, 0); }
                100% { box-shadow: 0 0 0 0 rgba(244, 67, 54, 0); }
            }
        </style>
        <div class="security-container">
            <div class="security-item" 
                 title="${tooltip}"
                 @click=${(e: Event) => {
                     if (activeCount === 1) {
                         _handleEntityClick(e, activeEntities[0].entity_id);
                     } else {
                         _showSecurityDetail(e, activeEntities);
                     }
                 }}>
                 
                 <div class="icons-container">
                    ${currentIcons.map(iconConfig => html`
                        <div class="security-icon ${!iconConfig.pulse ? 'no-pulse' : ''}" style="background-color: ${iconConfig.color}">
                             <ha-icon icon="${iconConfig.icon}"></ha-icon>
                        </div>
                    `)}
                 </div>

                <div class="security-content">
                    <div class="security-title">${title}</div>
                    <div class="security-subtitle">${subtitle}</div>
                </div>
            </div>
        </div>
    `;
}

function _handleEntityClick(e: Event, entityId: string) {
    const event = new CustomEvent('hass-more-info', {
        bubbles: true,
        composed: true,
        detail: { entityId }
    });
    const target = e.target as HTMLElement;
    target.dispatchEvent(event);
}

function _showSecurityDetail(e: Event, entities: SecurityEntity[]) {
    const event = new CustomEvent('dynamic-grid-show-detail', {
        bubbles: true,
        composed: true,
        detail: {
            title: 'Security Alert',
            entities: entities
        }
    });
    const target = e.target as HTMLElement;
    target.dispatchEvent(event);
}

function getActiveSecurityEntities(hass: HomeAssistant, config: SecurityModuleConfig): SecurityEntity[] {
    const entities: SecurityEntity[] = [];
    const excludeGroups = config.exclude_groups || [];
    const excludeEntities = config.exclude_entities || [];

    for (const entityId of Object.keys(hass.states)) {
        if (excludeEntities.includes(entityId)) continue;

        const stateObj = hass.states[entityId];
        const domain = entityId.split('.')[0];
        const activestate = stateObj.state;
        const deviceClass = stateObj.attributes.device_class || '';

        // 1. Locks
        if (domain === 'lock' && !excludeGroups.includes('lock')) {
            if (activestate === 'unlocked' || activestate === 'jammed') {
                entities.push({ 
                    entity_id: entityId, 
                    state: activestate, 
                    attributes: stateObj.attributes, 
                    domain, 
                    type: 'lock' 
                });
            }
        }

        // 2. Binary Sensors
        if (domain === 'binary_sensor') {
            if (activestate === 'on') {
                if (['window', 'garage_door'].includes(deviceClass) && !excludeGroups.includes('window')) {
                    entities.push({ 
                        entity_id: entityId, 
                        state: activestate, 
                        attributes: stateObj.attributes, 
                        domain, 
                        type: 'window', 
                        device_class: deviceClass 
                    });
                } else if (['door', 'gate'].includes(deviceClass) && !excludeGroups.includes('door')) {
                    entities.push({
                        entity_id: entityId,
                        state: activestate,
                        attributes: stateObj.attributes,
                        domain,
                        type: 'door',
                         device_class: deviceClass 
                    });
                } else if (['motion', 'moving', 'occupancy', 'presence', 'vibration'].includes(deviceClass) && !excludeGroups.includes('motion')) {
                     entities.push({
                        entity_id: entityId,
                        state: activestate,
                        attributes: stateObj.attributes,
                        domain,
                        type: 'motion',
                         device_class: deviceClass 
                    });
                } else if (['safety', 'smoke', 'gas', 'moisture', 'problem', 'tamper'].includes(deviceClass) && !excludeGroups.includes('safety')) {
                     entities.push({
                        entity_id: entityId,
                        state: activestate,
                        attributes: stateObj.attributes,
                        domain,
                        type: 'safety',
                         device_class: deviceClass 
                    });
                }
            }
        }

        // 3. Covers (Garage doors, gates, etc acting as doors)
        if (domain === 'cover') {
             const cls = deviceClass || '';
             if (activestate === 'open') {
                 if (['garage', 'gate', 'door'].includes(cls) && !excludeGroups.includes('door')) {
                      entities.push({
                        entity_id: entityId,
                        state: activestate,
                        attributes: stateObj.attributes,
                        domain,
                        type: 'door',
                         device_class: cls 
                    });
                 } else if (['window', 'shutter', 'blind'].includes(cls) && !excludeGroups.includes('window')) {
                      // Covers as windows usually considered open implies not secure?
                      // User said "Lock, Window, Door, Motion".
                      // I'll include 'window' covers as windows for now.
                      entities.push({
                        entity_id: entityId,
                        state: activestate,
                        attributes: stateObj.attributes,
                        domain,
                        type: 'window',
                         device_class: cls 
                    });
                 }
             }
        }
    }

    return entities;
}

export const shouldRenderSecurity = (params: any): boolean => {
    return getActiveSecurityEntities(params.hass, params.config.module_config as SecurityModuleConfig || {}).length > 0; 
}
