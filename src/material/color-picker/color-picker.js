import { html } from "lit";
import { MDSheetComponent } from "../sheet/sheet.js";
import { hexToHsla, hslaToRgba, rgbaToHex, rgbaToHsla } from "../functions/functions.js";
import { MDPopperController } from "../popper/popper.js";

/**
 * {{desc}}
 * @extends MDSheetComponent
 * @element md-color-picker
 * @fires MDColorPickerComponent#onScrimClick - {{desc}}
 * @fires MDColorPickerComponent#onColorPickerButtonLabelClick - {{desc}}
 * @fires MDColorPickerComponent#onColorPickerSelection - {{desc}}
 * @fires MDColorPickerComponent#onColorPickerGradientTrackPointerdown - {{desc}}
 * @fires MDColorPickerComponent#onColorPickerGradientTrackPointermove - {{desc}}
 * @fires MDColorPickerComponent#onColorPickerGradientTrackPointerup - {{desc}}
 * @fires MDColorPickerComponent#onColorPickerHueNativeInput - {{desc}}
 * @fires MDColorPickerComponent#onColorPickerOpacityNativeInput - {{desc}}
 * @fires MDColorPickerComponent#onColorPickerButtonCancelClick - {{desc}}
 * @fires MDColorPickerComponent#onColorPickerButtonOkClick - {{desc}}
 */
class MDColorPickerComponent extends MDSheetComponent {
    /**
     * {{desc}}
     * @property {String} tooltip - {{desc}}
     * @property {String} variant - {{desc}}
     * @property {Array} leadingActions - {{desc}}
     * @property {String} headline - {{desc}}
     * @property {String} subhead - {{desc}}
     * @property {Array} trailingActions - {{desc}}
     * @property {Array} actions - {{desc}}
     * @property {Boolean} open - {{desc}}
     * @property {String} value - {{desc}}
     */
    static properties = {
        ...MDSheetComponent.properties,
        value: { type: String },
    };

    /**
     * {{desc}}
     */
    get childNodes_() {
        /* prettier-ignore */
        return [this.renderMain()];
    }

    /**
     * {{desc}}
     * @param {Any} value - {{desc}}
     */
    set childNodes_(value) {
        this._childNodes = value;
    }

    /**
     * {{desc}}
     */
    get leadingActions() {
        let label = this.selection.hex;
        return [{ component: "button", label, onButtonClick: this.handleColorPickerButtonLabelClick.bind(this) }];
    }

    /**
     * {{desc}}
     */
    get actions() {
        return [{ component: "spacer" }, { label: "Cancel", onButtonClick: this.handleColorPickerButtonCancelClick.bind(this) }, { label: "Ok", onButtonClick: this.handleColorPickerButtonOkClick.bind(this) }];
    }

    /**
     * {{desc}}
     */
    constructor() {
        super();
        this.selection = {};
        this.value = "#000000";
        this.handleColorPickerGradientTrackPointermove = this.handleColorPickerGradientTrackPointermove.bind(this);
        this.handleColorPickerGradientTrackPointerup = this.handleColorPickerGradientTrackPointerup.bind(this);
        this.popper = new MDPopperController(this, {});
    }

    /**
     * {{desc}}
     */
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
                    <input 
                        aria-label="Hue"
                        type="range" 
                        class="md-color-picker__hue-native"
                        min="0"
                        max="360"
                        .value="${this.selection.hue}"
                        @input="${this.handleColorPickerHueNativeInput}"
                    >
                </label>
                <label class="md-color-picker__opacity">
                    <input 
                        aria-label="Opacity"
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

    /**
     * {{desc}}
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-color-picker");
        this.defaultValue = this.value;
        this.updateHsla();
        await this.updateComplete;
        this.init();
    }

    /**
     * {{desc}}
     * @param {Any} changedProperties - {{desc}}
     */
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
     * {{desc}}
     */
    init() {
        this.canvas = this.querySelector(".md-color-picker__gradient-track");
        this.thumb = this.querySelector(".md-color-picker__gradient-thumb");
        this.context = this.canvas.getContext("2d", { willReadFrequently: true });
        this.draw();
        this.updateThumb();
    }

    /**
     * {{desc}}
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
     * {{desc}}
     * @param {Any} r - {{desc}}
     * @param {Any} g - {{desc}}
     * @param {Any} b - {{desc}}
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
     * {{desc}}
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
     * {{desc}}
     */
    updateThumb() {
        const { x, y } = this.findPixel(this.selection.red, this.selection.green, this.selection.blue);
        this.thumb.style.left = x + "px";
        this.thumb.style.top = y + "px";
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
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

    /**
     * {{desc}}
     */
    getValue() {
        return this.selection.hex.slice(0, 1 + 6);
    }

    /**
     * {{desc}}
     * @param {Any} button - {{desc}}
     * @param {Any} options - {{desc}}
     */
    showModal(button, options) {
        this.updatePosition(button, options);
        super.showModal();
    }

    /**
     * {{desc}}
     * @param {Any} button - {{desc}}
     * @param {Any} options - {{desc}}
     */
    show(button, options) {
        this.updatePosition(button, options);
        super.show();
    }

    /**
     * {{desc}}
     * @param {Any} button - {{desc}}
     * @param {Any} options - {{desc}}
     */
    updatePosition(button, options) {
        this.popper.setPosition(button, {
            /* prettier-ignore */
            placements: [
                "below-start","below-end","below",
                "above-start","above-end","above",
                "before-start","before-end","before",
                "after-start","after-end","after",
                "top-start","top-end","top",
                "bottom-start","bottom-end","bottom",
                "left-start","left-end","left",
                "right-start","right-end","right",
            ],
            ...options,
        });
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleColorPickerButtonLabelClick(event) {
        this.emit("onColorPickerButtonLabelClick", event);
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleColorPickerGradientTrackPointerdown(event) {
        window.addEventListener("pointermove", this.handleColorPickerGradientTrackPointermove);
        window.addEventListener("pointerup", this.handleColorPickerGradientTrackPointerup);
        document.documentElement.classList.add("md-gesture--unselectable");
        this.canvasRect = this.canvas.getBoundingClientRect();
        this.updateRgba(event);
        this.emit("onColorPickerSelection", event);
        this.emit("onColorPickerGradientTrackPointerdown", event);
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleColorPickerGradientTrackPointermove(event) {
        this.updateRgba(event);
        this.emit("onColorPickerSelection", event);
        this.emit("onColorPickerGradientTrackPointermove", event);
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleColorPickerGradientTrackPointerup(event) {
        this.updateRgba(event);
        document.documentElement.classList.remove("md-gesture--unselectable");
        window.removeEventListener("pointermove", this.handleColorPickerGradientTrackPointermove);
        window.removeEventListener("pointerup", this.handleColorPickerGradientTrackPointerup);
        this.emit("onColorPickerSelection", event);
        this.emit("onColorPickerGradientTrackPointerup", event);
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
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

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleColorPickerOpacityNativeInput(event) {
        const alpha = parseFloat(event.currentTarget.value);
        this.selection.alpha = alpha;
        this.selection.hex = rgbaToHex(this.selection.red, this.selection.green, this.selection.blue, this.selection.alpha);
        this.requestUpdate();
        this.emit("onColorPickerSelection", event);
        this.emit("onColorPickerOpacityNativeInput", event);
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleColorPickerButtonCancelClick(event) {
        this.value = this.defaultValue;
        this.updateHsla();
        this.draw();
        this.updateThumb();
        this.requestUpdate();
        this.emit("onColorPickerButtonCancelClick", event);
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleColorPickerButtonOkClick(event) {
        this.value = this.selection.hex;
        this.emit("onColorPickerButtonOkClick", event);
    }
}
customElements.define("md-color-picker", MDColorPickerComponent);
export { MDColorPickerComponent };
