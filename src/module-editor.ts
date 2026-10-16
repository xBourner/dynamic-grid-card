import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, LovelaceCardConfig } from "./ha/types";
import { ModuleConfig } from './modules/types';
import { getMapDefaultConfig } from './modules/map';
import { getMediaPlayerDefaultConfig } from './modules/media-player';
import { PersonModuleConfig } from './modules/person/index';
import { CalendarModuleConfig } from './modules/calendar';
import { SecurityModuleConfig } from './modules/security/index';
import { mdiArrowLeft, mdiDelete, mdiClose, mdiSwapHorizontal, mdiAccount, mdiCalendar, mdiLock, mdiWindowClosed, mdiDoor, mdiWalk, mdiAlertCircle } from '@mdi/js';

@customElement('dynamic-grid-module-editor')
export class ModuleEditor extends LitElement {
    @property({ attribute: false }) public hass!: HomeAssistant;
    @property({ attribute: false }) public lovelace?: any;
    @property({ attribute: false }) public config!: ModuleConfig;
    @property({ type: Number }) public index!: number;
    @state() private _cardPicker: boolean = false;

    async connectedCallback() {
        super.connectedCallback();
        if (window.loadCardHelpers) {
            await window.loadCardHelpers();
        }
    }

    @state() private _currTab: string = 'settings';


    protected render(): TemplateResult {
        // ... (keep existing checks) ...
        const cardConfig = this.config.card;

        return html`
            <div class="header">
                 <ha-icon-button
                    label="Back"
                    .path=${mdiArrowLeft}
                    @click=${this._goBack}
                ></ha-icon-button>
                <h3>Edit Module</h3>
            </div>
            
            <div class="tabs-container">
                 <!-- ... tabs ... -->
                 <ha-tab-group>
                    <ha-tab-group-tab @click=${() => this._currTab = 'settings'} ?active=${this._currTab === 'settings'}>
                        Settings
                    </ha-tab-group-tab>
                    <ha-tab-group-tab @click=${() => this._currTab = 'layout'} ?active=${this._currTab === 'layout'}>
                        Layout
                    </ha-tab-group-tab>
                    <ha-tab-group-tab @click=${() => this._currTab = 'visibility'} ?active=${this._currTab === 'visibility'}>
                        Visibility
                    </ha-tab-group-tab>
                 </ha-tab-group>
            </div>

            <div class="content">
                ${this._currTab === 'settings' ? html`
                     <!-- Smart Module Config -->
                     ${this.config.type === 'smart' ? html`
                        <h4>${this._getSmartModuleName(this.config.module_type)} Settings</h4>
                        
                        ${this.config.module_type === 'person' ? html`
                             <div class="settings-row">
                                <span class="label">Show only people at home</span>
                                <ha-switch
                                    .checked=${(this.config.module_config as PersonModuleConfig)?.show_only_home || false}
                                    @change=${this._personShowHomeChanged}
                                ></ha-switch>
                             </div>
                             <div class="settings-row">
                                <span class="label">Grayscale when Away</span>
                                <ha-switch
                                    .checked=${(this.config.module_config as PersonModuleConfig)?.use_grayscale || false}
                                    @change=${this._personGrayscaleChanged}
                                ></ha-switch>
                             </div>
                             <div class="settings-row">
                                <span class="label">Show Status Badge</span>
                                <ha-switch
                                    .checked=${(this.config.module_config as PersonModuleConfig)?.show_badge || false}
                                    @change=${this._personBadgeChanged}
                                ></ha-switch>
                             </div>
                             
                             <h4>Include Entities</h4>
                             <div class="entities-list">
                                ${this._getPersonEntities().map(entity => {
                                    const isIncluded = this._isPersonIncluded(entity.entity_id);
                                    const picture = entity.attributes.entity_picture;
                                    return html`
                                        <div class="entity-row ${isIncluded ? '' : 'disabled'}">
                                            <div class="entity-icon">
                                                ${picture 
                                                    ? html`<div class="picker-icon" style="background-image: url(${picture})"></div>`
                                                    : html`<ha-svg-icon .path=${mdiAccount}></ha-svg-icon>`
                                                }
                                            </div>
                                            <div class="entity-info">
                                                <span class="entity-name">${entity.attributes.friendly_name || entity.entity_id}</span>
                                                <span class="entity-id">${entity.entity_id}</span>
                                            </div>
                                            <ha-button
                                                size="small" 
                                                appearance="filled" 
                                                variant="brand" 
                                                class="${isIncluded ? 'action-hide' : 'action-show'}"
                                                @click=${(e: Event) => this._personToggleEntity(e, entity.entity_id)}
                                            >
                                                ${isIncluded ? 'Hide' : 'Show'}
                                            </ha-button>
                                        </div>
                                    `;
                                })}
                             </div>
                        
                        ` : this.config.module_type === 'calendar' ? html`
                            
                             <div class="settings-row">
                                <span class="label">Show entries even if not running</span>
                                <ha-switch
                                    .checked=${(this.config.module_config as CalendarModuleConfig)?.show_all || false}
                                    @change=${this._calendarShowAllChanged}
                                ></ha-switch>
                             </div>

                             <div class="settings-row">
                                <ha-textfield
                                    label="Lookahead (minutes)"
                                    type="number"
                                    .value=${(this.config.module_config as CalendarModuleConfig)?.max_minutes_until_start || 60}
                                    @input=${this._calendarLookAheadChanged}
                                ></ha-textfield>
                             </div>

                             <h4>Include Calendars</h4>
                             <div class="entities-list">
                                ${this._getCalendarEntities().map(entity => {
                                    const isIncluded = this._isCalendarIncluded(entity.entity_id);
                                    return html`
                                        <div class="entity-row ${isIncluded ? '' : 'disabled'}">
                                            <div class="entity-icon">
                                                <ha-svg-icon .path=${mdiCalendar}></ha-svg-icon>
                                            </div>
                                            <div class="entity-info">
                                                <span class="entity-name">${entity.attributes.friendly_name || entity.entity_id}</span>
                                                <span class="entity-id">${entity.entity_id}</span>
                                            </div>
                                            <ha-button
                                                size="small" 
                                                appearance="filled" 
                                                variant="brand" 
                                                class="${isIncluded ? 'action-hide' : 'action-show'}"
                                                @click=${(e: Event) => this._calendarToggleEntity(e, entity.entity_id)}
                                            >
                                                ${isIncluded ? 'Hide' : 'Show'}
                                            </ha-button>
                                        </div>
                                    `;
                                })}
                             </div>

                        ` : this.config.module_type === 'security' ? html`
                            
                             ${this._getGroupedSecurityEntities().map(group => {
                                 const isGroupHidden = ((this.config.module_config as SecurityModuleConfig)?.exclude_groups || []).includes(group.id);

                                 return html`
                                     <ha-expansion-panel .outlined=${true}>
                                         <div slot="header" class="group-header-slot">
                                             <div class="header-icon">
                                                 <ha-svg-icon .path=${group.icon}></ha-svg-icon>
                                             </div>
                                             <div class="header-content">
                                                 <div class="header-title">${group.name}</div>
                                                 <div class="header-subtitle">${group.entities.length} items</div>
                                             </div>
                                             <ha-button
                                                 size="small" 
                                                 appearance="outlined" 
                                                 variant="${isGroupHidden ? 'brand' : 'destructive'}" 
                                                 @click=${(e: Event) => { e.stopPropagation(); this._securityToggleGroup(e, group.id); }}
                                             >
                                                 ${isGroupHidden ? 'Show' : 'Hide'}
                                             </ha-button>
                                         </div>
                                         
                                         ${!isGroupHidden ? html`
                                             <div class="entities-list">
                                                 ${group.entities.map(entity => {
                                                     const isIncluded = this._isSecurityIncluded(entity.entity_id);
                                                     return html`
                                                         <div class="entity-row ${isIncluded ? '' : 'disabled'}">
                                                             <div class="entity-icon">
                                                                 ${entity.attributes.icon || entity.attributes.device_class
                                                                    ? html`<ha-state-icon .hass=${this.hass} .stateObj=${entity}></ha-state-icon>`
                                                                    : html`<ha-svg-icon .path=${group.icon}></ha-svg-icon>`
                                                                 }
                                                             </div>
                                                             <div class="entity-info">
                                                                 <span class="entity-name">${entity.attributes.friendly_name || entity.entity_id}</span>
                                                                 <span class="entity-id">${entity.entity_id}</span>
                                                             </div>
                                                             <ha-button
                                                                 size="small" 
                                                                 appearance="filled" 
                                                                 variant="brand" 
                                                                 class="${isIncluded ? 'action-hide' : 'action-show'}"
                                                                 @click=${(e: Event) => this._securityToggleEntity(e, entity.entity_id)}
                                                             >
                                                                 ${isIncluded ? 'Hide' : 'Show'}
                                                             </ha-button>
                                                         </div>
                                                     `;
                                                 })}
                                             </div>
                                         ` : html`
                                             <div class="group-hidden-msg">Group is hidden (Enable to configure)</div>
                                         `}
                                     </ha-expansion-panel>
                                     <style>
                                        ha-expansion-panel {
                                            margin-bottom: 8px;
                                            --ha-card-border-radius: 8px;
                                        }
                                        .group-header-slot {
                                            display: flex;
                                            align-items: center;
                                            width: 100%;
                                            padding-right: 8px;
                                            height: 48px;
                                        }
                                        .header-icon {
                                            margin-right: 16px;
                                            color: var(--secondary-text-color);
                                            display: flex;
                                            align-items: center;
                                        }
                                        .header-content {
                                            flex: 1;
                                            display: flex;
                                            flex-direction: column;
                                            justify-content: center;
                                        }
                                        .header-title {
                                             font-weight: 500;
                                             font-size: 1rem;
                                             line-height: normal;
                                        }
                                        .header-subtitle {
                                            font-size: 0.8rem;
                                            color: var(--secondary-text-color);
                                            line-height: normal;
                                        }
                                     </style>
                                 `;
                             })}
                        ` : html`
                            <p>No settings available for this module.</p>
                        `}

                     ` : html`
                     <!-- Card Config -->
                     <h4>Card Configuration</h4>
                     ${cardConfig 
                        ? html`
                            <div class="card-editor">
                                 <div class="card-actions">
                                 </div>
                                    <hui-card-element-editor
                                    .hass=${this.hass}
                                    .lovelace=${this.lovelace}
                                    .value=${cardConfig}
                                    @config-changed=${this._cardConfigChanged}
                                 ></hui-card-element-editor>

                            </div>
                                                                <ha-button 
                                        size="small" 
                                        appearance="filled" 
                                        variant="brand" 
                                        @click=${this._changeCard}
                                    >
                                        <ha-svg-icon .path=${mdiSwapHorizontal} slot="start"></ha-svg-icon>
                                        Change Card    
                                    </ha-button>
                        ` 
                        : html`
                            <div class="no-card">
                                <p>No card selected.</p>
                                <ha-button @click=${this._pickCard}>Pick Card</ha-button>
                                 <div class="presets">
                                    <ha-button @click=${() => this._applyPreset('map')}>Add Map</ha-button>
                                    <ha-button @click=${() => this._applyPreset('media-player')}>Add Media Player</ha-button>
                                </div>
                            </div>
                        `
                    }
                `}
                ` : this._currTab === 'layout' ? html`
                    <!-- Layout Config -->
                    <!-- Layout Config -->
                     <div class="layout-fields">
                        <h4>Layout Settings</h4>
                        
                        ${this.config.type === 'smart' ? html`
                            <!-- Smart modules usually default to flex, but let user override -->
                        ` : ''}

                        <div class="option">
                             <ha-select
                                label="Layout Mode"
                                .value=${this.config.flex ? 'dynamic' : (this.config.height ? 'fixed' : 'dynamic')}
                                @selected=${this._modeChanged}
                                @closed=${(e: Event) => e.stopPropagation()}
                             >
                                <mwc-list-item value="dynamic">Dynamic (Share Space)</mwc-list-item>
                                <mwc-list-item value="fixed">Fixed Height</mwc-list-item>
                             </ha-select>
                        </div>

                        ${!this.config.flex ? html`
                            <ha-textfield
                                label="Height"
                                .value=${this.config.height || ''}
                                helper="e.g. 200px, 30%"
                                @input=${this._heightChanged}
                            ></ha-textfield>
                        ` : ''}

                     </div>
                ` : html`
                     <!-- Visibility Conditions -->
                     <div class="option">
                        <h4>Visibility Conditions</h4>
                        <p>Show this module only when:</p>
                        ${(this.config.conditions || []).map((cond, index) => html`
                            <div class="condition-row">
                                <ha-entity-picker
                                    .hass=${this.hass}
                                    .value=${cond.entity}
                                    @value-changed=${(e: CustomEvent) => this._conditionEntityChanged(index, e)}
                                ></ha-entity-picker>
                                <ha-textfield
                                    label="State is"
                                    .value=${cond.state || ''}
                                    @input=${(e: Event) => this._conditionStateChanged(index, e)}
                                ></ha-textfield>
                                <ha-icon-button .path=${mdiDelete} @click=${() => this._deleteCondition(index)}></ha-icon-button>
                            </div>
                        `)}
                        <ha-button @click=${this._addCondition}>Add Condition</ha-button>
                     </div>
                `}
            </div>

            ${this._cardPicker ? html`
                <ha-dialog 
                    open
                    @closed=${this._closePicker}
                    scrimClickAction
                    escapeKeyAction
                    style="--mdc-dialog-max-width: calc(100vw - 32px); --mdc-dialog-min-width: 1000px;"
                >
                    <div class="picker-container">
                        <div class="picker-header">
                            <ha-icon-button .path=${mdiClose} @click=${this._closePicker}></ha-icon-button>
                            <span class="header-title">Pick a Card</span>
                        </div>
                        <hui-card-picker
                            .hass=${this.hass}
                            .lovelace=${this.lovelace}
                            @config-changed=${this._cardPicked}
                        ></hui-card-picker>
                    </div>
                </ha-dialog>
            ` : ''}
        `;
    }

    private _goBack() {
        this.dispatchEvent(new CustomEvent('go-back'));
    }

    private _cardConfigChanged(ev: CustomEvent): void {
        ev.stopPropagation();
        const card = ev.detail.config;
        const config = { ...this.config, card };
        this._fireChanged(config);
    }

    private _changeCard() {
        this._cardPicker = true;
    }

    private _pickCard() {
         this._cardPicker = true;
    }

    private _closePicker() {
        this._cardPicker = false;
    }

    private _cardPicked(ev: CustomEvent) {
        ev.stopPropagation();
        const card = ev.detail.config;
        const config = { ...this.config, card };
        this._fireChanged(config);
        this._cardPicker = false;
    }

    private _addCondition() {
        const conditions = [...(this.config.conditions || [])];
        conditions.push({ entity: '', state: 'on' });
        const config = { ...this.config, conditions };
        this._fireChanged(config);
    }

    private _deleteCondition(index: number) {
        const conditions = [...(this.config.conditions || [])];
        conditions.splice(index, 1);
        const config = { ...this.config, conditions };
        this._fireChanged(config);
    }

    private _conditionEntityChanged(index: number, ev: CustomEvent) {
        const conditions = [...(this.config.conditions || [])];
        conditions[index] = { ...conditions[index], entity: ev.detail.value };
        const config = { ...this.config, conditions };
        this._fireChanged(config);
    }

    private _conditionStateChanged(index: number, ev: Event) {
        const value = (ev.target as HTMLInputElement).value;
        const conditions = [...(this.config.conditions || [])];
        conditions[index] = { ...conditions[index], state: value };
        const config = { ...this.config, conditions };
        this._fireChanged(config);
    }

    private _heightChanged(ev: Event) {
        const value = (ev.target as HTMLInputElement).value;
        const config: ModuleConfig = { ...this.config };
        if (value) {
            config.height = value;
        } else {
            delete config.height;
        }
        this._fireChanged(config);
    }

    private _modeChanged(ev: CustomEvent) {
        const mode = (ev.target as any).value;
        const config: ModuleConfig = { ...this.config };
        
        if (mode === 'dynamic') {
            config.flex = '1';
            // Optional: clear height if switching to dynamic?
            // delete config.height; 
        } else {
            delete config.flex; // Removes flex: 1, falling back to flex: 0 0 auto if height is set by user
            if (!config.height) {
                 // Suggest a default? No, let user type it.
            }
        }
        this._fireChanged(config);
    }

    private _applyPreset(type: 'map' | 'media-player') {
         let card: LovelaceCardConfig;
         if (type === 'map') {
             card = getMapDefaultConfig(this.hass ? Object.keys(this.hass.states)[0] : '');
         } else {
             card = getMediaPlayerDefaultConfig('media_player.example');
         }
         const config = { ...this.config, card };
         this._fireChanged(config);
    }

    private _getSmartModuleName(type?: string) {
        if (type === 'person') return 'Person Module';
        if (type === 'calendar') return 'Calendar Module';
        if (type === 'security') return 'Security Module';
        return 'Smart Module';
    }

    private _personShowHomeChanged(ev: Event) {
        const checked = (ev.target as any).checked;
        const module_config = { 
            ...(this.config.module_config || {}),
            show_only_home: checked 
        };
        const config = { ...this.config, module_config };
        this._fireChanged(config);
    }

    private _personGrayscaleChanged(ev: Event) {
        const checked = (ev.target as any).checked;
        const module_config = { 
            ...(this.config.module_config || {}),
            use_grayscale: checked 
        };
        const config = { ...this.config, module_config };
        this._fireChanged(config);
    }

    private _personBadgeChanged(ev: Event) {
        const checked = (ev.target as any).checked;
        const module_config = { 
            ...(this.config.module_config || {}),
            show_badge: checked 
        };
        const config = { ...this.config, module_config };
        this._fireChanged(config);
    }
    
    private _getPersonEntities() {
        if (!this.hass) return [];
        return Object.keys(this.hass.states)
            .filter(eid => eid.startsWith('person.'))
            .map(eid => this.hass.states[eid]);
    }

    private _isPersonIncluded(entityId: string): boolean {
        const config = this.config.module_config as PersonModuleConfig;
        if (!config || !config.include_entities) return true; // Default include all
        return config.include_entities.includes(entityId);
    }

    private _personToggleEntity(_ev: Event, entityId: string) {
        // We don't need the element checked state anymore, just toggle based on current config
        const currentConfig = this.config.module_config as PersonModuleConfig || {};
        let included = currentConfig.include_entities || this._getPersonEntities().map(e => e.entity_id); // Init with all if undefined
        const isCurrentlyIncluded = included.includes(entityId);

        if (isCurrentlyIncluded) {
            // Remove it
            included = included.filter(id => id !== entityId);
        } else {
            // Add it
            included.push(entityId);
        }

        const module_config = { 
            ...currentConfig,
            include_entities: included
        };
        const config = { ...this.config, module_config };
        this._fireChanged(config);
    }

    private _calendarShowAllChanged(ev: Event) {
        const checked = (ev.target as any).checked;
        const module_config = { 
            ...(this.config.module_config || {}),
            show_all: checked 
        };
        const config = { ...this.config, module_config };
        this._fireChanged(config);
    }

    private _calendarLookAheadChanged(ev: Event) {
        const value = parseInt((ev.target as HTMLInputElement).value) || 60;
        const module_config = { 
            ...(this.config.module_config || {}),
            max_minutes_until_start: value 
        };
        const config = { ...this.config, module_config };
        this._fireChanged(config);
    }

    private _getCalendarEntities() {
        if (!this.hass) return [];
        return Object.keys(this.hass.states)
            .filter(eid => eid.startsWith('calendar.'))
            .map(eid => this.hass.states[eid]);
    }

    private _isCalendarIncluded(entityId: string): boolean {
        const config = this.config.module_config as CalendarModuleConfig;
        if (!config || !config.include_entities) return true; // Default include all
        return config.include_entities.includes(entityId);
    }

    private _calendarToggleEntity(_ev: Event, entityId: string) {
        const currentConfig = this.config.module_config as CalendarModuleConfig || {};
        let included = currentConfig.include_entities || this._getCalendarEntities().map(e => e.entity_id); // Init with all if undefined
        const isCurrentlyIncluded = included.includes(entityId);

        if (isCurrentlyIncluded) {
            // Remove it
            included = included.filter(id => id !== entityId);
        } else {
            // Add it
            included.push(entityId);
        }

        const module_config = { 
            ...currentConfig,
            include_entities: included
        };
        const config = { ...this.config, module_config };
        this._fireChanged(config);
    }

    private _fireChanged(config: ModuleConfig) {
        this.dispatchEvent(new CustomEvent('config-changed', { detail: { config } }));
    }

    private _securityToggleGroup(_ev: Event, group: string) {
        const currentConfig = (this.config.module_config as SecurityModuleConfig) || {};
        let exclude_groups = currentConfig.exclude_groups || [];

        if (exclude_groups.includes(group)) {
             // Currently excluded (hidden) -> Show it (remove from exclude)
             exclude_groups = exclude_groups.filter(g => g !== group);
        } else {
             // Currently shown -> Hide it (add to exclude)
             exclude_groups.push(group);
        }

        const module_config = {
            ...currentConfig,
            exclude_groups
        };
        const config = { ...this.config, module_config };
        this._fireChanged(config);
    }
    

    
    private _getGroupedSecurityEntities() {
        if (!this.hass) return [];
        
        const groups = [
            { id: 'lock', name: 'Locks', icon: mdiLock, entities: [] as any[] },
            { id: 'window', name: 'Windows', icon: mdiWindowClosed, entities: [] as any[] },
            { id: 'door', name: 'Doors', icon: mdiDoor, entities: [] as any[] },
            { id: 'motion', name: 'Motion Sensors', icon: mdiWalk, entities: [] as any[] },
            { id: 'safety', name: 'Safety Sensors', icon: mdiAlertCircle, entities: [] as any[] }
        ];
        
        // Helper to find group
        const addToGroup = (id: string, entity: any) => {
            const g = groups.find(g => g.id === id);
            if (g) g.entities.push(entity);
        };

        Object.keys(this.hass.states).forEach(entityId => {
             const stateObj = this.hass.states[entityId];
             if (stateObj.state === 'unavailable' || stateObj.state === 'unknown') return;
             
             const d = entityId.split('.')[0];
             const dc = stateObj.attributes.device_class || '';
             
             if (d === 'lock') {
                 addToGroup('lock', stateObj);
             } else if (d === 'binary_sensor') {
                 if (['window'].includes(dc)) addToGroup('window', stateObj);
                 else if (['door', 'garage_door', 'opening'].includes(dc)) addToGroup('door', stateObj);
                 else if (['motion', 'moving', 'occupancy', 'presence', 'vibration'].includes(dc)) addToGroup('motion', stateObj);
                 else if (['safety', 'smoke', 'gas', 'moisture', 'problem', 'tamper', 'heat', 'carbon_monoxide'].includes(dc)) addToGroup('safety', stateObj);
             } else if (d === 'cover') {
                 if (['window', 'shutter', 'blind', 'awning', 'curtain'].includes(dc)) addToGroup('window', stateObj);
                 else if (['garage', 'gate', 'door'].includes(dc)) addToGroup('door', stateObj);
             }
        });
        
        return groups.filter(g => g.entities.length > 0);
    }



    private _isSecurityIncluded(entityId: string): boolean {
        const config = this.config.module_config as SecurityModuleConfig;
        if (!config || !config.exclude_entities) return true; 
        return !config.exclude_entities.includes(entityId);
    }

    private _securityToggleEntity(_ev: Event, entityId: string) {
        const currentConfig = (this.config.module_config as SecurityModuleConfig) || {};
        let exclude_entities = currentConfig.exclude_entities || [];
        const isCurrentlyIncluded = !exclude_entities.includes(entityId);

        if (isCurrentlyIncluded) {
            // User clicked Hide -> Add to exclude
            exclude_entities.push(entityId);
        } else {
            // User clicked Show -> Remove from exclude
            exclude_entities = exclude_entities.filter(id => id !== entityId);
        }

        const module_config = {
            ...currentConfig,
            exclude_entities
        };
        const config = { ...this.config, module_config };
        this._fireChanged(config);
    }

    static get styles() {
        return css`
             .header {
                display: flex;
                align-items: center;
                border-bottom: 1px solid #ccc;
                padding-bottom: 8px;
                margin-bottom: 16px;
            }
            .header h3 {
                margin: 0 0 0 16px;
            }
            .card-editor {
                border: 1px solid #eee;
                padding: 8px;
                margin-top: 8px;
                margin-bottom: 8px;
            }
            .layout-fields {
                display: flex;
                flex-direction: column;
                gap: 16px;
            }
            .settings-row {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 12px 0;
            }
            .settings-row .label {
            }
            .entities-list {
                display: flex;
                flex-direction: column;
                gap: 8px;
                padding-bottom: 12px;
            }
            .entity-row {
                display: flex;
                align-items: center;
                gap: 12px;
                padding: 8px 12px;
                border: 1px solid var(--divider-color, #eee);
                border-radius: 8px;
                transition: opacity 0.2s;
            }
            .entity-row.disabled {
                opacity: 0.6;
            }
            .entity-icon {
                width: 32px;
                height: 32px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .entity-icon .picker-icon {
                width: 32px;
                height: 32px;
                border-radius: 50%;
                background-size: cover;
                background-position: center;
            }
            .entity-info {
                flex: 1;
                display: flex;
                flex-direction: column;
            }
            .entity-name {
                font-weight: 500;
            }
            .entity-id {
                font-size: 0.85em;
                color: var(--secondary-text-color);
            }
            .action-hide {
                --mdc-theme-primary: var(--error-color, #db4437);
            }
            .action-show {
                --mdc-theme-primary: var(--primary-color, #03a9f4);
            }

            
            /* HA Dialog styling matching hui-dialog-edit-card.ts */
            ha-dialog {
                --mdc-dialog-max-width: 90vw;
                --dialog-z-index: 6;
                --dialog-content-padding: 0; /* We handle padding inside because we simulate the header in content */
            }

            @media all and (max-width: 450px), all and (max-height: 500px) {
                ha-dialog {
                    height: 100%;
                    --mdc-dialog-max-height: 100%;
                    --dialog-surface-top: 0px;
                    --mdc-dialog-max-width: 100vw;
                }
            }

            .picker-container {
                width: calc(90vw - 48px);
                max-width: 1000px;
                height: 85vh;
                margin: 0 auto;
                display: flex;
                flex-direction: column;
                overflow: hidden;
            }
            
            @media all and (max-width: 450px), all and (max-height: 500px) {
                .picker-container {
                    width: 100%;
                    max-width: 100%;
                    height: 100%;
                }
            }

            /* Header simulation */
            .picker-header {
                display: flex;
                align-items: center;
                padding: 10px 24px;
                background-color: var(--mdc-theme-surface);
                color: var(--mdc-dialog-heading-ink-color, var(--mdc-theme-on-surface));
            }
            
            /* Navigation icon positioning correction */
            .picker-header ha-icon-button {
                margin-left: -12px; /* Compensate for button padding to align with edge */
                margin-right: 12px;
            }

            .header-title {
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
            .group-section {
                border: 1px solid var(--divider-color, #eee);
                border-radius: 8px;
                padding: 12px;
                margin-bottom: 12px;
            }
            .group-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 8px;
            }
            .group-title {
                font-weight: 500;
                font-size: 1.1em;
            }
            .group-hidden-msg {
                font-style: italic;
                color: var(--secondary-text-color);
                text-align: center;
                padding: 8px;
            }

            hui-card-picker {
                flex: 1;
                overflow-y: auto;
                padding: 24px 24px; /* Move content padding here */
            }

            .side-by-side {
                display: flex;
                gap: 8px;
                margin-bottom: 8px;
            }
            .side-by-side > * {
                flex: 1;
            }
            .condition-row {
                display: flex;
                align-items: center;
                gap: 8px;
                margin-bottom: 8px;
            }
            .condition-row ha-entity-picker {
                flex: 2;
            }
            .condition-row ha-textfield {
                flex: 1;
            }
            ha-tab-group {
                display: block;
                margin-bottom: 16px;
                padding: 0 1em;
            }
            ha-tab-group-tab {
                flex: 1;
            }
            ha-tab-group-tab::part(base) {
                width: 100%;
                justify-content: center;
            }
        `;
    }
}
