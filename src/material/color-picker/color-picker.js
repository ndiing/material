import { html } from "lit";
import { MDSheetComponent } from "../sheet/sheet.js";
import { hexToHsla, hslaToRgba, rgbaToHex, rgbaToHsla } from "../functions/functions.js";
import { MDPopperController } from "../popper/popper.js";

/**
 * A component for selecting and picking colors, extending MDSheetComponent.
 * @extends MDSheetComponent
 * @tagname md-color-picker
 * @fires MDColorPickerComponent#onColorPickerIconButtonClick - Fired when an icon button is clicked.
 * @fires MDColorPickerComponent#onColorPickerButtonClick - Fired when a button is clicked.
 * @fires MDColorPickerComponent#onColorPickerSelection - Fired when a color is selected.
 * @fires MDColorPickerComponent#onColorPickerIconButtonPrevClick - Fired when the previous icon button is clicked.
 * @fires MDColorPickerComponent#onColorPickerIconButtonNextClick - Fired when the next icon button is clicked.
 * @fires MDColorPickerComponent#onColorPickerButtonLabelClick - Fired when the label button is clicked.
 * @fires MDColorPickerComponent#onColorPickerButtonCancelClick - Fired when the cancel button is clicked.
 * @fires MDColorPickerComponent#onColorPickerButtonOkClick - Fired when the OK button is clicked.
 * @fires MDColorPickerComponent#onColorPickerGradientTrackPointerdown - Fired when the gradient track is pressed down.
 * @fires MDColorPickerComponent#onColorPickerGradientTrackPointermove - Fired when the gradient track is moved.
 * @fires MDColorPickerComponent#onColorPickerGradientTrackPointerup - Fired when the gradient track is released.
 * @fires MDColorPickerComponent#onColorPickerHueNativeInput - Fired when the hue input is changed.
 * @fires MDColorPickerComponent#onColorPickerOpacityNativeInput - Fired when the opacity input is changed.
 */
class MDColorPickerComponent extends MDSheetComponent {
    /**
     * @property {String} value - The selected color value in hex format.
     */
    static properties = {
        ...MDSheetComponent.properties,
        value: { type: String },
    };

    /**
     * The body content of the color picker component.
     * @returns {Array} The main rendered content of the component.
     */
    get body() {
        /* prettier-ignore */
        return [this.renderMain()];
    }

    /**
     * Sets the body content of the color picker component.
     * @param {Array} value - The body content to be set.
     */
    set body(value) {
        this._body = value;
    }

    /**
     * The leading actions of the color picker component.
     * @returns {Array} An array containing the leading actions.
     */
    get leadingActions() {
        let label = this.selection.hex;
        return [{ name: "label", component: "button", label }];
    }

    /**
     * The actions of the color picker component.
     * @returns {Array} An array containing the actions.
     */
    get actions() {
        return [{ component: "spacer" }, { name: "cancel", label: "Cancel" }, { name: "ok", label: "Ok" }];
    }

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
     * Initializes the color picker canvas and thumb elements.
     */
    init() {
        this.canvas = this.querySelector(".md-color-picker__gradient-track");
        this.thumb = this.querySelector(".md-color-picker__gradient-thumb");

        this.context = this.canvas.getContext("2d", { willReadFrequently: true });

        this.draw();
        this.updateThumb();
    }

    /**
     * Draws the color gradient on the canvas.
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
     * Finds the pixel on the canvas with the specified color values.
     * @param {Number} r - The red color value.
     * @param {Number} g - The green color value.
     * @param {Number} b - The blue color value.
     * @returns {Object} The coordinates of the found pixel.
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
     * Updates the HSLA selection values based on the current color value.
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
     * Updates the position of the color picker thumb based on the selected color.
     */
    updateThumb() {
        const { x, y } = this.findPixel(this.selection.red, this.selection.green, this.selection.blue);

        this.thumb.style.left = x + "px";
        this.thumb.style.top = y + "px";
    }

    /**
     * Updates the RGBA selection values based on the pointer event.
     * @param {PointerEvent} event - The pointer event.
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

        // this.emit("onColorPickerSelection", event);
        this.emit("onColorPickerButtonCancelClick", event);
    }

    handleColorPickerButtonOkClick(event) {
        this.value = this.selection.hex;

        // this.emit("onColorPickerSelection", event);
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
     * Displays the modal and sets its placement relative to the given button.
     * @param {HTMLElement} button - The button element to position the modal relative to.
     * @param {Object} options - Additional options for positioning.
     */
    showModal(button, options) {
        super.showModal();

        this.setPlacement(button, options);
    }

    /**
     * Shows the component and sets its placement relative to the given button.
     * @param {HTMLElement} button - The button element to position the component relative to.
     * @param {Object} options - Additional options for positioning.
     */
    show(button, options) {
        super.show();

        this.setPlacement(button, options);
    }

    /**
     * Sets the placement of the component relative to the given button.
     * @param {HTMLElement} button - The button element to position the component relative to.
     * @param {Object} options - Additional options for positioning.
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
