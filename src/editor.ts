import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, LovelaceCardConfig } from "./ha/types";
import { fireEvent } from "./ha/fire_event";
import { ColumnConfig } from './modules/types';
import { mdiDrag, mdiPencil, mdiDelete, mdiPlaylistPlus } from '@mdi/js';
import './module-editor';
import './column-editor';

@customElement('dynamic-grid-card-editor')
export class DynamicGridCardEditor extends LitElement {
    @property({ attribute: false }) public hass!: HomeAssistant;
    @property({ attribute: false }) public lovelace?: any;
    @state() private _config!: LovelaceCardConfig;
    @state() private _editIndex: number | null = null;

    public setConfig(config: LovelaceCardConfig): void {
        this._config = config;
    }

    protected render(): TemplateResult {
        if (!this.hass || !this._config) {
            return html``;
        }

        if (this._editIndex !== null) {
            const column = (this._config.columns || [])[this._editIndex];
            return html`
                <dynamic-grid-column-editor
                    .hass=${this.hass}
                    .lovelace=${this.lovelace}
                    .config=${column}
                    .index=${this._editIndex}
                    @go-back=${this._stopEditing}
                    @config-changed=${this._columnChanged}
                ></dynamic-grid-column-editor>
            `;
        }

        const columns = this._config.columns || [];

        return html`
            <div class="card-config">
                <div class="option">
                    <ha-textfield
                        label="Header"
                        .value=${this._config.header || ''}
                        .configValue=${'header'}
                        helper="Heading of Grid"
                        @input=${this._valueChanged}
                    ></ha-textfield>
                    <ha-textfield
                        label="Card Height"
                        .value=${this._config.card_height || ''}
                        .configValue=${'card_height'}
                        helper="e.g. 600px, 85vh (Default: Auto)"
                        @input=${this._valueChanged}
                    ></ha-textfield>
                </div>

                <h3>Columns Configuration</h3>
                <div class="modules-list">
                    ${(columns as ColumnConfig[]).map((col, index) => html`
                        <div class="module-item"
                             draggable="true"
                             @dragstart=${(e: DragEvent) => this._dragStart(e, index)}
                             @dragover=${this._dragOver}
                             @drop=${(e: DragEvent) => this._drop(e, index)}
                        >
                            <div class="handle">
                                <ha-svg-icon .path=${mdiDrag}></ha-svg-icon>
                            </div>
                            <div class="content-text">
                                <span class="primary"><strong>Column ${index + 1}</strong></span>
                                <span class="secondary">${col.modules?.length || 0} Modules</span>
                            </div>
                            <div>
                                <ha-icon-button
                                    label="Edit"
                                    .path=${mdiPencil}
                                    @click=${() => this._editColumn(index)}
                                ></ha-icon-button>
                                <ha-icon-button
                                    label="Delete"
                                    .path=${mdiDelete}
                                    @click=${() => this._removeColumn(index)}
                                ></ha-icon-button>
                            </div>
                        </div>
                    `)}
                </div>
                
                <div class="add-column">
                     <ha-button 
                        size="small" 
                        appearance="filled" 
                        variant="brand" 
                        @click=${this._addColumn}
                     >
                        <ha-svg-icon .path=${mdiPlaylistPlus} slot="start"></ha-svg-icon>
                        Add Column
                     </ha-button>
                </div>
            </div>
        `;
    }

    private _columnChanged(ev: CustomEvent) {
        ev.stopPropagation();
         if (this._editIndex === null) return;
         
         const columns = [...(this._config.columns || [])];
         columns[this._editIndex] = ev.detail.config;
         
         this._config = { ...this._config, columns };
         fireEvent(this, 'config-changed', { config: this._config });
    }

    private _stopEditing() {
        this._editIndex = null;
    }

    private _valueChanged(ev: CustomEvent): void {
        if (!this._config || !this.hass) {
            return;
        }
        const target = ev.target as any;
        if ((this as any)[`_${target.configValue}`] === target.value) {
            return;
        }
        if (target.configValue) {
             this._config = {
                ...this._config,
                [target.configValue]: target.value,
            };
        }
        fireEvent(this, 'config-changed', { config: this._config });
    }

    private _addColumn() {
        const columns = [...(this._config.columns || [])];
        columns.push({ modules: [] });
        this._config = { ...this._config, columns };
        fireEvent(this, 'config-changed', { config: this._config });
    }

    private _removeColumn(index: number) {
        const columns = [...(this._config.columns || [])];
        columns.splice(index, 1);
        this._config = { ...this._config, columns };
        fireEvent(this, 'config-changed', { config: this._config });
    }

    private _editColumn(index: number) {
        this._editIndex = index;
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

        const columns = [...(this._config.columns || [])];
        const [movedColumn] = columns.splice(sourceIndex, 1);
        columns.splice(targetIndex, 0, movedColumn);

        this._config = { ...this._config, columns };
        fireEvent(this, 'config-changed', { config: this._config });
    }

    static get styles() {
        return css`
            .option {
                padding: 4px 0;
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 8px;
                align-items: center;
            }
            .option ha-textfield {
                width: 100%;
            }
            .modules-list {
                margin-top: 16px;
            }
            .module-item {
                display: flex;
                align-items: center;
                padding: 8px 12px;
                margin-bottom: 8px;
                background-color: var(--secondary-background-color, #f5f5f5);
                border: 1px solid var(--divider-color, #eee);
                border-radius: 8px;
                cursor: grab;
            }
            .module-item:hover {
                 border-color: var(--primary-color, #03a9f4);
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
            .add-column {
                margin-top: 16px;
                display: flex;
                justify-content: flex-start;
            }
        `;
    }
}
