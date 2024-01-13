import { html } from "lit";
import { MDComponent } from "../../material/foundation/component";
import icons from "./icons.json";
import emojis from "./emojis.json";

class ExampleComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <!-- <div class="md-layout"> -->
                <div class="md-layout__grid">
                    <!--  -->
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                        ${icons.slice(0, 1).map(icon=>html`
                            <h1>${icon.category}</h1>
                            ${icon.children.map(icon=>html`
                                <md-icon>${icon.icon}</md-icon>
                            `)}
                        `)}
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                    </div>
                    <!--  -->

                    <!--  -->
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                        ${emojis.slice(0, 1).map(emoji=>html`
                            <h1>${emoji.category}</h1>
                            ${emoji.children.map(emoji=>html`
                                <md-emoji>${emoji.emoji}</md-emoji>
                            `)}
                        `)}
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                    </div>
                    <!--  -->

                    <!--  -->
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                        <div class="md-typography--display-large">Display Large</div>
                        <div class="md-typography--display-small">Display Small</div>
                        <div class="md-typography--headline-large">Headline Large</div>
                        <div class="md-typography--headline-medium">Headline Medium</div>
                        <div class="md-typography--headline-small">Headline Small</div>
                        <div class="md-typography--title-large">Title Large</div>
                        <div class="md-typography--title-medium">Title Medium</div>
                        <div class="md-typography--title-small">Title Small</div>
                        <div class="md-typography--body-large">Body Large</div>
                        <div class="md-typography--body-medium">Body Medium</div>
                        <div class="md-typography--body-small">Body Small</div>
                        <div class="md-typography--label-large">Label Large</div>
                        <div class="md-typography--label-medium">Label Medium</div>
                        <div class="md-typography--label-small">Label Small</div>
                        <div class="md-typography--body-large">Body Large</div>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                    </div>
                    <!--  -->

                    <!--  -->
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                        <md-image style="width:113.77777777777777px;" ratio="16/9" src="https://api.dicebear.com/7.x/icons/svg?seed=1&&scale=50"></md-image>
                        <md-image style="width:113.77777777777777px;" ratio="3/2" src="https://api.dicebear.com/7.x/icons/svg?seed=2&&scale=50"></md-image>
                        <md-image style="width:113.77777777777777px;" ratio="4/3" src="https://api.dicebear.com/7.x/icons/svg?seed=3&&scale=50"></md-image>
                        <md-image style="width:113.77777777777777px;" ratio="1/1" src="https://api.dicebear.com/7.x/icons/svg?seed=4&&scale=50"></md-image>
                        <md-image style="width:113.77777777777777px;" ratio="3/4" src="https://api.dicebear.com/7.x/icons/svg?seed=5&&scale=50"></md-image>
                        <md-image style="width:113.77777777777777px;" ratio="2/3" src="https://api.dicebear.com/7.x/icons/svg?seed=6&&scale=50"></md-image>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                        <md-image style="width:113.77777777777777px;" shape ratio="16/9" src="https://api.dicebear.com/7.x/icons/svg?seed=7&&scale=50"></md-image>
                        <md-image style="width:113.77777777777777px;" shape ratio="3/2" src="https://api.dicebear.com/7.x/icons/svg?seed=8&&scale=50"></md-image>
                        <md-image style="width:113.77777777777777px;" shape ratio="4/3" src="https://api.dicebear.com/7.x/icons/svg?seed=9&&scale=50"></md-image>
                        <md-image style="width:113.77777777777777px;" shape ratio="1/1" src="https://api.dicebear.com/7.x/icons/svg?seed=10&&scale=50"></md-image>
                        <md-image style="width:113.77777777777777px;" shape ratio="3/4" src="https://api.dicebear.com/7.x/icons/svg?seed=11&&scale=50"></md-image>
                        <md-image style="width:113.77777777777777px;" shape ratio="2/3" src="https://api.dicebear.com/7.x/icons/svg?seed=12&&scale=50"></md-image>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                    </div>
                    <!--  -->

                    <!--  -->
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                        <md-button appearance="elevated" label="Label"></md-button>
                        <md-button appearance="filled" label="Label"></md-button>
                        <md-button appearance="filled-tonal" label="Label"></md-button>
                        <md-button appearance="outlined" label="Label"></md-button>
                        <md-button label="Label"></md-button>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                        <md-button appearance="elevated" icon="image" label="Label"></md-button>
                        <md-button appearance="filled" icon="image" label="Label"></md-button>
                        <md-button appearance="filled-tonal" icon="image" label="Label"></md-button>
                        <md-button appearance="outlined" icon="image" label="Label"></md-button>
                        <md-button icon="image" label="Label"></md-button>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                    </div>
                    <!--  -->

                    <!--  -->
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                        <md-fab size="small" icon="image"></md-fab>
                        <md-fab icon="image"></md-fab>
                        <md-fab size="large" icon="image"></md-fab>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                        <md-fab appearance="extended" icon="image" label="Label"></md-fab>
                        <md-fab appearance="extended" label="Label"></md-fab>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                    </div>
                    <!--  -->

                    <!--  -->
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                        <md-icon-button appearance="filled" icon="image"></md-icon-button>
                        <md-icon-button appearance="filled-tonal" icon="image"></md-icon-button>
                        <md-icon-button appearance="outlined" icon="image"></md-icon-button>
                        <md-icon-button icon="image"></md-icon-button>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                        <md-icon-button toggle appearance="filled" icon="image"></md-icon-button>
                        <md-icon-button toggle appearance="filled-tonal" icon="image"></md-icon-button>
                        <md-icon-button toggle appearance="outlined" icon="image"></md-icon-button>
                        <md-icon-button toggle icon="image"></md-icon-button>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                        <md-icon-button toggle activated appearance="filled" icon="image"></md-icon-button>
                        <md-icon-button toggle activated appearance="filled-tonal" icon="image"></md-icon-button>
                        <md-icon-button toggle activated appearance="outlined" icon="image"></md-icon-button>
                        <md-icon-button toggle activated icon="image"></md-icon-button>
                    </div>
                    <!--  -->

                    <!--  -->
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                        <md-segmented-button type="single-select" .items="${[
                            {label:"Label 1", activated:true},
                            {label:"Label 2"},
                            {label:"Label 3"},
                        ]}"></md-segmented-button>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                        <md-segmented-button type="multi-select" .items="${[
                            {label:"Label 1", activated:true},
                            {label:"Label 2", activated:true},
                            {label:"Label 3"},
                        ]}"></md-segmented-button>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                    </div>
                    <!--  -->

                    <!--  -->
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                        <md-checkbox></md-checkbox>
                        <md-checkbox indeterminate></md-checkbox>
                        <md-checkbox checked></md-checkbox>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                    </div>
                    <!--  -->

                    <!--  -->
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                        <md-radio-button name="radio-button"></md-radio-button>
                        <md-radio-button name="radio-button" checked></md-radio-button>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                    </div>
                    <!--  -->

                    <!--  -->
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                        <md-switch></md-switch>
                        <md-switch checked></md-switch>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                    </div>
                    <!--  -->

                    <!--  -->
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                        <md-badge></md-badge>
                        <md-badge label="1"></md-badge>
                        <md-badge label="1000"></md-badge>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                    </div>
                    <!--  -->

                    <!--  -->
                    <div class="md-layout__column--expanded4 md-layout__column--medium8 md-layout__column--compact4">
                        <md-list size="three-line" .items="${[
                            { label:'Headline', supportingText:'Supporting text that is long enough to fill up multiple lines', leadingItems:[{component:'avatar', src:'https://api.dicebear.com/7.x/icons/svg?seed=1&&scale=50'}], trailingItems:[] },
                            { label:'Headline', supportingText:'Supporting text that is long enough to fill up multiple lines', leadingItems:[{component:'avatar', src:'https://api.dicebear.com/7.x/icons/svg?seed=1&&scale=50'}], trailingItems:[{component:'checkbox'}] },

                            { label:'Headline', supportingText:'Supporting text that is long enough to fill up multiple lines', leadingItems:[{component:'image', src:'https://api.dicebear.com/7.x/icons/svg?seed=1&&scale=50'}], trailingItems:[] },
                            { label:'Headline', supportingText:'Supporting text that is long enough to fill up multiple lines', leadingItems:[{component:'image', src:'https://api.dicebear.com/7.x/icons/svg?seed=1&&scale=50'}], trailingItems:[{component:'checkbox'}] },

                            { label:'Headline', supportingText:'Supporting text that is long enough to fill up multiple lines', leadingItems:[{component:'video', src:'https://api.dicebear.com/7.x/icons/svg?seed=1&&scale=50'}], trailingItems:[] },
                            { label:'Headline', supportingText:'Supporting text that is long enough to fill up multiple lines', leadingItems:[{component:'video', src:'https://api.dicebear.com/7.x/icons/svg?seed=1&&scale=50'}], trailingItems:[{component:'checkbox'}] },

                            { label:'Headline', supportingText:'Supporting text that is long enough to fill up multiple lines', leadingItems:[{component:'icon', icon:'image'}], trailingItems:[] },
                            { label:'Headline', supportingText:'Supporting text that is long enough to fill up multiple lines', leadingItems:[{component:'icon', icon:'image'}], trailingItems:[{component:'checkbox'}] },

                            { label:'Headline', supportingText:'Supporting text that is long enough to fill up multiple lines', leadingItems:[], trailingItems:[] },
                            { label:'Headline', supportingText:'Supporting text that is long enough to fill up multiple lines', leadingItems:[], trailingItems:[{component:'checkbox'}] },

                            { label:'Headline', supportingText:'Supporting text that is long enough to fill up multiple lines', leadingItems:[{component:'checkbox'}], trailingItems:[] },
                            { label:'Headline', supportingText:'Supporting text that is long enough to fill up multiple lines', leadingItems:[{component:'checkbox'}], trailingItems:[{component:'supporting-text',supportingText:'100+'}] },

                            { label:'Headline', supportingText:'Supporting text that is long enough to fill up multiple lines', leadingItems:[{component:'radio-button'}], trailingItems:[] },
                            { label:'Headline', supportingText:'Supporting text that is long enough to fill up multiple lines', leadingItems:[{component:'radio-button'}], trailingItems:[{component:'supporting-text',supportingText:'100+'}] },

                            { label:'Headline', supportingText:'Supporting text that is long enough to fill up multiple lines', leadingItems:[], trailingItems:[{component:'switch'}] },
                            { label:'Headline', supportingText:'Supporting text that is long enough to fill up multiple lines', leadingItems:[{component:'icon', icon:'image'}], trailingItems:[{component:'switch'}] },

                        ]}"></md-list>
                    </div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium8 md-layout__column--compact4">
                        <md-list size="two-line" .items="${[
                            { label:'Headline', supportingText:'Supporting text', leadingItems:[{component:'avatar', src:'https://api.dicebear.com/7.x/icons/svg?seed=1&&scale=50'}], trailingItems:[] },
                            { label:'Headline', supportingText:'Supporting text', leadingItems:[{component:'avatar', src:'https://api.dicebear.com/7.x/icons/svg?seed=1&&scale=50'}], trailingItems:[{component:'checkbox'}] },

                            { label:'Headline', supportingText:'Supporting text', leadingItems:[{component:'image', src:'https://api.dicebear.com/7.x/icons/svg?seed=1&&scale=50'}], trailingItems:[] },
                            { label:'Headline', supportingText:'Supporting text', leadingItems:[{component:'image', src:'https://api.dicebear.com/7.x/icons/svg?seed=1&&scale=50'}], trailingItems:[{component:'checkbox'}] },

                            { label:'Headline', supportingText:'Supporting text', leadingItems:[{component:'video', src:'https://api.dicebear.com/7.x/icons/svg?seed=1&&scale=50'}], trailingItems:[] },
                            { label:'Headline', supportingText:'Supporting text', leadingItems:[{component:'video', src:'https://api.dicebear.com/7.x/icons/svg?seed=1&&scale=50'}], trailingItems:[{component:'checkbox'}] },

                            { label:'Headline', supportingText:'Supporting text', leadingItems:[{component:'icon', icon:'image'}], trailingItems:[] },
                            { label:'Headline', supportingText:'Supporting text', leadingItems:[{component:'icon', icon:'image'}], trailingItems:[{component:'checkbox'}] },

                            { label:'Headline', supportingText:'Supporting text', leadingItems:[], trailingItems:[] },
                            { label:'Headline', supportingText:'Supporting text', leadingItems:[], trailingItems:[{component:'checkbox'}] },

                            { label:'Headline', supportingText:'Supporting text', leadingItems:[{component:'checkbox'}], trailingItems:[] },
                            { label:'Headline', supportingText:'Supporting text', leadingItems:[{component:'checkbox'}], trailingItems:[{component:'supporting-text',supportingText:'100+'}] },

                            { label:'Headline', supportingText:'Supporting text', leadingItems:[{component:'radio-button'}], trailingItems:[] },
                            { label:'Headline', supportingText:'Supporting text', leadingItems:[{component:'radio-button'}], trailingItems:[{component:'supporting-text',supportingText:'100+'}] },

                            { label:'Headline', supportingText:'Supporting text', leadingItems:[], trailingItems:[{component:'switch'}] },
                            { label:'Headline', supportingText:'Supporting text', leadingItems:[{component:'icon', icon:'image'}], trailingItems:[{component:'switch'}] },

                        ]}"></md-list>
                    </div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium8 md-layout__column--compact4">
                        <md-list .items="${[
                            { label:'Headline', supportingText:'', leadingItems:[{component:'avatar', src:'https://api.dicebear.com/7.x/icons/svg?seed=1&&scale=50'}], trailingItems:[] },
                            { label:'Headline', supportingText:'', leadingItems:[{component:'avatar', src:'https://api.dicebear.com/7.x/icons/svg?seed=1&&scale=50'}], trailingItems:[{component:'checkbox'}] },

                            { label:'Headline', supportingText:'', leadingItems:[{component:'image', src:'https://api.dicebear.com/7.x/icons/svg?seed=1&&scale=50'}], trailingItems:[] },
                            { label:'Headline', supportingText:'', leadingItems:[{component:'image', src:'https://api.dicebear.com/7.x/icons/svg?seed=1&&scale=50'}], trailingItems:[{component:'checkbox'}] },

                            { label:'Headline', supportingText:'', leadingItems:[{component:'video', src:'https://api.dicebear.com/7.x/icons/svg?seed=1&&scale=50'}], trailingItems:[] },
                            { label:'Headline', supportingText:'', leadingItems:[{component:'video', src:'https://api.dicebear.com/7.x/icons/svg?seed=1&&scale=50'}], trailingItems:[{component:'checkbox'}] },

                            { label:'Headline', supportingText:'', leadingItems:[{component:'icon', icon:'image'}], trailingItems:[] },
                            { label:'Headline', supportingText:'', leadingItems:[{component:'icon', icon:'image'}], trailingItems:[{component:'checkbox'}] },

                            { label:'Headline', supportingText:'', leadingItems:[], trailingItems:[] },
                            { label:'Headline', supportingText:'', leadingItems:[], trailingItems:[{component:'checkbox'}] },

                            { label:'Headline', supportingText:'', leadingItems:[{component:'checkbox'}], trailingItems:[] },
                            { label:'Headline', supportingText:'', leadingItems:[{component:'checkbox'}], trailingItems:[{component:'supporting-text',supportingText:'100+'}] },

                            { label:'Headline', supportingText:'', leadingItems:[{component:'radio-button'}], trailingItems:[] },
                            { label:'Headline', supportingText:'', leadingItems:[{component:'radio-button'}], trailingItems:[{component:'supporting-text',supportingText:'100+'}] },

                            { label:'Headline', supportingText:'', leadingItems:[], trailingItems:[{component:'switch'}] },
                            { label:'Headline', supportingText:'', leadingItems:[{component:'icon', icon:'image'}], trailingItems:[{component:'switch'}] },

                        ]}"></md-list>
                    </div>
                    <!--  -->

                    <!--  -->
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                    </div>
                    <!--  -->
                </div>
            <!-- </div> -->
        `
    }
}

customElements.define("example-component", ExampleComponent);

export default document.createElement("example-component");
