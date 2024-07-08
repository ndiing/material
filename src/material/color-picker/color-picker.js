import { html } from "lit";
import { MDSheetComponent } from "../sheet/sheet.js";
import { hexToHsla, hslaToRgba, rgbaToHex, rgbaToHsla } from "../functions/functions.js";
import { MDPopperController } from "../popper/popper.js";

/**
 * {{description}}
 * @element md-color-picker
 * @extends MDSheetComponent
 * @fires MDColorPickerComponent#onColorPickerIconButtonClick - {{description}}
 * @fires MDColorPickerComponent#onColorPickerButtonClick - {{description}}
 * @fires MDColorPickerComponent#onColorPickerSelection - {{description}}
 * @fires MDColorPickerComponent#onColorPickerIconButtonPrevClick - {{description}}
 * @fires MDColorPickerComponent#onColorPickerSelection - {{description}}
 * @fires MDColorPickerComponent#onColorPickerIconButtonNextClick - {{description}}
 * @fires MDColorPickerComponent#onColorPickerButtonLabelClick - {{description}}
 * @fires MDColorPickerComponent#onColorPickerButtonCancelClick - {{description}}
 * @fires MDColorPickerComponent#onColorPickerButtonOkClick - {{description}}
 * @fires MDColorPickerComponent#onColorPickerSelection - {{description}}
 * @fires MDColorPickerComponent#onColorPickerGradientTrackPointerdown - {{description}}
 * @fires MDColorPickerComponent#onColorPickerSelection - {{description}}
 * @fires MDColorPickerComponent#onColorPickerGradientTrackPointermove - {{description}}
 * @fires MDColorPickerComponent#onColorPickerSelection - {{description}}
 * @fires MDColorPickerComponent#onColorPickerGradientTrackPointerup - {{description}}
 * @fires MDColorPickerComponent#onColorPickerSelection - {{description}}
 * @fires MDColorPickerComponent#onColorPickerHueNativeInput - {{description}}
 * @fires MDColorPickerComponent#onColorPickerSelection - {{description}}
 * @fires MDColorPickerComponent#onColorPickerOpacityNativeInput - {{description}}
 */
class MDColorPickerComponent extends MDSheetComponent {
    /**
     * {{description}}
     * @property {String} value - {{description}}
     */
    static properties = {
        ...MDSheetComponent.properties,
        value: { type: String },
    };

    /**
     * {{description}}
     */
    get body() {
        /* prettier-ignore */
        return [this.renderMain()];
    }

    /**
     * {{description}}
     */
    set body(value) {
        this._body = value;
    }

    /**
     * {{description}}
     */
    get leadingActions() {
        let label = this.selection.hex;
        return [{ name: "label", component: "button", label }];
    }

    /**
     * {{description}}
     */
    get actions() {
        return [{ component: "spacer" }, { name: "cancel", label: "Cancel" }, { name: "ok", label: "Ok" }];
    }

    /**
     * {{description}}
     */
    constructor() {
        super();

        this.selection = {};

        this.value = "#000000";

        this.handleColorPickerGradientTrackPointermove = this.handleColorPickerGradientTrackPointermove.bind(this);
        this.handleColorPickerGradientTrackPointerup = this.handleColorPickerGradientTrackPointerup.bind(this);

        this.popper = new MDPopperController(this, {});
    }

    renderMain() {
        /* prettier-ignore */
        return html`
            <div class="md-color-picker__main">
                <div class="md-color-picker__gradient">
                    <canvas 
                        class="md-color-picker__gradient-track"
                        width="360"
                        height="256"
                        @pointerdown="${this.handleColorPickerGradientTrackPointerdown}"
                    ></canvas>
                    <div class="md-color-picker__gradient-thumb"></div>
                </div>
                <label class="md-color-picker__hue">
                    <div class="md-color-picker__hue-label">Hue</div>
                    <input 
                        type="range" 
                        class="md-color-picker__hue-native"
                        min="0"
                        max="360"
                        .value="${this.selection.hue}"
                        @input="${this.handleColorPickerHueNativeInput}"
                    >
                </label>
                <label class="md-color-picker__opacity">
                    <div class="md-color-picker__opacity-label">Opacity</div>
                    <input 
                        type="range" 
                        class="md-color-picker__opacity-native"
                        min="0"
                        max="1"
                        step="0.01"
                        .value="${this.selection.alpha}"
                        @input="${this.handleColorPickerOpacityNativeInput}"
                    >
                </label>
            </div>
        `;
    }

    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card");
        this.classList.add("md-color-picker");

        this.defaultValue = this.value;

        this.updateHsla();

        await this.updateComplete;

        this.init();
    }

    async updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("value") && changedProperties.get("value")) {
            if (this.value) {
                await this.updateComplete;
                this.updateHsla();
                this.draw();
                this.updateThumb();
                this.requestUpdate();
            }
        }

        this.style.setProperty("--md-comp-color-picker-base", `rgb(${this.selection.red},${this.selection.green},${this.selection.blue})`);
    }

    /**
     * {{description}}
     */
    init() {
        this.canvas = this.querySelector(".md-color-picker__gradient-track");
        this.thumb = this.querySelector(".md-color-picker__gradient-thumb");

        this.context = this.canvas.getContext("2d", { willReadFrequently: true });

        this.draw();
        this.updateThumb();
    }

    /**
     * {{description}}
     */
    draw() {
        const ctx = this.context;

        ctx.fillStyle = `hsl(${this.selection.hue}deg, 100%, 50%)`;
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        const gradient2 = ctx.createLinearGradient(0, 0, this.canvas.width, 0);
        gradient2.addColorStop(0 + 1 / 100, "#ffffff");
        gradient2.addColorStop(1, "transparent");
        ctx.fillStyle = gradient2;
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        const gradient1 = ctx.createLinearGradient(0, 0, 0, this.canvas.height);
        gradient1.addColorStop(0, "transparent");
        gradient1.addColorStop(1, "#000000");
        ctx.fillStyle = gradient1;
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.data = ctx.getImageData(0, 0, this.canvas.width, this.canvas.height).data;
    }

    /**
     * {{description}}
     */
    findPixel(r, g, b) {
        const data = this.data;
        let xx;
        let yy;

        for (let y = 0; y < this.canvas.height; y++) {
            for (let x = 0; x < this.canvas.width; x++) {
                const index = (y * this.canvas.width + x) * 4;

                const red = data[index];
                const green = data[index + 1];
                const blue = data[index + 2];

                if (red === r && green === g && blue === b) {
                    xx = x;
                    yy = y;
                }
            }
        }

        return { x: xx, y: yy };
    }

    /**
     * {{description}}
     */
    updateHsla() {
        const { hue, saturation, lightness, red, green, blue, alpha } = hexToHsla(this.value);
        this.selection.hue = hue;
        this.selection.saturation = saturation;
        this.selection.lightness = lightness;
        this.selection.red = red;
        this.selection.green = green;
        this.selection.blue = blue;
        this.selection.alpha = alpha;
        this.selection.hex = this.value;
    }

    /**
     * {{description}}
     */
    updateThumb() {
        const { x, y } = this.findPixel(this.selection.red, this.selection.green, this.selection.blue);

        this.thumb.style.left = x + "px";
        this.thumb.style.top = y + "px";
    }

    /**
     * {{description}}
     */
    updateRgba(event) {
        const { width, height, left, top } = this.canvasRect;
        const x = Math.min(Math.max(0, event.clientX - left), width - 1 / 100);
        const y = Math.min(Math.max(0, event.clientY - top), height);

        const [red, green, blue] = this.context.getImageData(x, y, width, height).data;
        this.selection.red = red;
        this.selection.green = green;
        this.selection.blue = blue;

        const { saturation, lightness } = rgbaToHsla(this.selection.red, this.selection.green, this.selection.blue);
        this.selection.saturation = saturation;
        this.selection.lightness = lightness;

        this.selection.hex = rgbaToHex(this.selection.red, this.selection.green, this.selection.blue, this.selection.alpha);

        this.thumb.style.left = x + "px";
        this.thumb.style.top = y + "px";

        this.requestUpdate();
    }

    handleCardIconButtonClick(event) {
        if (event.currentTarget.name === "prev") {
            this.handleColorPickerIconButtonPrevClick(event);
        } else if (event.currentTarget.name === "next") {
            this.handleColorPickerIconButtonNextClick(event);
        }
        this.emit("onColorPickerIconButtonClick", event);
    }

    handleCardButtonClick(event) {
        if (event.currentTarget.name === "label") {
            this.handleColorPickerButtonLabelClick(event);
        } else if (event.currentTarget.name === "cancel") {
            this.handleColorPickerButtonCancelClick(event);
        } else if (event.currentTarget.name === "ok") {
            this.handleColorPickerButtonOkClick(event);
        }
        this.emit("onColorPickerButtonClick", event);
    }

    handleColorPickerIconButtonPrevClick(event) {
        this.emit("onColorPickerSelection", event);
        this.emit("onColorPickerIconButtonPrevClick", event);
    }

    handleColorPickerIconButtonNextClick(event) {
        this.emit("onColorPickerSelection", event);
        this.emit("onColorPickerIconButtonNextClick", event);
    }

    handleColorPickerButtonLabelClick(event) {
        this.emit("onColorPickerButtonLabelClick", event);
    }

    handleColorPickerButtonCancelClick(event) {
        this.value = this.defaultValue;
        this.updateHsla();
        this.draw();
        this.updateThumb();
        this.requestUpdate();

        this.emit("onColorPickerButtonCancelClick", event);
    }

    handleColorPickerButtonOkClick(event) {
        this.value = this.selection.hex;

        this.emit("onColorPickerButtonOkClick", event);
    }

    handleColorPickerGradientTrackPointerdown(event) {
        window.addEventListener("pointermove", this.handleColorPickerGradientTrackPointermove);
        window.addEventListener("pointerup", this.handleColorPickerGradientTrackPointerup);

        document.documentElement.classList.add("md-gesture--unselectable");

        this.canvasRect = this.canvas.getBoundingClientRect();

        this.updateRgba(event);

        this.emit("onColorPickerSelection", event);
        this.emit("onColorPickerGradientTrackPointerdown", event);
    }

    handleColorPickerGradientTrackPointermove(event) {
        this.updateRgba(event);

        this.emit("onColorPickerSelection", event);
        this.emit("onColorPickerGradientTrackPointermove", event);
    }

    handleColorPickerGradientTrackPointerup(event) {
        this.updateRgba(event);

        document.documentElement.classList.remove("md-gesture--unselectable");

        window.removeEventListener("pointermove", this.handleColorPickerGradientTrackPointermove);
        window.removeEventListener("pointerup", this.handleColorPickerGradientTrackPointerup);

        this.emit("onColorPickerSelection", event);
        this.emit("onColorPickerGradientTrackPointerup", event);
    }

    handleColorPickerHueNativeInput(event) {
        const hue = parseFloat(event.currentTarget.value);

        this.selection.hue = hue;

        this.draw();

        const { red, green, blue } = hslaToRgba(this.selection.hue, this.selection.saturation, this.selection.lightness);
        this.selection.red = red;
        this.selection.green = green;
        this.selection.blue = blue;

        this.selection.hex = rgbaToHex(this.selection.red, this.selection.green, this.selection.blue, this.selection.alpha);

        this.requestUpdate();

        this.emit("onColorPickerSelection", event);
        this.emit("onColorPickerHueNativeInput", event);
    }

    handleColorPickerOpacityNativeInput(event) {
        const alpha = parseFloat(event.currentTarget.value);

        this.selection.alpha = alpha;

        this.selection.hex = rgbaToHex(this.selection.red, this.selection.green, this.selection.blue, this.selection.alpha);

        this.requestUpdate();

        this.emit("onColorPickerSelection", event);
        this.emit("onColorPickerOpacityNativeInput", event);
    }

    /**
     * {{description}}
     */
    showModal(button, options) {
        super.showModal();

        this.setPlacement(button, options);
    }

    /**
     * {{description}}
     */
    show(button, options) {
        super.show();

        this.setPlacement(button, options);
    }

    /**
     * {{description}}
     */
    setPlacement(button, options) {
        this.popper.setPlacement(button, {
            placements: ["top-start", "top-end", "top", "below-start", "below-end", "below", "bottom-start", "bottom-end", "bottom", "above-start", "above-end", "above", "left-start", "left-end", "left", "after-start", "after-end", "after", "right-start", "right-end", "right", "before-start", "before-end", "before", "center"],
            ...options,
        });
    }
}

customElements.define("md-color-picker", MDColorPickerComponent);

export { MDColorPickerComponent };
