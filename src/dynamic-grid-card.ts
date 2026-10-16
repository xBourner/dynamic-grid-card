import { mdiClose } from '@mdi/js';
import { LitElement, html, css, TemplateResult, PropertyValues } from 'lit';

// ... existing imports

interface DetailPopupState {
    open: boolean;
    title: string;
    entities: any[];
}

import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, LovelaceCardConfig, LovelaceCard } from "./ha/types";
import { ModuleConfig, ColumnConfig } from './modules/types';
import { ModuleManager } from './modules/manager';
import { shouldRenderModule } from './modules/index';
import { createCardElement } from './helpers';

interface DynamicGridCardConfig extends LovelaceCardConfig {
    header: string;
    card_height?: string; // e.g., "600px" or "85vh"
    columns: ColumnConfig[]; 
}

@customElement('dynamic-grid-card')
export class DynamicGridCard extends LitElement {
    @property({ attribute: false }) public hass!: HomeAssistant;
    @state() private config!: DynamicGridCardConfig;
    @state() private _cards: Map<string, LovelaceCard> = new Map();
    @state() private _detailPopup: DetailPopupState = { open: false, title: '', entities: [] };

    public connectedCallback() {
        super.connectedCallback();
        this.addEventListener('dynamic-grid-show-detail', this._handleShowDetail as EventListener);
    }

    public disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('dynamic-grid-show-detail', this._handleShowDetail as EventListener);
    }

    public setConfig(config: DynamicGridCardConfig): void {
        if (!config) {
            throw new Error('Invalid configuration');
        }
        this.config = config;
        this._createCards();
    }

    protected updated(changedProps: PropertyValues): void {
        super.updated(changedProps);
        if (changedProps.has('hass') && this.hass) {
            this._cards.forEach(card => {
                card.hass = this.hass;
            });
        }
    }

    private _handleShowDetail = (e: CustomEvent) => {
        this._detailPopup = {
            open: true,
            title: e.detail.title,
            entities: e.detail.entities
        };
    }

    private _closeDetailPopup() {
        this._detailPopup = { ...this._detailPopup, open: false };
    }


    private async _createCards() {
        if (!this.config?.columns) return;

        // Flatten all modules from all columns
        const modules = this.config.columns.flatMap(c => c.modules || []);
        
        for (const module of modules) {
            // Generate unique ID for caching
            const id = this._getModuleId(module);
            
            if (this._cards.has(id)) continue;

            const cardConfig = this._getCardConfigForModule(module);
            if (cardConfig) {
                const element = await createCardElement(this.hass, cardConfig);
                if (element) {
                    this._cards.set(id, element);
                    this.requestUpdate();
                }
            }
        }
    }

    private _getModuleId(module: ModuleConfig): string {
         return JSON.stringify(module.card || {}) + JSON.stringify(module.conditions || []);
    }

    private _getCardConfigForModule(module: ModuleConfig): LovelaceCardConfig | null {
        return module.card || null;
    }

    protected render(): TemplateResult {
        if (!this.config || !this.hass) {
            return html``;
        }

        const columns = this.config.columns || [];
        const heightStyle = this.config.card_height ? `height: ${this.config.card_height};` : '';

        return html`
            <ha-card class="main-card" .header=${this.config.header}>
                <div class="container" style="--column-count: ${columns.length}; ${heightStyle}">
                    ${columns.map((column, colIndex) => this._renderColumn(column, colIndex))}
                </div>

                ${this._detailPopup.open ? html`
                    <ha-dialog
                        open
                        hideActions
                        @closed=${this._closeDetailPopup}
                        class="detail-dialog"
                    >
                        <div class="dialog-header">
                            <ha-icon-button .path=${mdiClose} @click=${this._closeDetailPopup}></ha-icon-button>
                            <h2 class="mdc-dialog__title">${this._detailPopup.title}</h2>
                        </div>
                        <div class="dialog-content">
                            ${this._renderGroupedEntities(this._detailPopup.entities)}
                        </div>
                    </ha-dialog>
                ` : ''}
            </ha-card>
        `;
    }

    private _renderGroupedEntities(entities: any[]): TemplateResult[] {
        const groups = new Map<string, any[]>();
        
        entities.forEach(entity => {
            let groupName = 'Other';
            const domain = entity.entity_id.split('.')[0];
            const dc = entity.attributes.device_class;

            if (domain === 'lock') groupName = 'Lock';
            else if (domain === 'cover') groupName = 'Garage/Gate';
            else if (domain === 'calendar') {
                // Skip if off and no upcoming event
                if (entity.state === 'off' && !entity.attributes.start_time) return;
                groupName = 'Events';
            }
            else if (domain === 'binary_sensor') {
                if (['motion', 'occupancy', 'moving', 'presence'].includes(dc)) groupName = 'Motion';
                else if (['window'].includes(dc)) groupName = 'Window';
                else if (['door', 'garage_door', 'opening'].includes(dc)) groupName = 'Door';
                else if (['smoke', 'moisture', 'gas', 'safety', 'problem', 'tamper', 'heat'].includes(dc)) groupName = 'Safety';
            }
            
            if (!groups.has(groupName)) groups.set(groupName, []);
            groups.get(groupName)!.push(entity);
        });

        // Sort order
        const sortOrder = ['Safety', 'Lock', 'Garage/Gate', 'Door', 'Window', 'Motion', 'Events', 'Other'];
        
        return Array.from(groups.keys())
            .sort((a, b) => {
                const idxA = sortOrder.indexOf(a);
                const idxB = sortOrder.indexOf(b);
                return (idxA === -1 ? 999 : idxA) - (idxB === -1 ? 999 : idxB);
            })
            .map(groupName => html`
                <div class="group-section">
                    <h3 class="group-header">${groupName}</h3>
                    ${groups.get(groupName)!.map(entity => {
                        const isCalendar = entity.entity_id.startsWith('calendar.');
                        const name = isCalendar ? (entity.attributes.message || entity.attributes.friendly_name) : (entity.attributes.friendly_name || entity.entity_id);
                        let stateText = '';
                        
                        if (isCalendar && entity.attributes.start_time) {
                            const start = new Date(entity.attributes.start_time);
                            const end = new Date(entity.attributes.end_time);
                            const now = new Date();
                            if (start > now) {
                                stateText = this._formatRelativeTime(start);
                            } else {
                                stateText = `${start.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} - ${end.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
                            }
                        } else {
                           const state = (this.hass as any).formatEntityState ? (this.hass as any).formatEntityState(this.hass.states[entity.entity_id] || entity) : entity.state;
                           stateText = state === 'Off' || state === 'off' ? 'No active events' : state;
                        }

                        return html`
                        <div class="detail-row" @click=${() => this._handleMoreInfo(entity.entity_id)}>
                            <div class="detail-icon">
                                 <ha-state-icon .hass=${this.hass} .stateObj=${this.hass.states[entity.entity_id] || entity}></ha-state-icon>
                            </div>
                            <div class="detail-info">
                                <div class="detail-name">${name}</div>
                                <div class="detail-state">${stateText}</div>
                            </div>
                            <ha-icon-button icon="mdi:chevron-right"></ha-icon-button>
                        </div>
                    `;
                    })}
                </div>
            `);
    }


    private _formatRelativeTime(date: Date): string {
        const now = new Date();
        const diffMs = date.getTime() - now.getTime();
        const diffMins = Math.ceil(diffMs / 60000);
        const diffHours = Math.floor(diffMins / 60);
        const diffDays = Math.floor(diffHours / 24);

        if (diffMins < 60) {
            return `In ${diffMins} min`;
        } else if (diffHours < 24) {
            return `In ${diffHours} hour${diffHours > 1 ? 's' : ''}`;
        } else if (diffDays < 7) {
            return `In ${diffDays} day${diffDays > 1 ? 's' : ''}`;
        } else {
            return date.toLocaleDateString([], { weekday: 'short', day: 'numeric', month: 'short' });
        }
    }

    private _handleMoreInfo(entityId: string) {
        const event = new CustomEvent('hass-more-info', {
            bubbles: true,
            composed: true,
            detail: { entityId }
        });
        this.dispatchEvent(event);
    }

    public static getStubConfig(hass: HomeAssistant): DynamicGridCardConfig {
        const entities = Object.keys(hass.states);
        const weatherEntity = entities.find(e => e.startsWith('weather.')) || 'weather.forecast_home';
        const lightEntity = entities.find(e => e.startsWith('light.') && e.split('.')[1].startsWith('light')) || entities.find(e => e.startsWith('light.')) || 'light.example';

        return {
            type: 'custom:dynamic-grid-card',
            header: 'My Grid',
            card_height: '400px',
            columns: [
                {
                    modules: [
                        {
                            card: { type: 'weather-forecast', entity: weatherEntity },
                            flex: '1'
                        }
                    ]
                },
                {
                    modules: [
                        {
                            card: { type: 'tile', entity: 'sun.sun', name: 'Sun' },
                            flex: '1'
                        },
                        {
                            card: { type: 'button', tap_action: { action: 'toggle' }, entity: lightEntity, name: 'Light' },
                            flex: '1'
                        }
                    ]
                },
            ]
        };
    }

    private _checkConditions(module: ModuleConfig): boolean {
        if (!module.conditions || module.conditions.length === 0) return true;
        
        return module.conditions.every(condition => {
            const stateObj = this.hass.states[condition.entity];
            if (!stateObj) return false;
            
            if (condition.state) {
                return stateObj.state === condition.state;
            }
            if (condition.state_not) {
                return stateObj.state !== condition.state_not;
            }
            return true;
        });
    }

    private _renderColumn(column: ColumnConfig, _colIndex: number): TemplateResult {
        const modulesToRender = (column.modules || []).map(moduleConfig => {
            // Check Conditions
            if (!this._checkConditions(moduleConfig)) return null;

            if (moduleConfig.type === 'smart' && moduleConfig.module_type) {
                // Check if smart module should render (e.g. has active content)
                if (!shouldRenderModule(moduleConfig.module_type, { hass: this.hass, config: moduleConfig })) {
                    return null;
                }

                const smartModuleContent = ModuleManager.renderModule(this.hass, moduleConfig);
                
                let style = '';
                if (moduleConfig.height) {
                    style += `height: ${moduleConfig.height};`;
                    if (!moduleConfig.flex) style += `flex: 0 0 auto;`;
                }
                if (moduleConfig.min_height) {
                    style += `min-height: ${moduleConfig.min_height};`;
                }
                if (moduleConfig.flex) {
                    style += `flex: ${moduleConfig.flex};`;
                }
                
                return html`
                    <div class="module-item" style="${style}">
                        <ha-card style="height: 100%;">
                            ${smartModuleContent}
                        </ha-card>
                    </div>
                `;
            }

            // Generate ID
            const id = this._getModuleId(moduleConfig); 
            const cardElement = this._cards.get(id);

            if (!cardElement) return null;
            
            let style = '';
            if (moduleConfig.height) {
                style += `height: ${moduleConfig.height};`;
                if (!moduleConfig.flex) style += `flex: 0 0 auto;`;
            }
            if (moduleConfig.min_height) {
                style += `min-height: ${moduleConfig.min_height};`;
            }
            if (moduleConfig.flex) {
                style += `flex: ${moduleConfig.flex};`;
            }

            return html`<div class="module-item" style="${style}">${cardElement}</div>`;
        }).filter(Boolean);

        return html`
            <div class="column">
                ${modulesToRender}
            </div>
        `;
    }


    static get styles() {
        return css`
            :host {
                display: block;
                /* height: 100%;  Removed to allow auto-growth */
            }
            ha-card.main-card {
                /* height: 100%; Removed */
                overflow: hidden;
                background: none;
                border: none;
                box-shadow: none;
            }
            .container {
                display: flex;
                /* height: 100%; Removed */
                gap: 8px;
                align-items: stretch; /* Ensure columns stretch to match tallest */
            }
            .column {
                display: flex;
                flex-direction: column;
                gap: 8px;
                min-width: 0; 
                flex: 1; /* Each column takes equal width stash by default */
            }
            .module-item {
                 overflow: hidden; /* Prevent content spill */
            }

            ha-dialog {
                --mdc-dialog-min-width: 400px;
                --mdc-dialog-max-width: 600px;
                --dialog-content-padding: 12px;
            }
            .dialog-header {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                gap: 8px;
                position: sticky;
                top: 0;
                z-index: 10;
                border-bottom: 1px solid rgba(0, 0, 0, 0.07);
                background: var(--mdc-theme-surface, #fff);
            }
            h2.mdc-dialog__title {
                margin: 0;
                font-size: 1.25rem;
                font-weight: 500;
            }
            .dialog-content {
                display: flex;
                flex-direction: column;
                gap: 16px;
                padding: 16px;
            }
            .group-section {
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
            .group-header {
                margin: 0 0 4px 0;
                font-size: 1rem;
                font-weight: 500;
                color: var(--primary-text-color);
                text-transform: capitalize;
            }
            .detail-row {
                display: flex;
                align-items: center;
                gap: 16px;
                padding: 12px;
                border: 1px solid var(--divider-color, #eee);
                border-radius: 8px;
                cursor: pointer;
                transition: background-color 0.2s;
            }
            .detail-row:hover {
                background-color: rgba(127, 127, 127, 0.1);
            }
            .detail-icon {
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--primary-text-color);
            }
            .detail-info {
                flex: 1;
            }
            .detail-name {
                font-weight: 500;
                font-size: 1rem;
            }
            .detail-state {
                font-size: 0.9rem;
                color: var(--secondary-text-color);
            }
        `;
    }

    // Standard HA card sizing
    public getCardSize(): number {
        return 6;
    }

    public static async getConfigElement() {
        await import('./editor');
        return document.createElement('dynamic-grid-card-editor');
    }
}

