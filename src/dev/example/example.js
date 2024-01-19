import { LitElement, html } from "lit";

class ExampleComponent extends LitElement {
    createRenderRoot() {
        return this;
    }

    render() {
        return html`
            <div class="md-layout__grid">
                <!--  -->
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-image style="width:88px;" ratio="16/9" src="https://api.dicebear.com/7.x/icons/svg?seed=17&scale=50"></md-image>
                    <md-image style="width:88px;" ratio="3/2" src="https://api.dicebear.com/7.x/icons/svg?seed=1&scale=50"></md-image>
                    <md-image style="width:88px;" ratio="4/3" src="https://api.dicebear.com/7.x/icons/svg?seed=2&scale=50"></md-image>
                    <md-image style="width:88px;" ratio="1/1" src="https://api.dicebear.com/7.x/icons/svg?seed=3&scale=50"></md-image>
                    <md-image style="width:88px;" ratio="3/4" src="https://api.dicebear.com/7.x/icons/svg?seed=4&scale=50"></md-image>
                    <md-image style="width:88px;" ratio="2/3" src="https://api.dicebear.com/7.x/icons/svg?seed=5&scale=50"></md-image>
                </div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-image style="width:88px;" ratio="16/9" shape src="https://api.dicebear.com/7.x/icons/svg?seed=1&scale=50"></md-image>
                    <md-image style="width:88px;" ratio="3/2" shape src="https://api.dicebear.com/7.x/icons/svg?seed=1&scale=50"></md-image>
                    <md-image style="width:88px;" ratio="4/3" shape src="https://api.dicebear.com/7.x/icons/svg?seed=2&scale=50"></md-image>
                    <md-image style="width:88px;" ratio="1/1" shape src="https://api.dicebear.com/7.x/icons/svg?seed=3&scale=50"></md-image>
                    <md-image style="width:88px;" ratio="3/4" shape src="https://api.dicebear.com/7.x/icons/svg?seed=4&scale=50"></md-image>
                    <md-image style="width:88px;" ratio="2/3" shape src="https://api.dicebear.com/7.x/icons/svg?seed=5&scale=50"></md-image>
                </div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"></div>
                <!--  -->

                <!--  -->
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-button ui="elevated" label="Label"></md-button>
                    <md-button ui="filled" label="Label"></md-button>
                    <md-button ui="filled-tonal" label="Label"></md-button>
                    <md-button ui="outlined" label="Label"></md-button>
                    <md-button label="Label"></md-button>
                </div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-button ui="elevated" icon="image" label="Label"></md-button>
                    <md-button ui="filled" icon="image" label="Label"></md-button>
                    <md-button ui="filled-tonal" icon="image" label="Label"></md-button>
                    <md-button ui="outlined" icon="image" label="Label"></md-button>
                    <md-button icon="image" label="Label"></md-button>
                </div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"></div>
                <!--  -->

                <!--  -->
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-fab size="small" icon="image"></md-fab>
                    <md-fab icon="image"></md-fab>
                    <md-fab size="large" icon="image"></md-fab>
                </div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-fab extended icon="image" label="Label"></md-fab>
                    <md-fab extended label="Label"></md-fab>
                </div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"></div>
                <!--  -->

                <!--  -->
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-icon-button ui="filled" icon="image"></md-icon-button>
                    <md-icon-button ui="filled-tonal" icon="image"></md-icon-button>
                    <md-icon-button ui="outlined" icon="image"></md-icon-button>
                    <md-icon-button icon="image"></md-icon-button>
                </div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-icon-button toggle ui="filled" icon="image"></md-icon-button>
                    <md-icon-button toggle ui="filled-tonal" icon="image"></md-icon-button>
                    <md-icon-button toggle ui="outlined" icon="image"></md-icon-button>
                    <md-icon-button toggle icon="image"></md-icon-button>
                </div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-icon-button toggle activated ui="filled" icon="image"></md-icon-button>
                    <md-icon-button toggle activated ui="filled-tonal" icon="image"></md-icon-button>
                    <md-icon-button toggle activated ui="outlined" icon="image"></md-icon-button>
                    <md-icon-button toggle activated icon="image"></md-icon-button>
                </div>
                <!--  -->

                <!--  -->
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-segmented-button
                        items='[
                        {"label":"Label","activated":true},
                        {"label":"Label"},
                        {"label":"Label"}
                    ]'
                    ></md-segmented-button>
                </div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-segmented-button
                        type="multi-select"
                        items='[
                        {"label":"Label","activated":true},
                        {"label":"Label","activated":true},
                        {"label":"Label"}
                    ]'
                    ></md-segmented-button>
                </div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"></div>
                <!--  -->

                <!--  -->
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-checkbox></md-checkbox>
                    <md-checkbox indeterminate></md-checkbox>
                    <md-checkbox checked></md-checkbox>
                </div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"></div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"></div>
                <!--  -->

                <!--  -->
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-radio-button name="radio-button"></md-radio-button>
                    <md-radio-button name="radio-button" checked></md-radio-button>
                </div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"></div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"></div>
                <!--  -->

                <!--  -->
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-switch></md-switch>
                    <md-switch checked></md-switch>
                </div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"></div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"></div>
                <!--  -->

                <!--  -->
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-badge></md-badge>
                    <md-badge label="1"></md-badge>
                    <md-badge label="1000"></md-badge>
                </div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"></div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"></div>
                <!--  -->

                <!--  -->
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-list
                        .items="${[
                            { label: "Label", supportingText: "", leadingItems: [{ item: "md-avatar", src: "https://api.dicebear.com/7.x/icons/svg?seed=2&scale=50" }], trailingItems: [] },
                            { label: "Label", supportingText: "", leadingItems: [{ item: "md-image", src: "https://api.dicebear.com/7.x/icons/svg?seed=3&scale=50" }], trailingItems: [] },
                            { label: "Label", supportingText: "", leadingItems: [{ item: "md-video", src: "https://api.dicebear.com/7.x/icons/svg?seed=4&scale=50" }], trailingItems: [] },
                            { label: "Label", supportingText: "", leadingItems: [{ item: "md-icon", icon: "image" }], trailingItems: [] },
                            { label: "Label", supportingText: "", leadingItems: [], trailingItems: [] },
                            { label: "Label", supportingText: "", leadingItems: [{ item: "md-checkbox" }], trailingItems: [] },
                            { label: "Label", supportingText: "", leadingItems: [{ item: "md-radio-button" }], trailingItems: [] },
                            { label: "Label", supportingText: "", leadingItems: [], trailingItems: [{ item: "md-switch" }] },
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-list
                        .items="${[
                            { label: "Label", supportingText: "", leadingItems: [{ item: "md-avatar", src: "https://api.dicebear.com/7.x/icons/svg?seed=5&scale=50" }], trailingItems: [{ item: "md-checkbox" }] },
                            { label: "Label", supportingText: "", leadingItems: [{ item: "md-image", src: "https://api.dicebear.com/7.x/icons/svg?seed=6&scale=50" }], trailingItems: [{ item: "md-checkbox" }] },
                            { label: "Label", supportingText: "", leadingItems: [{ item: "md-video", src: "https://api.dicebear.com/7.x/icons/svg?seed=7&scale=50" }], trailingItems: [{ item: "md-checkbox" }] },
                            { label: "Label", supportingText: "", leadingItems: [{ item: "md-icon", icon: "image" }], trailingItems: [{ item: "md-checkbox" }] },
                            { label: "Label", supportingText: "", leadingItems: [], trailingItems: [{ item: "md-checkbox" }] },
                            { label: "Label", supportingText: "", leadingItems: [{ item: "md-checkbox" }], trailingItems: [{ item: "md-supporting-text", supportingText: "100+" }] },
                            { label: "Label", supportingText: "", leadingItems: [{ item: "md-radio-button" }], trailingItems: [{ item: "md-supporting-text", supportingText: "100+" }] },
                            { label: "Label", supportingText: "", leadingItems: [{ item: "md-icon", icon: "image" }], trailingItems: [{ item: "md-switch" }] },
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"></div>

                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-list
                        ui="two-line"
                        .items="${[
                            { label: "Label", supportingText: "Supporting text", leadingItems: [{ item: "md-avatar", src: "https://api.dicebear.com/7.x/icons/svg?seed=8&scale=50" }], trailingItems: [] },
                            { label: "Label", supportingText: "Supporting text", leadingItems: [{ item: "md-image", src: "https://api.dicebear.com/7.x/icons/svg?seed=9&scale=50" }], trailingItems: [] },
                            { label: "Label", supportingText: "Supporting text", leadingItems: [{ item: "md-video", src: "https://api.dicebear.com/7.x/icons/svg?seed=10&scale=50" }], trailingItems: [] },
                            { label: "Label", supportingText: "Supporting text", leadingItems: [{ item: "md-icon", icon: "image" }], trailingItems: [] },
                            { label: "Label", supportingText: "Supporting text", leadingItems: [], trailingItems: [] },
                            { label: "Label", supportingText: "Supporting text", leadingItems: [{ item: "md-checkbox" }], trailingItems: [] },
                            { label: "Label", supportingText: "Supporting text", leadingItems: [{ item: "md-radio-button" }], trailingItems: [] },
                            { label: "Label", supportingText: "Supporting text", leadingItems: [], trailingItems: [{ item: "md-switch" }] },
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-list
                        ui="two-line"
                        .items="${[
                            { label: "Label", supportingText: "Supporting text", leadingItems: [{ item: "md-avatar", src: "https://api.dicebear.com/7.x/icons/svg?seed=11&scale=50" }], trailingItems: [{ item: "md-checkbox" }] },
                            { label: "Label", supportingText: "Supporting text", leadingItems: [{ item: "md-image", src: "https://api.dicebear.com/7.x/icons/svg?seed=12&scale=50" }], trailingItems: [{ item: "md-checkbox" }] },
                            { label: "Label", supportingText: "Supporting text", leadingItems: [{ item: "md-video", src: "https://api.dicebear.com/7.x/icons/svg?seed=13&scale=50" }], trailingItems: [{ item: "md-checkbox" }] },
                            { label: "Label", supportingText: "Supporting text", leadingItems: [{ item: "md-icon", icon: "image" }], trailingItems: [{ item: "md-checkbox" }] },
                            { label: "Label", supportingText: "Supporting text", leadingItems: [], trailingItems: [{ item: "md-checkbox" }] },
                            { label: "Label", supportingText: "Supporting text", leadingItems: [{ item: "md-checkbox" }], trailingItems: [{ item: "md-supporting-text", supportingText: "100+" }] },
                            { label: "Label", supportingText: "Supporting text", leadingItems: [{ item: "md-radio-button" }], trailingItems: [{ item: "md-supporting-text", supportingText: "100+" }] },
                            { label: "Label", supportingText: "Supporting text", leadingItems: [{ item: "md-icon", icon: "image" }], trailingItems: [{ item: "md-switch" }] },
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"></div>

                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-list
                        ui="three-line"
                        .items="${[
                            { label: "Label", supportingText: "Supporting text that is long enough to fill up multiple lines", leadingItems: [{ item: "md-avatar", src: "https://api.dicebear.com/7.x/icons/svg?seed=14&scale=50" }], trailingItems: [] },
                            { label: "Label", supportingText: "Supporting text that is long enough to fill up multiple lines", leadingItems: [{ item: "md-image", src: "https://api.dicebear.com/7.x/icons/svg?seed=15&scale=50" }], trailingItems: [] },
                            { label: "Label", supportingText: "Supporting text that is long enough to fill up multiple lines", leadingItems: [{ item: "md-video", src: "https://api.dicebear.com/7.x/icons/svg?seed=16&scale=50" }], trailingItems: [] },
                            { label: "Label", supportingText: "Supporting text that is long enough to fill up multiple lines", leadingItems: [{ item: "md-icon", icon: "image" }], trailingItems: [] },
                            { label: "Label", supportingText: "Supporting text that is long enough to fill up multiple lines", leadingItems: [], trailingItems: [] },
                            { label: "Label", supportingText: "Supporting text that is long enough to fill up multiple lines", leadingItems: [{ item: "md-checkbox" }], trailingItems: [] },
                            { label: "Label", supportingText: "Supporting text that is long enough to fill up multiple lines", leadingItems: [{ item: "md-radio-button" }], trailingItems: [] },
                            { label: "Label", supportingText: "Supporting text that is long enough to fill up multiple lines", leadingItems: [], trailingItems: [{ item: "md-switch" }] },
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-list
                        ui="three-line"
                        .items="${[
                            { label: "Label", supportingText: "Supporting text that is long enough to fill up multiple lines", leadingItems: [{ item: "md-avatar", src: "https://api.dicebear.com/7.x/icons/svg?seed=0&scale=50" }], trailingItems: [{ item: "md-checkbox" }] },
                            { label: "Label", supportingText: "Supporting text that is long enough to fill up multiple lines", leadingItems: [{ item: "md-image", src: "https://api.dicebear.com/7.x/icons/svg?seed=18&scale=50" }], trailingItems: [{ item: "md-checkbox" }] },
                            { label: "Label", supportingText: "Supporting text that is long enough to fill up multiple lines", leadingItems: [{ item: "md-video", src: "https://api.dicebear.com/7.x/icons/svg?seed=19&scale=50" }], trailingItems: [{ item: "md-checkbox" }] },
                            { label: "Label", supportingText: "Supporting text that is long enough to fill up multiple lines", leadingItems: [{ item: "md-icon", icon: "image" }], trailingItems: [{ item: "md-checkbox" }] },
                            { label: "Label", supportingText: "Supporting text that is long enough to fill up multiple lines", leadingItems: [], trailingItems: [{ item: "md-checkbox" }] },
                            { label: "Label", supportingText: "Supporting text that is long enough to fill up multiple lines", leadingItems: [{ item: "md-checkbox" }], trailingItems: [{ item: "md-supporting-text", supportingText: "100+" }] },
                            { label: "Label", supportingText: "Supporting text that is long enough to fill up multiple lines", leadingItems: [{ item: "md-radio-button" }], trailingItems: [{ item: "md-supporting-text", supportingText: "100+" }] },
                            { label: "Label", supportingText: "Supporting text that is long enough to fill up multiple lines", leadingItems: [{ item: "md-icon", icon: "image" }], trailingItems: [{ item: "md-switch" }] },
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"></div>
                <!--  -->

                <!--  -->
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-list class="md-menu__list" .items="${[{ label: "Label", leadingItems: [{ item: "md-icon", icon: "image" }], trailingItems: [{ item: "md-supporting-text", supportingText: "A" }] }, { label: "Label", leadingItems: [{ item: "md-icon", icon: "image" }], trailingItems: [{ item: "md-supporting-text", supportingText: "A" }] }, { label: "Label", leadingItems: [{ item: "md-icon", icon: "image" }], trailingItems: [{ item: "md-supporting-text", supportingText: "A" }] }, { divider: true }, { label: "Label", leadingItems: [{ item: "md-icon", icon: "image" }], trailingItems: [{ item: "md-supporting-text", supportingText: "A" }] }]}"></md-list>
                </div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"></div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"></div>
                <!--  -->

                <!--  -->
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-list
                        class="md-navigation-bar__list"
                        activatable
                        .items="${[
                            { label: "Label", activated: true, leadingItems: [{ item: "md-icon", icon: "image" }] },
                            { label: "Label", leadingItems: [{ item: "md-icon", icon: "image" }] },
                            { label: "Label", badge: 1, leadingItems: [{ item: "md-icon", icon: "image" }] },
                            { label: "Label", badge: "", leadingItems: [{ item: "md-icon", icon: "image" }] },
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-list class="md-navigation-bar__list" activatable .items="${[{ activated: true, leadingItems: [{ item: "md-icon", icon: "image" }] }, { leadingItems: [{ item: "md-icon", icon: "image" }] }, { badge: 1, leadingItems: [{ item: "md-icon", icon: "image" }] }, { badge: "", leadingItems: [{ item: "md-icon", icon: "image" }] }]}"></md-list>
                </div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"></div>
                <!--  -->

                <!--  -->
                <!-- <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-panel type="dialog"></md-panel>
                    <md-panel type="drawer" position="top"></md-panel>
                    <md-panel type="drawer" position="right"></md-panel>
                    <md-panel type="drawer" position="bottom"></md-panel>
                    <md-panel type="drawer" position="left"></md-panel>
                </div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                </div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                </div> -->
                <!--  -->

                <!--  -->
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"></div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"></div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"></div>
                <!--  -->
            </div>
        `;
    }
}

customElements.define("example-component", ExampleComponent);

export default document.createElement("example-component");
