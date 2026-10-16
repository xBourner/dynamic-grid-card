import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant } from "./ha/types";
import { ColumnConfig } from './modules/types';
import { mdiArrowLeft, mdiDrag, mdiPencil, mdiDelete, mdiPlaylistPlus, mdiViewDashboard, mdiClose, mdiAccount, mdiCalendar, mdiShieldAlert } from '@mdi/js';
import './module-editor';

@customElement('dynamic-grid-column-editor')
export class ColumnEditor extends LitElement {
    @property({ attribute: false }) public hass!: HomeAssistant;
    @property({ attribute: false }) public lovelace?: any;
    @property({ attribute: false }) public config!: ColumnConfig;
    @property({ type: Number }) public index!: number;
    
    @state() private _editModuleIndex: number | null = null;
    @state() private _showModulePicker: boolean = false;
    @state() private _showCardPicker: boolean = false;

    protected render(): TemplateResult {
        if (!this.hass || !this.config) {
            return html``;
        }

        if (this._editModuleIndex !== null) {
             const module = this.config.modules[this._editModuleIndex];
             return html`
                <dynamic-grid-module-editor
                    .hass=${this.hass}
                    .lovelace=${this.lovelace}
                    .config=${module}
                    .index=${this._editModuleIndex}
                    @go-back=${this._stopEditingModule}
                    @config-changed=${this._moduleChanged}
                ></dynamic-grid-module-editor>
             `;
        }

        return html`
            <div class="header">
                <ha-icon-button 
                    label="Back"
                    .path=${mdiArrowLeft}
                    @click=${this._goBack}
                ></ha-icon-button>
                <h3>Column ${this.index + 1} Settings</h3>
            </div>

            <div class="content">
                <div class="modules-list">
                    ${(this.config.modules || []).map((module, mIndex) => html`
                        <div class="module-item"
                             draggable="true"
                             @dragstart=${(e: DragEvent) => this._dragStart(e, mIndex)}
                             @dragover=${this._dragOver}
                             @drop=${(e: DragEvent) => this._drop(e, mIndex)}
                        >
                            <div class="handle">
                                <ha-svg-icon .path=${mdiDrag}></ha-svg-icon>
                            </div>
                            <div class="content-text">
                                <span class="primary">${this._getModuleTitle(module)}</span>
                                ${module.conditions && module.conditions.length > 0 
                                    ? html`<span class="secondary">${module.conditions.length} Condition(s)</span>` 
                                    : ''}
                            </div>
                            <div class="actions">
                                <ha-icon-button 
                                    label="Edit"
                                    .path=${mdiPencil}
                                    @click=${() => this._editModule(mIndex)}
                                ></ha-icon-button>
                                <ha-icon-button 
                                    label="Delete"
                                    .path=${mdiDelete}
                                    @click=${() => this._deleteModule(mIndex)}
                                ></ha-icon-button>
                            </div>
                        </div>
                    `)}
                </div>

                <div class="add-module">
                     <ha-button 
                        size="small" 
                        appearance="filled" 
                        variant="brand" 
                        @click=${this._addCard}
                     >
                        <ha-svg-icon .path=${mdiPlaylistPlus} slot="start"></ha-svg-icon>
                        Add Card
                     </ha-button>
                     <ha-button 
                        size="small" 
                        appearance="filled" 
                        variant="brand" 
                        @click=${this._openModulePicker}
                        style="margin-left: 8px;"
                     >
                        <ha-svg-icon .path=${mdiViewDashboard} slot="start"></ha-svg-icon>
                        Add Module
                     </ha-button>
                </div>
            </div>

            ${this._renderModulePicker()}
            ${this._renderCardPicker()}
        `;
    }

    private _goBack() {
        this.dispatchEvent(new CustomEvent('go-back'));
    }

    private _editModule(index: number) {
        this._editModuleIndex = index;
    }

    private _stopEditingModule() {
        this._editModuleIndex = null;
    }

    private _moduleChanged(ev: CustomEvent) {
         ev.stopPropagation();
         if (this._editModuleIndex === null) return;
         
         const modules = [...(this.config.modules || [])];
         modules[this._editModuleIndex] = ev.detail.config;
         
         const newConfig = { ...this.config, modules };
         this._fireChanged(newConfig);
    }

    private _addCard() {
        this._showCardPicker = true;
    }
    
    private _closeCardPicker() {
        this._showCardPicker = false;
    }

    private _handleCardPicked(ev: CustomEvent) {
        ev.stopPropagation();
        const cardConfig = ev.detail.config;
        const modules = [...(this.config.modules || [])];
        modules.push({ card: cardConfig, flex: '1' });
        const newConfig = { ...this.config, modules };
        this._fireChanged(newConfig);
        this._closeCardPicker();
    }
    
    // Alias for backward compatibility if needed, but renamed to _addCard for clarity
    // private _addModule() {
    //    this._addCard();
    // }

    private _openModulePicker() {
        this._showModulePicker = true;
    }

    private _closeModulePicker() {
        this._showModulePicker = false;
    }

    private _addSmartModule(type: string) {
        const modules = [...(this.config.modules || [])];
        
        if (type === 'person') {
            modules.push({ 
                type: 'smart', 
                module_type: 'person',
                module_config: { show_only_home: false },
                flex: '1' 
            });
        } else if (type === 'calendar') {
            modules.push({ 
                type: 'smart', 
                module_type: 'calendar',
                module_config: { }, // Defaults handled in module
                flex: '1' 
            });
        } else if (type === 'security') {
            modules.push({ 
                type: 'smart', 
                module_type: 'security',
                module_config: { },
                flex: '1' 
            });
        }
        
        const newConfig = { ...this.config, modules };
        this._fireChanged(newConfig);
        this._closeModulePicker();
    }

    private _renderModulePicker() {
        if (!this._showModulePicker) return html``;

        return html`
            <ha-dialog
                open
                @closed=${this._closeModulePicker}
                hideActions
                style="--mdc-dialog-max-width: 90vw; --dialog-content-padding: 0;"
            >
                <div class="picker-container">
                    <div class="picker-header">
                        <ha-icon-button .path=${mdiClose} @click=${this._closeModulePicker}></ha-icon-button>
                        <span class="header-title">Add Smart Module</span>
                    </div>
                    <div class="picker-content">
                        <div class="module-picker-list">
                            <div class="picker-item" @click=${() => this._addSmartModule('person')}>
                                <div class="picker-icon">
                                    <ha-svg-icon .path=${mdiAccount}></ha-svg-icon>
                                </div>
                                <div class="picker-info">
                                    <span class="picker-title">Person Module</span>
                                    <span class="picker-desc">Show avatars for people (Home/Away status)</span>
                                </div>
                            </div>
                            
                            <div class="picker-item" @click=${() => this._addSmartModule('calendar')}>
                                <div class="picker-icon">
                                    <ha-svg-icon .path=${mdiCalendar}></ha-svg-icon>
                                </div>
                                <div class="picker-info">
                                    <span class="picker-title">Calendar Module</span>
                                    <span class="picker-desc">Show active calendar events</span>
                                </div>
                            </div>

                            <div class="picker-item" @click=${() => this._addSmartModule('security')}>
                                <div class="picker-icon" style="background-color: var(--red-color, #f44336);">
                                    <ha-svg-icon .path=${mdiShieldAlert}></ha-svg-icon>
                                </div>
                                <div class="picker-info">
                                    <span class="picker-title">Security Module</span>
                                    <span class="picker-desc">Show security alerts (lock, window, door, motion)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ha-dialog>
        `;
    }

    private _renderCardPicker() {
        if (!this._showCardPicker) return html``;

        return html`
            <ha-dialog
                open
                @closed=${this._closeCardPicker}
                hideActions
                style="--mdc-dialog-max-width: 90vw; --dialog-content-padding: 0;"
            >
                <div class="picker-container">
                    <div class="picker-header">
                        <ha-icon-button .path=${mdiClose} @click=${this._closeCardPicker}></ha-icon-button>
                        <span class="header-title">Pick a Card</span>
                    </div>
                    <hui-card-picker
                        .hass=${this.hass}
                        .lovelace=${this.lovelace}
                        @config-changed=${this._handleCardPicked}
                    ></hui-card-picker>
                </div>
            </ha-dialog>
        `;
    }

    private _deleteModule(index: number) {
         const modules = [...(this.config.modules || [])];
         modules.splice(index, 1);
         const newConfig = { ...this.config, modules };
         this._fireChanged(newConfig);
    }



    private _fireChanged(config: ColumnConfig) {
        this.dispatchEvent(new CustomEvent('config-changed', { detail: { config } }));
    }

    private _dragStart(e: DragEvent, index: number) {
        if (e.dataTransfer) {
            e.dataTransfer.setData('text/plain', index.toString());
            e.dataTransfer.effectAllowed = 'move';
        }
    }

    private _dragOver(e: DragEvent) {
        e.preventDefault();
        if (e.dataTransfer) {
            e.dataTransfer.dropEffect = 'move';
        }
    }

    private _drop(e: DragEvent, targetIndex: number) {
        e.preventDefault();
        const sourceIndex = parseInt(e.dataTransfer!.getData('text/plain'), 10);
        if (isNaN(sourceIndex) || sourceIndex === targetIndex) return;

        const modules = [...(this.config.modules || [])];
        const [movedModule] = modules.splice(sourceIndex, 1);
        modules.splice(targetIndex, 0, movedModule);

        const newConfig = { ...this.config, modules };
        this._fireChanged(newConfig);
    }

    private _getModuleTitle(module: any): string {
        if (module.type === 'smart') {
            const type = module.module_type || 'smart';
            return type.charAt(0).toUpperCase() + type.slice(1) + ' Module';
        }
        if (module.card) {
            let type = module.card.type;
            // Capitalize first letter of each word separated by dash
            type = type.split('-').map((s: string) => s.charAt(0).toUpperCase() + s.slice(1)).join('-');
            return type + ' Card';
        }
        return 'Empty (No Card)';
    }

    static get styles() {
        return css`
             .header {
                display: flex;
                align-items: center;
                border-bottom: 1px solid var(--divider-color, #ccc);
                padding-bottom: 8px;
                margin-bottom: 16px;
            }
            .header h3 {
                margin: 0 0 0 16px;
            }
            .modules-list {
                 margin-top: 16px;
            }
            .module-item {
                display: flex;
                align-items: center;
                padding: 12px;
                margin-bottom: 8px;
                background-color: var(--secondary-background-color, #f5f5f5);
                border: 1px solid var(--divider-color, #e0e0e0);
                border-radius: var(--ha-card-border-radius, 12px);
                cursor: grab;
                transition: background-color 0.2s ease;
                user-select: none;
            }
            .module-item:hover {
                 background-color: var(--secondary-background-color, #e0e0e0);
            }
            .handle {
                padding-right: 12px;
                cursor: grab;
                color: var(--secondary-text-color, #727272);
            }
            .content-text {
                flex: 1;
                display: flex;
                flex-direction: column;
            }
            .content-text .primary {
                font-weight: 500;
            }
            .content-text .secondary {
                font-size: 0.85em;
                color: var(--secondary-text-color, #727272);
            }
            .actions {
                display: flex;
            }
            .add-module {
                margin-top: 16px;
                display: flex;
                justify-content: flex-start;
            }
            
            /* Dialog & Picker Styles - Consistent with Card Picker */
            ha-dialog {
                --mdc-dialog-max-width: 90vw;
                --dialog-z-index: 6;
            }
            
             @media all and (max-width: 450px), all and (max-height: 500px) {
                ha-dialog {
                    --mdc-dialog-max-width: 100vw;
                    height: 100%;
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

            .picker-header {
                display: flex;
                align-items: center;
                padding: 10px 24px;
                background-color: var(--mdc-theme-surface);
                color: var(--mdc-dialog-heading-ink-color, var(--mdc-theme-on-surface));
                border-bottom: 1px solid var(--divider-color, #eee);
            }
            .picker-header ha-icon-button {
                margin-left: -12px;
                margin-right: 12px;
            }
            .header-title {
                font-family: var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
                font-size: var(--mdc-typography-headline6-font-size, 20px);
                font-weight: var(--mdc-typography-headline6-font-weight, 500);
            }

            .picker-content {
                flex: 1;
                overflow-y: auto;
                padding: 24px;
            }
            
            hui-card-picker {
                flex: 1;
                overflow-y: auto;
                padding: 24px;
            }

            .module-picker-list {
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
            .picker-item {
                display: flex;
                align-items: center;
                gap: 16px;
                padding: 12px;
                border: 1px solid var(--divider-color, #eee);
                border-radius: 8px;
                cursor: pointer;
                transition: background-color 0.2s;
            }
            .picker-item:hover {
                background-color: var(--secondary-background-color, #f5f5f5);
            }
            .picker-icon {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 40px;
                height: 40px;
                background-color: var(--primary-color, #03a9f4);
                color: white; 
                border-radius: 50%;
            }
            .picker-icon ha-svg-icon {
                --mdc-icon-size: 24px;
                color: #ffffff;
            }
            .picker-info {
                display: flex;
                flex-direction: column;
            }
            .picker-title {
                font-weight: 500;
                font-size: 1.1em;
            }
            .picker-desc {
                font-size: 0.85em;
                color: var(--secondary-text-color);
            }
        `;
    }
}
