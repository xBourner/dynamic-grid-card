import { HomeAssistant } from "../ha/types";
import { html, TemplateResult } from "lit";
import { ModuleConfig } from "./types";

export interface CalendarModuleConfig {
    include_entities?: string[]; // If undefined, check all calendars
    show_all?: boolean;          // If true, show distinct inactive calendars (maybe?) or just show all regardless of state? 
                                 // User said "shows only if term is running". Strict default.
    max_minutes_until_start?: number; // How many minutes into the future to look for upcoming events. Default 60.
}

export function renderCalendarModule(hass: HomeAssistant, module: ModuleConfig): TemplateResult {
    const config = module.module_config as CalendarModuleConfig || {};
    const calendars = getActiveCalendars(hass, config);

    if (calendars.length === 0) {
        return html``;
    }

    // 4. Render
    
    // Aggregate for single view
    const activeCount = calendars.length;
    
    let title: string;
    let timeText: string;
    let icon = 'mdi:calendar';
    let tooltip = '';
    let progress = -1; // -1 means no progress bar

    if (activeCount === 1) {
        const cal = calendars[0];
        title = cal.attributes.message || cal.attributes.friendly_name;
        tooltip = title;
        
        const start = new Date(cal.attributes.start_time);
        const end = new Date(cal.attributes.end_time);
        const now = new Date();
        
        const isAllDay = (end.getTime() - start.getTime()) >= 86400000; // >= 24h
        
        // Determine layout based on state
        if (start > now) {
            // UPCOMING EVENT
            const diffMs = start.getTime() - now.getTime();
            const diffMins = Math.ceil(diffMs / 60000);
            timeText = `Startet in ${diffMins} min`;
            icon = 'mdi:calendar-clock';
        } else {
            // ACTIVE EVENT
            if (isAllDay) {
                timeText = 'Ganztägig';
            } else {
                const formatTime = (d: Date) => d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                timeText = `${formatTime(start)} - ${formatTime(end)}`;
    
                // Calculate progress
                const totalDuration = end.getTime() - start.getTime();
                const elapsed = now.getTime() - start.getTime();
                if (totalDuration > 0) {
                     progress = Math.max(0, Math.min(100, (elapsed / totalDuration) * 100));
                }
            }
        }
        
    } else {
        // Multiple active events
        title = `${activeCount} Events`; // Or "Termine"
        timeText = 'Now'; // Could differentiate if all are upcoming, but 'Now'-ish or 'Soon' works for mix
        icon = 'mdi:calendar-multiple';
        
        // Build tooltip with list of events
        const now = new Date();
        tooltip = calendars.map(c => {
             const t = c.attributes.message || c.attributes.friendly_name;
             const s = new Date(c.attributes.start_time);
             const timeStr = s > now ? `(in ${Math.ceil((s.getTime() - now.getTime())/60000)}m)` : '(Active)';
             return `${t} ${timeStr}`;
        }).join('\n');
    }

    return html`
        <style>
            .calendar-container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                height: 100%;
                padding: 0 12px;
                box-sizing: border-box;
            }
            .calendar-item {
                display: flex;
                align-items: center;
                gap: 12px;
                cursor: pointer;
            }
            .calendar-icon {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-color: var(--primary-color, #03a9f4);
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                flex-shrink: 0;
            }
            .calendar-icon ha-icon {
                --mdc-icon-size: 20px;
            }
            .calendar-content {
                display: flex;
                flex-direction: column;
                overflow: hidden;
                flex: 1;
            }
            .event-title {
                font-size: 14px;
                font-weight: 500;
                color: var(--primary-text-color);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .event-time {
                font-size: 12px;
                color: var(--secondary-text-color);
            }
            .progress-bar {
                margin-top: 4px;
                height: 4px;
                background-color: var(--secondary-background-color, #444); /* Fallback dark gray */
                border-radius: 2px;
                overflow: hidden;
                width: 100%;
                position: relative;
            }
            .progress-fill {
                height: 100%;
                background-color: var(--primary-text-color, #fff); /* Light gray/whiteish */
                border-radius: 2px;
                opacity: 0.7;
            }
        </style>
        <div class="calendar-container">
            <div class="calendar-item" 
                 title="${tooltip}"
                 @click=${(e: Event) => activeCount === 1 ? _handleCalendarClick(e, calendars[0].entity_id) : _showCalendarDetail(e, calendars)}>
                 <div class="calendar-icon">
                    <ha-icon icon="${icon}"></ha-icon>
                </div>
                <div class="calendar-content">
                    <div class="event-title">${title}</div>
                    <div class="event-time">${timeText}</div>
                    ${progress >= 0 ? html`
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${progress}%"></div>
                        </div>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
}

function _handleCalendarClick(e: Event, entityId: string) {
    const event = new CustomEvent('hass-more-info', {
        bubbles: true,
        composed: true,
        detail: { entityId }
    });
    const target = e.target as HTMLElement;
    target.dispatchEvent(event);
}

function _showCalendarDetail(e: Event, entities: any[]) {
    const event = new CustomEvent('dynamic-grid-show-detail', {
        bubbles: true,
        composed: true,
        detail: {
            title: 'Active Events',
            entities: entities
        }
    });
    const target = e.target as HTMLElement;
    target.dispatchEvent(event);
}

function getActiveCalendars(hass: HomeAssistant, config: CalendarModuleConfig) {
    // 1. Find Calendar Entities
    let calendars = Object.keys(hass.states)
        .filter(eid => eid.startsWith('calendar.'))
        .map(eid => hass.states[eid]);

    // 2. Filter by Specific Entities (if configured)
    if (config.include_entities && config.include_entities.length > 0) {
        calendars = calendars.filter(c => config.include_entities!.includes(c.entity_id));
    }

    // 3. Filter by State (Active or Upcoming)
    const maxMinutes = config.max_minutes_until_start || 60;
    const now = new Date();
    const maxFutureTime = new Date(now.getTime() + maxMinutes * 60000);

    // Filter Logic
    return calendars.filter(stateObj => {
        // Must have data to show (either on, or scheduled)
        // If it's off and has no start_time, it's effectively empty/useless
        if (stateObj.state === 'off' && !stateObj.attributes.start_time) return false;

        // Always show if 'on' (active)
        if (stateObj.state === 'on') return true;
        
        // If show_all force enabled (debug option), show it (provided it has a Next Event, checked above)
        if (config.show_all) return true;

        // Check if upcoming
        if (stateObj.attributes.start_time) {
            const start = new Date(stateObj.attributes.start_time);
            return start > now && start <= maxFutureTime;
        }
        
        return false;
    });
}

export const shouldRenderCalendar = (params: any): boolean => {
    return getActiveCalendars(params.hass, params.config.module_config as CalendarModuleConfig || {}).length > 0; 
}
