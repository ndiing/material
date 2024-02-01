import { html, nothing } from "lit";
import { MDComponent } from "../base/component";

class MDLayoutGridItemComponent extends MDComponent {
    static properties = {
        expanded: { type: String },
        medium: { type: String },
        compact: { type: String },
    };

    constructor() {
        super();

        // default
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-layout__grid-item");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-layout__grid-item");
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {
        if (changedProperties.has("expanded")) {
            for (let i = 0; i < 12; i++) {
                this.classList.remove(`md-layout__grid-item--expanded${i}`);
            }
            if (this.expanded) {
                this.classList.add(`md-layout__grid-item--expanded${this.expanded}`);
            }
        }
        if (changedProperties.has("medium")) {
            for (let i = 0; i < 12; i++) {
                this.classList.remove(`md-layout__grid-item--medium${i}`);
            }
            if (this.medium) {
                this.classList.add(`md-layout__grid-item--medium${this.medium}`);
            }
        }
        if (changedProperties.has("compact")) {
            for (let i = 0; i < 12; i++) {
                this.classList.remove(`md-layout__grid-item--compact${i}`);
            }
            if (this.compact) {
                this.classList.add(`md-layout__grid-item--compact${this.compact}`);
            }
        }
    }

    render() {}
}

customElements.define("md-layout-grid-item", MDLayoutGridItemComponent);

export { MDLayoutGridItemComponent };

class MDLayoutGridComponent extends MDComponent {
    static properties = {};

    constructor() {
        super();

        // default
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-layout__grid");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-layout__grid");
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {}

    render() {}
}

customElements.define("md-layout-grid", MDLayoutGridComponent);

export { MDLayoutGridComponent };

class MDLayoutBorderItemComponent extends MDComponent {
    static properties = {
        region: { type: String },
        open: { type: Boolean, reflect: true },
    };

    constructor() {
        super();

        // default
        this.region = "center";
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-layout__border-item");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-layout__border-item");
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {
        if (changedProperties.has("region")) {
            this.classList.remove(`md-layout__border-item--north`);
            this.classList.remove(`md-layout__border-item--south`);
            this.classList.remove(`md-layout__border-item--west`);
            this.classList.remove(`md-layout__border-item--east`);
            this.classList.remove(`md-layout__border-item--center`);
            if (this.region) {
                this.classList.add(`md-layout__border-item--${this.region}`);
            }
        }
    }

    render() {}

    show() {
        this.open = true;
    }

    close() {
        this.open = false;
    }

    toggle() {
        if (this.open) {
            this.close();
        } else {
            this.show();
        }
    }
}

customElements.define("md-layout-border-item", MDLayoutBorderItemComponent);

export { MDLayoutBorderItemComponent };

class MDLayoutBorderComponent extends MDComponent {
    static properties = {};

    constructor() {
        super();

        // default
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-layout__border");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-layout__border");
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {}

    render() {}
}

customElements.define("md-layout-border", MDLayoutBorderComponent);

export { MDLayoutBorderComponent };

class MDLayoutComponent extends MDComponent {
    static properties = {};

    constructor() {
        super();

        // default
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-layout");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-layout");
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {}

    render() {}
}

customElements.define("md-layout", MDLayoutComponent);

export { MDLayoutComponent };

