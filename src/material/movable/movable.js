/**
 * Movable class responsible for enabling drag-and-drop and resize functionality on elements.
 */
class Movable {
    /**
     * Creates an instance of the Movable class.
     * @param {HTMLElement} host - The host element.
     * @param {Object} [options={}] - Additional options for the movable element.
     * @param {Array<string>} [options.axis=["x", "y"]] - The axis along which the element can be moved.
     * @param {Array<string>} [options.handles=["n", "e", "s", "w", "nw", "ne", "sw", "se"]] - The resize handles.
     */
    constructor(host, options = {}) {
        this.host = host;
        this.options = {
            axis: ["x", "y"],
            handles: ["n", "e", "s", "w", "nw", "ne", "sw", "se"],
            ...options,
        };
        this.init();
    }

    // /**
    //  * Handles the pointer down event for dragging and resizing.
    //  * @param {PointerEvent} event - The pointer down event.
    //  */
    handlePointerdown(event) {
        this.handle = event.target.closest(".md-resizable__handle") && event.target.className.match(/--(\w+)/)[1];
        document.body.classList.add("md-user-select--none");
        window.addEventListener("pointermove", this.handlePointermove);
        window.addEventListener("pointerup", this.handlePointerup);
        this.endX = this.endX ?? 0;
        this.endY = this.endY ?? 0;
        this.startX = event.clientX - this.endX;
        this.startY = event.clientY - this.endY;
        this.startWidth = this.host.clientWidth;
        this.startHeight = this.host.clientHeight;
        /**
         * @event onMovablePointerdown
         * @property {Object} event - The pointer down event.
         */
        this.emit("onMovablePointerdown");
    }

    // /**
    //  * Handles the pointer move event for dragging and resizing.
    //  * @param {PointerEvent} event - The pointer move event.
    //  */
    handlePointermove(event) {
        const currentX = event.clientX - this.startX;
        const currentY = event.clientY - this.startY;
        if (this.handle) {
            if (this.handle === "e" || this.handle === "ne" || this.handle === "se") {
                this.currentWidth = this.startWidth + currentX - this.endX;
            }
            if (this.handle === "w" || this.handle === "sw" || this.handle === "nw") {
                this.currentX = currentX;
                this.currentWidth = this.startWidth - currentX + this.endX;
            }
            if (this.handle === "s" || this.handle === "se" || this.handle === "sw") {
                this.currentHeight = this.startHeight + currentY - this.endY;
            }
            if (this.handle === "n" || this.handle === "ne" || this.handle === "nw") {
                this.currentY = currentY;
                this.currentHeight = this.startHeight - currentY + this.endY;
            }
        } else {
            if (this.options.axis.includes("x")) {
                this.currentX = currentX;
            }
            if (this.options.axis.includes("y")) {
                this.currentY = currentY;
            }
        }
        this.host.style.setProperty("position", "relative");
        this.host.style.setProperty("left", (this.currentX ?? 0) + "px");
        this.host.style.setProperty("top", (this.currentY ?? 0) + "px");
        this.host.style.setProperty("width", (this.currentWidth ?? this.startWidth) + "px");
        this.host.style.setProperty("height", (this.currentHeight ?? this.startHeight) + "px");
        /**
         * @event onMovablePointermove
         * @property {Object} event - The pointer move event.
         */
        this.emit("onMovablePointermove");
    }

    // /**
    //  * Handles the pointer up event for dragging and resizing.
    //  * @param {PointerEvent} event - The pointer up event.
    //  */
    handlePointerup(event) {
        this.endX = this.currentX;
        this.endY = this.currentY;
        document.body.classList.remove("md-user-select--none");
        window.removeEventListener("pointermove", this.handlePointermove);
        window.removeEventListener("pointerup", this.handlePointerup);
        /**
         * @event onMovablePointerup
         * @property {Object} event - The pointer up event.
         */
        this.emit("onMovablePointerup");
    }

    // /**
    //  * Emits a custom event from the host element.
    //  * @param {string} type - The type of event to emit.
    //  * @param {Object} [detail] - The event detail.
    //  */
    emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });
        this.host.dispatchEvent(event);
    }

    /**
     * Initializes the movable functionality by adding resize handles and event listeners.
     */
    init() {
        let text = "";
        text += `<div class="md-resizable">`;
        for (const handle of this.options.handles) {
            text += `<div class="md-resizable__handle md-resizable__handle--${handle}"></div>`;
        }
        text += "</div>";
        this.host.insertAdjacentHTML("afterbegin", text);
        this.handlePointerdown = this.handlePointerdown.bind(this);
        this.handlePointermove = this.handlePointermove.bind(this);
        this.handlePointerup = this.handlePointerup.bind(this);
        this.host.addEventListener("pointerdown", this.handlePointerdown);
    }

    /**
     * Destroys the movable functionality by removing resize handles and event listeners.
     */
    destroy() {
        const resizable = this.host.querySelector(".md-resizable");
        if (resizable) {
            resizable.remove();
        }
        this.host.removeEventListener("pointerdown", this.handlePointerdown);
        this.handlePointerdown = null;
        this.handlePointermove = null;
        this.handlePointerup = null;
    }
}
export { Movable };
