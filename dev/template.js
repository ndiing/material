import { html, nothing } from "lit"
import { choose } from "lit/directives/choose.js"
import { classMap } from "lit/directives/class-map.js"
import { ifDefined } from "lit/directives/if-defined.js"
import { styleMap } from "lit/directives/style-map.js"

function renderComponent(item) {
    /* prettier-ignore */
    return choose(item.component, [
    ], () => nothing)
}

export { renderComponent }
