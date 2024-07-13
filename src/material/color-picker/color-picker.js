import { html } from "lit";
import { MDSheetComponent } from "../sheet/sheet.js";
import { hexToHsla, hslaToRgba, rgbaToHex, rgbaToHsla } from "../functions/functions.js";
import { MDPopperController } from "../popper/popper.js";

/**
 * Color picker component for selecting colors.
 * @element md-color-picker
 * @extends MDSheetComponent
 * @fires MDColorPickerComponent#onColorPickerIconButtonClick - Fired when an icon button is clicked.
 * @fires MDColorPickerComponent#onColorPickerButtonClick - Fired when a button is clicked.
 * @fires MDColorPickerComponent#onColorPickerIconButtonPrevClick - Fired when the previous icon button is clicked.
 * @fires MDColorPickerComponent#onColorPickerIconButtonNextClick - Fired when the next icon button is clicked.
 * @fires MDColorPickerComponent#onColorPickerButtonLabelClick - Fired when the label button is clicked.
 * @fires MDColorPickerComponent#onColorPickerButtonCancelClick - Fired when the cancel button is clicked.
 * @fires MDColorPickerComponent#onColorPickerButtonOkClick - Fired when the OK button is clicked.
 * @fires MDColorPickerComponent#onColorPickerGradientTrackPointerdown - Fired when the gradient track is pressed.
 * @fires MDColorPickerComponent#onColorPickerGradientTrackPointermove - Fired when the gradient track is moved.
 * @fires MDColorPickerComponent#onColorPickerGradientTrackPointerup - Fired when the gradient track is released.
 * @fires MDColorPickerComponent#onColorPickerHueNativeInput - Fired when the hue input changes.
 * @fires MDColorPickerComponent#onColorPickerSelection - Fired when a color is selected.
 * @fires MDColorPickerComponent#onColorPickerOpacityNativeInput - Fired when the opacity input changes.
 */
class MDColorPickerComponent extends MDSheetComponent {
    /**
     * Properties of the component.
     * @property {String} value - The currently selected color value in hex format.
     */
    static properties = {
        ...MDSheetComponent.properties,
        value: { type: String },
    };

    /**
     * Gets the child nodes of the component.
     * @returns {Array} The child nodes.
     */
    get childNodes_() {
        /* prettier-ignore */
        return [this.renderMain()];
    }

    /**
     * Sets the child nodes of the component.
     * @param {Array} value - The child nodes.
     */
    set childNodes_(value) {
        this._childNodes = value;
    }

    /**
     * Gets the leading actions of the color picker.
     * @returns {Array} The leading actions.
     */
    get leadingActions() {
        let label = this.selection.hex;
        return [{ name: "label", component: "button", label }];
    }

    /**
     * Gets the actions of the color picker.
     * @returns {Array} The actions.
     */
    get actions() {
        return [{ component: "spacer" }, { name: "cancel", label: "Cancel" }, { name: "ok", label: "Ok" }];
    }

    /**
     * Creates an instance of the color picker component.
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
     * Renders the main content of the color picker.
     * @returns {TemplateResult} The main content template.
     * @private
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

    /**
     * Called when the component is connected to the DOM.
     * @private
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-card");
        this.classList.add("md-color-picker");
        this.defaultValue = this.value;
        this.updateHsla();
        await this.updateComplete;
        this.init();
    }

    /**
     * Called when the component is updated.
     * @param {Map} changedProperties - The changed properties.
     * @private
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
     * Initializes the color picker.
     * @private
     */
    init() {
        this.canvas = this.querySelector(".md-color-picker__gradient-track");
        this.thumb = this.querySelector(".md-color-picker__gradient-thumb");
        this.context = this.canvas.getContext("2d", { willReadFrequently: true });
        this.draw();
        this.updateThumb();
    }

    /**
     * Draws the gradient on the canvas.
     * @private
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
     * Finds the pixel in the gradient corresponding to the given RGB values.
     * @param {number} r - The red value.
     * @param {number} g - The green value.
     * @param {number} b - The blue value.
     * @returns {Object} The coordinates of the pixel.
     * @private
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
     * Updates the HSLA selection based on the current color value.
     * @private
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
     * Updates the thumb position based on the current color selection.
     * @private
     */
    updateThumb() {
        const { x, y } = this.findPixel(this.selection.red, this.selection.green, this.selection.blue);
        this.thumb.style.left = x + "px";
        this.thumb.style.top = y + "px";
    }

    /**
     * Updates the RGBA selection based on the event.
     * @param {Event} event - The event object.
     * @private
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
     * Handles the pointer down event on the gradient track.
     * @param {Event} event - The pointer down event.
     * @private
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
     * Handles the pointer move event on the gradient track.
     * @param {Event} event - The pointer move event.
     * @private
     */
    handleColorPickerGradientTrackPointermove(event) {
        this.updateRgba(event);
        this.emit("onColorPickerSelection", event);
        this.emit("onColorPickerGradientTrackPointermove", event);
    }

    /**
     * Handles the pointer up event on the gradient track.
     * @param {Event} event - The pointer up event.
     * @private
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
     * Handles the input event on the hue range input.
     * @param {Event} event - The input event.
     * @private
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
     * Handles the input event on the opacity range input.
     * @param {Event} event - The input event.
     * @private
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
     * Handles the click event on the card icon button.
     * @param {Event} event - The click event.
     * @private
     */
    handleCardIconButtonClick(event) {
        if (event.currentTarget.name === "prev") {
            this.handleColorPickerIconButtonPrevClick(event);
        } else if (event.currentTarget.name === "next") {
            this.handleColorPickerIconButtonNextClick(event);
        }
        this.emit("onColorPickerIconButtonClick", event);
    }

    /**
     * Handles the click event on the card button.
     * @param {Event} event - The click event.
     * @private
     */
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

    /**
     * Handles the previous icon button click event.
     * @param {Event} event - The click event.
     * @private
     */
    handleColorPickerIconButtonPrevClick(event) {
        this.emit("onColorPickerSelection", event);
        this.emit("onColorPickerIconButtonPrevClick", event);
    }

    /**
     * Handles the next icon button click event.
     * @param {Event} event - The click event.
     * @private
     */
    handleColorPickerIconButtonNextClick(event) {
        this.emit("onColorPickerSelection", event);
        this.emit("onColorPickerIconButtonNextClick", event);
    }

    /**
     * Handles the label button click event.
     * @param {Event} event - The click event.
     * @private
     */
    handleColorPickerButtonLabelClick(event) {
        this.emit("onColorPickerButtonLabelClick", event);
    }

    /**
     * Handles the cancel button click event.
     * @param {Event} event - The click event.
     * @private
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
     * Handles the OK button click event.
     * @param {Event} event - The click event.
     * @private
     */
    handleColorPickerButtonOkClick(event) {
        this.value = this.selection.hex;
        this.emit("onColorPickerButtonOkClick", event);
    }

    /**
     * Displays the modal with the color picker.
     * @param {HTMLElement} button - The button element.
     * @param {Object} options - The modal options.
     */
    showModal(button, options) {
        this.setPlacement(button, options);
        super.showModal();
    }

    /**
     * Shows the color picker.
     * @param {HTMLElement} button - The button element.
     * @param {Object} options - The display options.
     */
    show(button, options) {
        this.setPlacement(button, options);
        super.show();
    }

    /**
     * Sets the placement of the color picker.
     * @param {HTMLElement} button - The button element.
     * @param {Object} options - The placement options.
     * @private
     */
    setPlacement(button, options) {
        this.popper.setPlacement(button, {
            /* prettier-ignore */
            placements: [
                "below","below-start","below-end",
                "above","above-start","above-end",
                "before","before-start","before-end",
                "after","after-start","after-end",

                "top","top-start","top-end",
                "bottom","bottom-start","bottom-end",
                "left","left-start","left-end",
                "right","right-start","right-end",
            ],
            ...options,
        });
    }
}

customElements.define("md-color-picker", MDColorPickerComponent);
export { MDColorPickerComponent };
